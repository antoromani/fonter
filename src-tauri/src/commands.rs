// Archivo central para exponer comandos de Tauri
use tauri::command;

#[command]
fn ejemplo_comando() -> String {
    "Hola desde Tauri".to_string()
}

pub fn init() -> Vec<tauri::command::Command> {
    tauri::generate_handler![ejemplo_comando]
}