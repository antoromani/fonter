import React from "react";
import "../../../styles/components.css";

interface StylesTabProps {
  fontId: string;
  styles: string[];
}

const StylesTab: React.FC<StylesTabProps> = ({ fontId, styles }) => {
  return (
    <div className="styles-tab">
      <h4 className="tab-subtitle">Estilos disponibles</h4>
      <div className="styles-grid">
        {styles &&
          styles.map((style, index) => (
            <div key={`${fontId}-${style}`} className="style-item">
              <div
                className="style-preview"
                style={{
                  fontFamily: fontId,
                  fontWeight: style.toLowerCase().includes("bold")
                    ? "bold"
                    : style.toLowerCase().includes("light")
                    ? "lighter"
                    : "normal",
                  fontStyle: style.toLowerCase().includes("italic")
                    ? "italic"
                    : "normal",
                }}
              >
                Aa
              </div>
              <span className="style-name">{style}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StylesTab;
