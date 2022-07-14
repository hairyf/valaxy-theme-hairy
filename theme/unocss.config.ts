import { defineConfig } from 'unocss'
const safelist = [
  'i-ri:home-2-fill',
]
export default defineConfig({
  theme: {
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '75vw',
    },
  },

  rules: [
    ['font-seto', { 'font-family': 'var(--hy-font-family-seto)' }],
    ['font-modesty', { 'font-family': 'var(--hy-font-family-modesty)' }],
    ['font-christmas', { 'font-family': 'var(--hy-font-family-christmas)' }],
    ['font-frederick', { 'font-family': 'var(--hy-font-family-frederick)' }],
  ],
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
    ['inline-flex-center', 'inline-flex justify-center items-center'],
  ],
  safelist,
})
