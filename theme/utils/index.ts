import { isNumber, isString } from 'lodash-es'

/**
 * 跳转到新的页面
 * @param url 跳转url
 */
export const ejectWindow = (url: string) => {
  const link = document.createElement('a')
  link.href = url
  link.target = '_blank'
  link.click()
  link.remove()
}

export const getArchiveLink = (year?: string, month?: string) => {
  if (!year)
    return '/archives/'
  if (!month)
    return `/archives/${year}`
  if (month)
    return `/archives/${year}/${month}`

  return ''
}

export const toArr = <T>(arr: T[] | T): T[] => {
  if (Array.isArray(arr))
    return arr as any
  else return [arr].filter(Boolean) as any
}

export type AtWillNumber = string | number

export const atWillToUnit = (value: AtWillNumber, unit = 'px') => {
  if (!(isString(value) || isNumber(value)))
    return ''
  return isString(value) && /\D/g.test(value) ? value : value + unit
}

export interface PromiseResolver<T = void> extends Promise<T> {
  resolve: (value: T) => void
  reject: Function
}
export function createPromise<T>(): PromiseResolver<T> {
  let resolve
  let reject
  // eslint-disable-next-line promise/param-names
  const promise: any = new Promise((_r, _j) => {
    resolve = _r
    reject = _j
  })
  promise.resolve = resolve
  promise.reject = reject
  return promise as PromiseResolver<T>
}
