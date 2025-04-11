import React from "react";
import "../../../styles/components.css";

interface GlyphsTabProps {
  fontId: string;
}

const GlyphsTab: React.FC<GlyphsTabProps> = ({ fontId }) => {
  // Ejemplo básico de glifos para mostrar
  const glyphs = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    ",",
    ";",
    ":",
    "!",
    "?",
    "@",
    "#",
    "%",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
    "=",
    "/",
  ];

  return (
    <div className="glyphs-tab">
      <div className="glyphs-grid">
        {glyphs.map((glyph, index) => (
          <div key={`${fontId}-glyph-${index}`} className="glyph-item">
            <div className="glyph" style={{ fontFamily: fontId }}>
              {glyph}
            </div>
            <span className="glyph-code">
              U+
              {glyph.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlyphsTab;
