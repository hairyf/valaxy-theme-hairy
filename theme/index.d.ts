import type { ViteSSGContext } from 'vite-ssg'

export type HairyPostLayout = 'text' | 'markdown' | 'image' | 'image:slice' | 'image:slice:reverse'

export interface HairyTheme {
  nav?: NavItem[];
  mode?: 'dark'
  home?: {
    headline?: string
    title?: string
    description?: string
    images?: string[]
  }
  user?: {
    name?: string;
    description?: string;
  };
  post?: {
    layout?: HairyPostLayout
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
}
export interface NavItem {
  text: string;
  icon?: string;
  link?: string;
  items?: NavItem[];
}


export type UserModule = (ctx: ViteSSGContext) => void
