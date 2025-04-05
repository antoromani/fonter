import React from "react";
import Icon from "./Icon";
import { useTranslation } from "react-i18next";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <aside className="w-64 bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="p-4">
        <img
          src="/assets/images/logo-fonter.svg"
          alt="Fonter Logo"
          className="w-32 mx-auto"
        />
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li className="flex items-center hover:text-[var(--color-primary)]">
            <Icon name="Type" className="w-6 h-6 mr-2" ariaLabel="Type" />
            <span>Type</span>
          </li>
          <li className="flex items-center hover:text-[var(--color-primary)]">
            <Icon
              name="system-font"
              className="w-6 h-6 mr-2"
              ariaLabel="System Font"
            />
            <span>System Font</span>
          </li>
          <li className="flex items-center hover:text-[var(--color-primary)]">
            <Icon name="google" className="w-6 h-6 mr-2" ariaLabel="Google" />
            <span>Google</span>
          </li>
          <li className="flex items-center justify-between hover:text-[var(--color-primary)]">
            <div className="flex items-center">
              <Icon
                name="folder"
                className="w-6 h-6 mr-2"
                ariaLabel={t("folder")}
              />
              <span>{t("folder")}</span>
            </div>
            <Icon name="plus" className="w-4 h-4" ariaLabel="Add Folder" />
          </li>
          <li className="flex items-center justify-between hover:text-[var(--color-primary)]">
            <div className="flex items-center">
              <Icon
                name="collection"
                className="w-6 h-6 mr-2"
                ariaLabel={t("collection")}
              />
              <span>{t("collection")}</span>
            </div>
            <Icon name="plus" className="w-4 h-4" ariaLabel="Add Collection" />
          </li>
          <li className="flex items-center hover:text-[var(--color-primary)]">
            <Icon name="heart" className="w-6 h-6 mr-2" ariaLabel="Favorites" />
            <span>Favorites</span>
          </li>
          <li className="flex items-center hover:text-[var(--color-primary)]">
            <Icon
              name="settings"
              className="w-6 h-6 mr-2"
              ariaLabel={t("settings")}
            />
            <span>{t("settings")}</span>
          </li>
          <li className="flex items-center hover:text-[var(--color-primary)]">
            <Icon
              name="share"
              className="w-6 h-6 mr-2"
              ariaLabel={t("share")}
            />
            <span>{t("share")}</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
