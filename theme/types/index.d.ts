export namespace HairyTheme {
  export type Config = ThemeConfig
}

export type HairyPostLayout = 'text'
 | 'markdown' 
 | 'image' 
 | 'image:slice' 
 | 'image:slice:reverse'

/**
 * Theme Config
 */
export interface ThemeConfig {
  nav?: NavItem[];
  mode?: 'dark'
  home?: {
    headline?: string
    title?: string
    description?: string
    images?: string[]
  }
  post?: {
    layout?: HairyPostLayout
    images?: string[]
  }
  categories?: {
    layout?: 'timeline' | 'post'
  }
  colors: {
    /**
     * primary color
     * @default '#0078E7'
     */
    primary: string
  }

  /**
   * footer
   */
  footer: Partial<{
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
  }>

  /**
   * navbar
   */
  nav: NavItem[]
}

export interface NavItem {
  text: string;
  icon?: string;
  link?: string;
  items?: NavItem[];
}


export type ThemeUserConfig = Partial<ThemeConfig>
