import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FontControls from "./FontControls";
import FontCard from "./FontCard";
import "../../styles/components.css";

// Tipo para representar una fuente
interface Font {
  id: string;
  name: string;
  family: string;
  styles: string[];
  preview: string;
}

// Datos de ejemplo
const sampleFonts: Font[] = [
  {
    id: "font1",
    name: "Inter",
    family: "Sans-serif",
    styles: ["Regular", "Bold", "Italic", "Medium", "Light"],
    preview: "The quick brown fox jumps over the lazy dog.",
  },
  {
    id: "font2",
    name: "Roboto",
    family: "Sans-serif",
    styles: ["Regular", "Bold", "Italic", "Medium", "Light"],
    preview: "The quick brown fox jumps over the lazy dog.",
  },
  {
    id: "font3",
    name: "Merriweather",
    family: "Serif",
    styles: ["Regular", "Bold", "Italic"],
    preview: "The quick brown fox jumps over the lazy dog.",
  },
];

const DEFAULT_TEXT = "The quick brown fox jumps over the lazy dog.";
const DEFAULT_FONT_SIZE = 18;

const FontList: React.FC = () => {
  const { t } = useTranslation();
  const [fonts, setFonts] = useState<Font[]>(sampleFonts);
  const [viewMode, setViewMode] = useState<"grid" | "rows">("rows");
  const [searchQuery, setSearchQuery] = useState("");
  const [exampleText, setExampleText] = useState(DEFAULT_TEXT);
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFonts(sampleFonts);
    } else {
      const filtered = sampleFonts.filter(
        (font) =>
          font.name?.toLowerCase().includes(query.toLowerCase()) ||
          font.family?.toLowerCase().includes(query.toLowerCase()
        )
      );
      setFonts(filtered);
    }
  };

  const handleFilter = () => {
    // Implementación de filtros avanzados
    console.log("Filtering fonts...");
  };

  const handleViewChange = (view: "grid" | "rows") => {
    setViewMode(view);
  };

  const handleOrderChange = () => {
    // Implementación para cambiar el orden
    console.log("Changing order...");
  };

  const handleCompare = () => {
    // Implementación para comparar fuentes
    console.log("Comparing fonts...");
  };

  const handleReset = () => {
    // Resetear el texto de ejemplo y el tamaño de fuente a los valores predeterminados
    setExampleText(DEFAULT_TEXT);
    setFontSize(DEFAULT_FONT_SIZE);
  };

  const handleExampleTextChange = (text: string) => {
    setExampleText(text);
  };

  const handleFontSizeChange = (size: number) => {
    setFontSize(size);
  };

  return (
    <div className="font-list-container">
      <FontControls
        onSearch={handleSearch}
        onFilter={handleFilter}
        onViewChange={handleViewChange}
        onOrderChange={handleOrderChange}
        onCompare={handleCompare}
        onReset={handleReset}
        onExampleTextChange={handleExampleTextChange}
        onFontSizeChange={handleFontSizeChange}
        exampleText={exampleText}
        fontSize={fontSize}
      />

      <h1 className="font-list-title">{t("fontLibrary")}</h1>

      <div
        className={`font-grid ${
          viewMode === "rows" ? "grid-rows" : "grid-cols"
        }`}
      >
        {fonts.length > 0 ? (
          fonts.map((font) => (
            <FontCard 
              key={font.id} 
              font={font} 
              customText={exampleText} 
              fontSize={fontSize} 
            />
          ))
        ) : (
          <div className="no-fonts-message">{t("noFontsFound")}</div>
        )}
      </div>
    </div>
  );
};

export default FontList;
