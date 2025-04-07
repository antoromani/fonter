import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("default");
  const [mode, setMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "default");
    setMode(localStorage.getItem("mode") || mode);
  }, []);

  return { theme, mode, setTheme, setMode };
}
