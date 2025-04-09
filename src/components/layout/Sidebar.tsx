import React, { useCallback, memo } from "react";
import Icon from "../common/Icon";
import menuItems, { MenuItem } from "../../config/menuItems";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  onViewChange: (view: "fontList" | "settings") => void;
  activeView: "fontList" | "settings";
}

const Sidebar: React.FC<SidebarProps> = ({ onViewChange, activeView }) => {
  const { t } = useTranslation();

  // Usando useCallback para memorizar la función y evitar re-renderizados innecesarios
  const handleMenuItemClick = useCallback(
    (item: MenuItem) => {
      if (item.name === "settings") {
        onViewChange("settings");
      } else if (item.name === "myFonts" || item.name === "explore") {
        onViewChange("fontList");
      }
    },
    [onViewChange]
  );

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-circle">
          <img
            src="/assets/images/logo-fonter.svg"
            alt="Fonter Logo"
            className="logo-image"
            width="48"
            height="48"
            loading="eager"
          />
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul className="menu-list">
          {menuItems.map((item: MenuItem) => (
            <li
              key={item.name}
              className={`menu-item ${
                activeView === "settings" && item.name === "settings"
                  ? "active"
                  : activeView === "fontList" &&
                    (item.name === "myFonts" || item.name === "explore")
                  ? "active"
                  : ""
              }`}
              onClick={() => handleMenuItemClick(item)}
            >
              <Icon
                name={item.icon}
                className="menu-icon"
                ariaLabel={t(item.name)}
                ariaHidden={false}
              />
              <span>{t(item.name)}</span>
              {item.hasAction && (
                <Icon
                  name="plus"
                  className="action-icon"
                  ariaLabel={t(item.hasAction)}
                  ariaHidden={false}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

// Usando memo para evitar re-renderizados innecesarios
export default memo(Sidebar);
