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
