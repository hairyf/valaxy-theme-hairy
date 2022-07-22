interface HairyTheme {
  nav?: NavItem[];
  user?: {
      name?: string;
      description?: string;
  };
}
interface NavItem {
  text: string;
  icon?: string;
  link?: string;
  items?: NavItem[];
}

export { HairyTheme, NavItem };
