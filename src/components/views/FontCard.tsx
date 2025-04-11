import React, { useState } from "react";
import FontTabs from "./FontTabs";
import "../../styles/components.css";
import Icon from "../common/Icon";

interface FontCardProps {
  font: {
    id: string;
    name: string;
    family: string;
    styles: string[];
    preview: string;
  };
  customText?: string;
  fontSize?: number;
}

const FontCard: React.FC<FontCardProps> = ({ font, customText, fontSize = 18 }) => {
  const [expanded, setExpanded] = useState(false);

  // Usar el texto personalizado si está disponible, de lo contrario usar el texto de vista previa del font
  const displayText = customText || font.preview;

  return (
    <div className={`font-card ${expanded ? "expanded" : ""}`}>
      <div className="font-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="font-info">
          <h3 className="font-name">
            {font.name}
          </h3>
          <span className="font-styles-count">
            {font.styles.length} estilos
          </span>
        </div>
        <div className="font-card-actions">
          <div className="icon-row">
            <Icon name="font-file" className="icon" ariaLabel="Font File" />
            <Icon name="download" className="icon" ariaLabel="Download" />
            <span className="icon-separator"></span>
            <Icon name="compare" className="icon" ariaLabel="Compare" />
            <Icon name="collection" className="icon" ariaLabel="Collection" />
            <Icon name="favorite" className="icon" ariaLabel="Favorite" />
          </div>
        </div>
      </div>

      <div className="font-preview-container">
        <button className="toggle-font-preview-tabs" onClick={() => setExpanded(!expanded)}>
          {expanded ? "−" : "+"}
        </button>
        
        <div 
          className="font-preview" 
          style={{ 
            fontFamily: font.name,
            fontSize: `${fontSize}px`
          }}
        >
          {displayText}
        </div>
      </div>

      {expanded && (
        <FontTabs
          fontId={font.id}
          styles={font.styles}
          previewText={displayText}
          glyphs={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]} // Lista de glifos de ejemplo
        />
      )}
    </div>
  );
};

export default FontCard;
