import React from "react";
import StylesTab from "./tabs/StylesTab";
import GlyphsTab from "./tabs/GlyphsTab";
import WaterfallTab from "./tabs/WaterfallTab";
import { useTranslation } from "react-i18next";
import "../../styles/components.css";

interface FontTabsProps {
  fontId: string;
  styles: string[];
  previewText: string;
}

const FontTabs: React.FC<FontTabsProps> = ({ fontId, styles, previewText }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = React.useState<
    "styles" | "glyphs" | "waterfall"
  >("styles");

  return (
    <div className="font-tabs">
      <div className="tabs-header">
        <button
          className={`tab-button ${activeTab === "styles" ? "active" : ""}`}
          onClick={() => setActiveTab("styles")}
        >
          {t("styles")}
        </button>
        <button
          className={`tab-button ${activeTab === "glyphs" ? "active" : ""}`}
          onClick={() => setActiveTab("glyphs")}
        >
          {t("glyphs")}
        </button>
        <button
          className={`tab-button ${activeTab === "waterfall" ? "active" : ""}`}
          onClick={() => setActiveTab("waterfall")}
        >
          {t("waterfall")}
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "styles" && (
          <StylesTab fontId={fontId} styles={styles} />
        )}
        {activeTab === "glyphs" && <GlyphsTab fontId={fontId} />}
        {activeTab === "waterfall" && (
          <WaterfallTab fontId={fontId} previewText={previewText} />
        )}
      </div>
    </div>
  );
};

export default FontTabs;
