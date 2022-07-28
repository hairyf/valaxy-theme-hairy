import type { ViteSSGContext } from 'vite-ssg'

export interface HairyTheme {
  nav?: NavItem[];
  home?: {
    images?: string[]
  }
  user?: {
    name?: string;
    description?: string;
  };
  post?: {
    layout?: 'text' | 'markdown' | 'image' | 'image:slice' | 'image:slice:reverse'
    images?: string[]
  }
  categories?: {
    layout?: 'timeline' | 'post'
  }
}
export interface NavItem {
  text: string;
  icon?: string;
  link?: string;
  items?: NavItem[];
}


export type UserModule = (ctx: ViteSSGContext) => void
