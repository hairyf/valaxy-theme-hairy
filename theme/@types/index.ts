export interface HairyTheme {
  nav?: NavItem[]
  user?: {
    name?: string
    description?: string
  }
}

export interface NavItem {
  text: string
  icon?: string
  link?: string
  items?: NavItem[]
}
