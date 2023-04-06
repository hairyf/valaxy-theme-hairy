import { isNumber, isString } from 'lodash-es'

export type AtWillNumber = string | number

export function atWillToUnit(value: AtWillNumber, unit = 'px') {
  if (!(isString(value) || isNumber(value)))
    return ''
  return (isString(value) && /\D/g.test(value)) ? value : value + unit
}
