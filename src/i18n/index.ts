import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/en.json";
import es from "../locales/es.json";

// Obtener idioma guardado o usar preferencia del navegador
const savedLanguage = localStorage.getItem("language");
const browserLanguage = navigator.language.split("-")[0]; // 'es-ES' -> 'es'
const defaultLanguage =
  savedLanguage || (browserLanguage === "es" ? "es" : "en");

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
  },
  lng: defaultLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
