import React, { useState, useRef } from "react";
import "../../styles/components.css";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  positionType?: "top" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({ 
  content, 
  children, 
  positionType = "top" 
}) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => setVisible(true);
  const handleMouseLeave = () => setVisible(false);

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={wrapperRef}
    >
      {children}
      {visible && (
        <div
          className={`tooltip tooltip-${positionType}`}
          ref={tooltipRef}
        >
          {content}
          <div className={`tooltip-arrow tooltip-arrow-${positionType}`} />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
