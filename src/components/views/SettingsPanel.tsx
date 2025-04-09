import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../config/theme/useTheme";
import Icon from "../common/Icon";
import "../../styles/components.css";

interface SettingsPanelProps {
  onBackToList: () => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onBackToList }) => {
  const { t, i18n } = useTranslation();
  const { theme, mode, setTheme, setMode, toggleMode } = useTheme();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  // Cargar idioma guardado
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    }
  }, [i18n]);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = e.target.value;
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return (
    <div className="settings-panel">
      <h1 className="settings-title">
        <button
          className="back-button"
          onClick={onBackToList}
          aria-label={t("backToList")}
        >
          <Icon name="arrow-left" className="back-icon" />
        </button>
        {t("settings")}
      </h1>

      <div className="settings-section">
        <h2 className="section-title">{t("appearance")}</h2>

        <div className="setting-group">
          <h3 className="setting-title">{t("theme")}</h3>
          <div className="theme-options">
            <button
              className={`theme-option ${theme === "default" ? "active" : ""}`}
              onClick={() => setTheme("default")}
            >
              {t("defaultTheme")}
            </button>
            <button
              className={`theme-option ${
                theme === "minimalist" ? "active" : ""
              }`}
              onClick={() => setTheme("minimalist")}
            >
              {t("minimalistTheme")}
            </button>
          </div>
        </div>

        <div className="setting-group">
          <h3 className="setting-title">{t("mode")}</h3>
          <div className="setting-option">
            <label className="toggle-switch">
              <input
                type="checkbox"
                id="dark-mode"
                checked={mode === "dark"}
                onChange={toggleMode}
              />
              <span className="toggle-slider"></span>
            </label>
            <label htmlFor="dark-mode">
              {mode === "dark" ? t("darkMode") : t("lightMode")}
            </label>
          </div>
        </div>

        <div className="setting-group">
          <h3 className="setting-title">{t("language")}</h3>
          <select
            className="language-select"
            value={currentLanguage}
            onChange={handleLanguageChange}
          >
            <option value="es">{t("spanish")}</option>
            <option value="en">{t("english")}</option>
          </select>
        </div>

        <div className="setting-group">
          <h3 className="setting-title">{t("fontDisplay")}</h3>
          <div className="setting-option">
            <label className="toggle-switch">
              <input type="checkbox" id="grid-labels" />
              <span className="toggle-slider"></span>
            </label>
            <label htmlFor="grid-labels">{t("showLabelsInGrid")}</label>
          </div>

          <div className="setting-option">
            <label className="toggle-switch">
              <input type="checkbox" id="auto-preview" />
              <span className="toggle-slider"></span>
            </label>
            <label htmlFor="auto-preview">{t("autoPreviewOnHover")}</label>
          </div>
        </div>
      </div>

      <div className="settings-section">
        <h2 className="section-title">{t("about")}</h2>
        <div className="about-content">
          <p>Fonter v1.0.0</p>
          <p>{t("aboutDescription")}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
