import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Importar estilos en orden de especificidad
import "./styles/globals.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/themes/default.css";
import "./styles/themes/minimalist.css";

import { initializeTheme } from "./hooks/themeManager";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

initializeTheme();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
