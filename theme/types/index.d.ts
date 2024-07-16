/* eslint-disable ts/no-use-before-define */
export namespace HairyTheme {
  export type Config = ThemeConfig
  export type Sidebar = any
  export type { Layout }
}

/**
 * Theme Config
 */
export interface ThemeConfig {
  /**
   * default theme mode
   *
   * @default 'light'
   */
  theme?: 'dark' | 'light'

  home?: Home

  user?: User

  post?: Post

  /**
   * colors
   */
  colors?: Colors

  /**
   * layout
   */
  layout?: Partial<Layout>

  /**
   * footer
   */
  footer?: Partial<Footer>

  /**
   * navbar
   */
  nav?: NavItem[]

  /**
   * meting
   */
  meting?: Partial<Meting>

  /**
   * Custom header levels of outline in the aside component.
   *
   * @default 2
   */
  outline?: number | [number, number] | 'deep' | false
}

export interface NavItem {
  text: string
  link: string
  icon?: string
}
/**
 * meting options
 * @see https://github.com/metowolf/MetingJS#option
 */
export interface Meting {
  id: string
  server: string
  type: string
  auto: string
  fixed: boolean
  mini: boolean
  autoplay: boolean
  theme: string
  loop: string
  order: string
  preload: string
  volume: number
  work: string
  mutex: boolean
  start: string
  'lrc-type': number
  'list-folded': boolean
  'list-max-height': string
  'storage-name': string
  [key: string]: any
}

export interface Layout {
  post:
    | 'text'
    | 'markdown'
    | 'image'
    | 'image:slice'
    | 'image:slice:reverse'
  categories: 'timeline' | 'post'
}

export interface Footer {
  /**
   * 建站于
   */
  since: number

  /**
   * Icon between year and copyright info.
   */
  icon: {
    /**
     * icon name, i-xxx
     */
    name: string
    animated: boolean
    color: string
    url: string
    title: string
  }

  /**
   * Powered by valaxy & valaxy-theme-${name}, default is yun
   */
  powered: boolean

  /**
   * Chinese Users | 中国用户
   * 备案 ICP
   * 国内用户需要在网站页脚展示备案 ICP 号
   * https://beian.miit.gov.cn/
   */
  beian: {
    enable: boolean
    /**
     * 苏ICP备xxxxxxxx号
     */
    icp: string
  }
}

export interface Colors {
/**
 * primary color
 * @default '#0078E7'
 */
  primary: string
}
export interface Home {
  headline: string
  title: string
  description: string
  images: string[]
}

export interface Post {
  images: string[]
}

export interface User {
  name?: string
  description?: string
}

export type ThemeUserConfig = Partial<ThemeConfig>
