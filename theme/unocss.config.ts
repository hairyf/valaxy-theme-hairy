import { defineConfig } from 'unocss'

export default defineConfig({
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
})
