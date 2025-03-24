#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::command;
use font_kit::source::SystemSource;
use font_kit::properties::Properties;
use std::collections::HashMap;

#[command]
fn listar_fuentes() -> Vec<String> {
    vec!["Arial".to_string(), "Times New Roman".to_string()] // Ejemplo
}

#[derive(serde::Serialize)]
struct FontInfo {
    family_name: String,
    style_name: String,
    weight: i32,
    is_italic: bool,
    path: String,
}

#[command]
fn get_system_fonts() -> Result<HashMap<String, Vec<FontInfo>>, String> {
    let source = SystemSource::new();
    let mut font_families: HashMap<String, Vec<FontInfo>> = HashMap::new();

    let families = match source.all_families() {
        Ok(f) => f,
        Err(e) => return Err(format!("Failed to get font families: {}", e)),
    };

    for family_name in families {
        let fonts = match source.select_family_by_name(&family_name) {
            Ok(fonts) => fonts,
            Err(_) => continue,
        };

        let mut family_fonts = Vec::new();
        for font in fonts.fonts() {
            let font_face = match font.load() {
                Ok(f) => f,
                Err(_) => continue,
            };

            let style_name = font_face.postscript_name()
                .unwrap_or_else(|| "Unknown".to_string());
            
            let properties = font_face.properties();
            
            family_fonts.push(FontInfo {
                family_name: family_name.clone(),
                style_name,
                weight: properties.weight.0 as i32,
                is_italic: properties.style == font_kit::properties::Style::Italic,
                path: "Font path unavailable".to_string(),
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
        .invoke_handler(tauri::generate_handler![listar_fuentes, get_system_fonts])
        .run(tauri::generate_context!())
        .expect("Error al iniciar Tauri");
}