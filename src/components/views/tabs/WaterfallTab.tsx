import React, { useState } from "react";
import Tooltip from "../../common/Tooltip";
import "../../../styles/components.css";

interface WaterfallTabProps {
  fontId: string;
  previewText: string;
}

const WaterfallTab: React.FC<WaterfallTabProps> = ({ fontId, previewText }) => {
  const [customText, setCustomText] = useState(previewText);

  // Tamaños predefinidos para la cascada
  const sizes = [8, 12, 16, 24, 32, 48, 64];

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomText(e.target.value);
  };

  return (
    <div className="waterfall-tab">
      <div className="waterfall-text-input">
        <input
          type="text"
          value={customText}
          onChange={handleTextChange}
          className="custom-text-input"
          placeholder="Escribe un texto personalizado para ver la muestra..."
        />
      </div>

      <div className="waterfall-samples">
        {sizes.map((size) => (
          <div key={`${fontId}-size-${size}`} className="waterfall-item">
            <Tooltip content={`${size}px`} positionType="left">
              <div
                className="waterfall-text"
                style={{
                  fontFamily: fontId,
                  fontSize: `${size}px`,
                }}
              >
                {customText}
              </div>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WaterfallTab;
