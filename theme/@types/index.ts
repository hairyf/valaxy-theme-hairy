export interface HairyTheme {
  nav?: NavItem[]
}

export interface NavItem {
  text: string
  icon?: string
  link?: string
  items?: NavItem[]
}
