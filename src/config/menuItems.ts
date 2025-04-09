interface MenuItem {
  name: string;
  icon: string;
  hasAction?: string;
}

const menuItems: MenuItem[] = [
  { name: "type", icon: "Type" },
  { name: "systemFont", icon: "system-font" },
  { name: "google", icon: "google" },
  { name: "folder", icon: "folder", hasAction: "addFolder" },
  { name: "collection", icon: "collection", hasAction: "addCollection" },
  { name: "favorites", icon: "heart" },
  { name: "settings", icon: "settings" },
  { name: "share", icon: "share" },
];

export default menuItems;
export type { MenuItem };
