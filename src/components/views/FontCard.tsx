import React, { useState } from "react";
import FontTabs from "./FontTabs";
import "../../styles/components.css";

interface FontCardProps {
  font: {
    id: string;
    name: string;
    family: string;
    styles: string[];
    preview: string;
  };
}

const FontCard: React.FC<FontCardProps> = ({ font }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`font-card ${expanded ? "expanded" : ""}`}>
      <div className="font-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="font-info">
          <h3 className="font-name">{font.name}</h3>
          <span className="font-family">{font.family}</span>
          <span className="font-styles-count">
            {font.styles.length} estilos
          </span>
        </div>
        <div className="font-card-actions">
          <button className="toggle-expand-button">
            {expanded ? "−" : "+"}
          </button>
        </div>
      </div>

      <div className="font-preview" style={{ fontFamily: font.name }}>
        {font.preview}
      </div>

      {expanded && (
        <FontTabs
          fontId={font.id}
          styles={font.styles}
          previewText={font.preview}
        />
      )}
    </div>
  );
};

export default FontCard;
