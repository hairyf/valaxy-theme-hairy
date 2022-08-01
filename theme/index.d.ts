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
  /**
   * meting options
   * @see https://github.com/metowolf/MetingJS#option
   */
  meting?: {
    id?: string
    server?: string
    type?: string
    auto?: string
    fixed?: boolean
    mini?: boolean
    autoplay?: boolean
    theme?: string
    loop?: string
    order?: string
    preload?: string
    volume?: number
    work?: string
    mutex?: boolean
    start?: string
    'lrc-type'?: number
    'list-folded'?: boolean
    'list-max-height'?: string
    'storage-name'?: string
    [key: string]: any
  }
}
export interface NavItem {
  text: string;
  icon?: string;
  link?: string;
  items?: NavItem[];
}


export type UserModule = (ctx: ViteSSGContext) => void
