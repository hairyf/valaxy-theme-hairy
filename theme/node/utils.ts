import { createDefu } from 'defu'
import { isFunction } from 'lodash-es'
import { mergeConfig as mergeViteConfig } from 'vite'
/**
 * merge valaxy.config
 * (source, default)
 */
export const mergeValaxyConfig = createDefu((obj: any, key, value) => {
  if (isFunction(obj[key]) || isFunction(value)) {
    obj[key] = function (...args: any[]) {
      obj[key]?.call(this, ...args)
      value?.call(this, ...args)
    }
  }
  if (key === 'vite') {
    // a deep copy and needs to be taken over
    obj[key] = mergeViteConfig(obj[key], value)
    return true
  }
})
