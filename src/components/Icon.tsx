import React from "react";

interface IconProps {
  name: string;
  className?: string;
  ariaLabel?: string;
}

const Icon: React.FC<IconProps> = ({ name, className, ariaLabel }) => {
  return (
    <svg className={className} aria-label={ariaLabel} role="img">
      <use xlinkHref={`/assets/icons/sprite.svg#${name}`} />
    </svg>
  );
};

export default Icon;
