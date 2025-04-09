import React, { createContext, useState, useEffect, ReactNode } from "react";
import { applyTheme } from "./themeManager";

// Tipos para el contexto de tema
interface ThemeContextType {
  theme: string;
  mode: string;
  setTheme: (theme: string) => void;
  setMode: (mode: string) => void;
  toggleMode: () => void;
}

// Crear el contexto
export const ThemeContext = createContext<ThemeContextType>({
  theme: "default",
  mode: "light",
  setTheme: () => {},
  setMode: () => {},
  toggleMode: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

// Componente proveedor del contexto
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<string>("default");
  const [mode, setModeState] = useState<string>("light");

  // Inicializar tema al cargar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "default";
    const savedMode =
      localStorage.getItem("mode") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setThemeState(savedTheme);
    setModeState(savedMode);
    applyTheme(savedTheme, savedMode);
  }, []);

  const setTheme = (newTheme: string) => {
    setThemeState(newTheme);
    applyTheme(newTheme, mode);
  };

  const setMode = (newMode: string) => {
    setModeState(newMode);
    applyTheme(theme, newMode);
  };

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setModeState(newMode);
    applyTheme(theme, newMode);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, mode, setTheme, setMode, toggleMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
