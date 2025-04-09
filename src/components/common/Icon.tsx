import React, { memo } from "react";

interface IconProps {
  name: string;
  className?: string;
  ariaLabel?: string;
  ariaHidden?: boolean;
}

const Icon: React.FC<IconProps> = ({
  name,
  className = "icon",
  ariaLabel,
  ariaHidden,
}) => {
  return (
    <svg
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      role="img"
    >
      <use xlinkHref={`/assets/icons/sprite.svg#${name}`} />
    </svg>
  );
};

// Usar memo para evitar re-renderizados innecesarios
export default memo(Icon);
