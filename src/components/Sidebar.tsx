import React from "react";
import Icon from "./Icon";
import menuItems, { MenuItem } from "./menuItems.ts";
import { useTranslation } from "react-i18next";
import "../styles/components.css";
import "../styles/layout.css";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-circle">
          <img
            src="/assets/images/logo-fonter.svg"
            alt="Fonter Logo"
            className="logo-image"
          />
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul className="menu-list">
          {menuItems.map((item: MenuItem) => (
            <li key={item.name} className="menu-item">
              <Icon
                name={item.icon}
                className="menu-icon"
                ariaLabel={t(item.name)}
              />
              <span>{t(item.name)}</span>
              {item.hasAction && (
                <Icon
                  name="plus"
                  className="action-icon"
                  ariaLabel={t(item.hasAction)}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
