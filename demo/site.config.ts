import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  lang: 'zh-CN',
  title: 'Valaxy Theme Hairy',
  url: 'https://www.hairy.blog/',
  author: {
    avatar: 'https://pic.imgdb.cn/item/62fe02d616f2c2beb14bc2f3.jpg',
    name: 'Valaxy Theme Hairy Preview',
  },
  search: {
    enable: true,
    type: 'fuse',
  },
  description: 'Valaxy Theme Hairy Preview.',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-material-symbols-rss-feed-rounded',
      color: 'orange',
    },
    {
      name: '951416545',
      link: '--',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/TuiMao233',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=293486586',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '知乎',
      link: 'https://www.zhihu.com/people/mao-mao-47-99-46',
      icon: 'i-ri-zhihu-line',
      color: '#0084FF',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1490903',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:wwu710632@gmail.com',
      icon: 'i-material-symbols-attach-email',
      color: '#8E71C1',
    },
    {
      name: 'Hairy',
      link: 'https://travellings.link',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],
  statistics: {
    enable: true,
  },
  comment: { enable: false },
})
