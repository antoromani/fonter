import React, { useState } from "react";
import Icon from "../common/Icon";
import { useTranslation } from "react-i18next";
import "../../styles/components.css";
import Tooltip from "../common/Tooltip";


interface FontControlsProps {
  onSearch: (query: string) => void;
  onFilter: () => void;
  onViewChange: (view: "grid" | "rows") => void;
  onOrderChange: () => void;
  onCompare: () => void;
  onReset: () => void;
  onExampleTextChange: (text: string) => void;
  onFontSizeChange: (size: number) => void;
  exampleText: string;
  fontSize: number;
}

const FontControls: React.FC<FontControlsProps> = ({
  onSearch,
  onFilter,
  onViewChange,
  onOrderChange,
  onCompare,
  onReset,
  onExampleTextChange,
  onFontSizeChange,
  exampleText,
  fontSize,
}) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [activeView, setActiveView] = React.useState<"grid" | "rows">("rows");
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleViewChange = (view: "grid" | "rows") => {
    setActiveView(view);
    onViewChange(view);
  };

  const handleExampleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onExampleTextChange(e.target.value);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFontSizeChange(Number(e.target.value));
  };

  return (
    <div className="font-controls">
      <div className="controls-left">
        <div className="view-buttons">
          <button
            className={`control-button ${
              activeView === "grid" ? "active" : ""
            }`}
            onClick={() => handleViewChange("grid")}
            aria-label={t("viewAsGrid")}
          >
            <Icon name="grid" className="icon" ariaHidden={true} />
          </button>
          <button
            className={`control-button ${
              activeView === "rows" ? "active" : ""
            }`}
            onClick={() => handleViewChange("rows")}
            aria-label={t("viewAsRows")}
          >
            <Icon name="rows" className="icon" ariaHidden={true} />
          </button>
        </div>

        <button
          className="control-button"
          onClick={onOrderChange}
          aria-label={t("changeOrder")}
        >
          <Icon name="order" className="icon" ariaHidden={true} />
        </button>

        <button
          className="control-button"
          onClick={onCompare}
          aria-label={t("compareFonts")}
        >
          <Icon name="compare" className="icon" ariaHidden={true} />
        </button>

        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder={t("searchFonts")}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Icon name="search" className="search-icon" ariaHidden={true} />
          <button
            className="filter-button"
            onClick={onFilter}
            aria-label={t("filterFonts")}
          >
            <Icon name="funnel" className="icon" ariaHidden={true} />
          </button>
        </div>
      </div>

      <div className="controls-right">
        <div className="font-size-control">
          <input
            type="text"
            value={exampleText}
            onChange={handleExampleTextChange}
            className="custom-text-font-preview"
            placeholder={t("editExampleText")}
            aria-label={t("editExampleText")}
          />
          <Tooltip content={`${fontSize}px`} positionType="top">
            <input
              type="range"
              min="8"
              max="72"
              value={fontSize}
              onChange={handleFontSizeChange}
              className="font-size-slider"
              aria-label={t("adjustFontSize")}
            />
          </Tooltip>
          <button
            className="reset-button"
            onClick={onReset}
            aria-label={t("resetFontSize")}
          >
            <Icon name="reset" className="icon" ariaHidden={true} />
          </button>
        </div>
      </div>
  
    </div>
  );
};

export default FontControls;
