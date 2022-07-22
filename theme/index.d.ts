import type { ViteSSGContext } from 'vite-ssg'

export interface HairyTheme {
  nav?: NavItem[];
  user?: {
      name?: string;
      description?: string;
  };
}
export interface NavItem {
  text: string;
  icon?: string;
  link?: string;
  items?: NavItem[];
}


export type UserModule = (ctx: ViteSSGContext) => void
