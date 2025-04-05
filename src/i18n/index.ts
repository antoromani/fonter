import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      folder: "Folder",
      collection: "Collection",
      settings: "Settings",
      share: "Share",
      // ...otros textos
    },
  },
  es: {
    translation: {
      folder: "Carpeta",
      collection: "Colección",
      settings: "Configuración",
      share: "Compartir",
      // ...otros textos
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
