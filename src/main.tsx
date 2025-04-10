import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import único para CSS - mejora la carga
import "./styles/index.css";

import { initializeTheme } from "./config/theme/themeManager";
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
