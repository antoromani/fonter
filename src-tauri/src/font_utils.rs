use std::fs;
use std::path::Path;

pub fn install_font(font_path: &str) -> Result<(), String> {
    let font_file = Path::new(font_path);
    let font_name = font_file.file_name().ok_or("Invalid font file")?;
    let dest_path = format!("/usr/share/fonts/{}", font_name.to_str().unwrap());

    fs::copy(font_path, &dest_path).map_err(|e| e.to_string())?;
    Ok(())
}