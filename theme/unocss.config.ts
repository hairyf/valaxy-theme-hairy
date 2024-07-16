import { defineConfig } from 'unocss'

const safelist = [
  'i-ri-home-2-fill',
  'i-ri-list-check-2',
  'i-ri-flow-chart',
  'i-ri-user-line',

  'i-fluent-text-align-distributed-24-filled',
  'i-fluent-text-align-left-16-filled',
  'i-fluent-text-align-justify-20-filled',
  'i-fluent-markdown-20-filled',
  'i-fluent-code-text-16-filled',
]

export default defineConfig({
  theme: {
    breakpoints: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
    },
  },

  rules: [
    ['font-seto', { 'font-family': 'var(--hy-font-family-seto)' }],
    ['font-modesty', { 'font-family': 'var(--hy-font-family-modesty)' }],
    ['font-christmas', { 'font-family': 'var(--hy-font-family-christmas)' }],
    ['font-frederick', { 'font-family': 'var(--hy-font-family-frederick)' }],
    ['text-primary', { color: 'var(--hy-c-primary)' }],
    ['text-primary-dark', { color: 'var(--hy-c-primary-dark)' }],
    ['text-primary-light', { color: 'var(--hy-c-primary-light)' }],
    ['border-primary', { 'border-color': 'var(--hy-c-primary)' }],
    ['bg-primary', { background: 'var(--hy-c-primary)' }],
  ],
  shortcuts: [
    ['flex-center', 'flex justify-center items-center'],
    ['inline-flex-center', 'inline-flex justify-center items-center'],
  ],
  safelist,
})
