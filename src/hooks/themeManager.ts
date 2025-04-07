const VALID_THEMES = ["default", "minimalist"] as const;
type ThemeType = (typeof VALID_THEMES)[number];

const VALID_MODES = ["light", "dark"] as const;
type ModeType = (typeof VALID_MODES)[number];

export function setTheme(theme: string, mode: string) {
  const validatedTheme = VALID_THEMES.includes(theme as ThemeType)
    ? theme
    : "default";
  const validatedMode = VALID_MODES.includes(mode as ModeType) ? mode : "light";

  document.documentElement.setAttribute("data-theme", validatedTheme);
  document.documentElement.setAttribute("data-mode", validatedMode);

  // Guardar preferencias
  localStorage.setItem("theme", validatedTheme);
  localStorage.setItem("mode", validatedMode);
}

export function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "default";
  const savedMode = localStorage.getItem("mode") || "light";
  setTheme(savedTheme, savedMode);
}

export function getCurrentTheme(): { theme: string; mode: string } {
  return {
    theme: document.documentElement.getAttribute("data-theme") || "default",
    mode: document.documentElement.getAttribute("data-mode") || "light",
  };
}
