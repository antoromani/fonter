interface MenuItem {
  name: string;
  icon: string;
  hasAction?: string;
}

const menuItems: MenuItem[] = [
  { name: "fonts", icon: "fontfile" },
  { name: "systemFont", icon: "system-font" },
  { name: "google", icon: "google" },
  { name: "folder", icon: "folder", hasAction: "addFolder" },
  { name: "collection", icon: "collection", hasAction: "addCollection" },
  { name: "favorites", icon: "favorite" },
  { name: "settings", icon: "settings" },
  { name: "share", icon: "share" },
];

export default menuItems;
export type { MenuItem };
