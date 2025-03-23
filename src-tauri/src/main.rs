#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::command;
// Eliminamos la importación no utilizada de Manager
use font_kit::source::SystemSource;
// Eliminamos la importación no utilizada de FamilyName
use std::collections::HashMap;

#[derive(serde::Serialize)]
struct FontInfo {
    family_name: String,
    style_name: String,
    path: String,
}

#[command]
fn get_system_fonts() -> Result<HashMap<String, Vec<FontInfo>>, String> {
    let source = SystemSource::new();
    let mut font_families: HashMap<String, Vec<FontInfo>> = HashMap::new();
    
    // Get all font families
    let families = match source.all_families() {
        Ok(f) => f,
        Err(e) => return Err(format!("Failed to get font families: {}", e)),
    };
    
    for family_name in families {
        // Corregimos la llamada a select_family_by_name para que solo tome un argumento
        let fonts = match source.select_family_by_name(&family_name) {
            Ok(fonts) => fonts,
            Err(_) => continue, // Skip if we can't load this family
        };
        
        let mut family_fonts = Vec::new();
        
        for font in fonts.fonts() {
            let font_face = match font.load() {
                Ok(f) => f,
                Err(_) => continue, // Skip if we can't load this font
            };
            
            let style_name = font_face.postscript_name().unwrap_or_else(|| "Unknown".to_string());
            
            // Font no tiene un método path(), vamos a usar una alternativa
            // En font-kit, podemos obtener el path de otras maneras dependiendo del tipo de fuente
            // Por ahora, usaremos una cadena genérica
            let path = "Font path unavailable".to_string();
            
            family_fonts.push(FontInfo {
                family_name: family_name.clone(),
                style_name,
                path,
            });
        }
        
        if !family_fonts.is_empty() {
            font_families.insert(family_name, family_fonts);
        }
    }
    
    Ok(font_families)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_system_fonts])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
