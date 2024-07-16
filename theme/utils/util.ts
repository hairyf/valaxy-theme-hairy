export function ejectWindow(url: string) {
  const link = document.createElement('a')
  link.href = url
  link.target = '_blank'
  link.click()
  link.remove()
}

export function riposte<T>(...args: [cond: boolean, value: T][]) {
  for (const [cond, value] of args) {
    if (cond)
      return value
  }
}

export function toArray<T>(value: T | T[]): T[] {
  if (Array.isArray(value))
    return value as any
  else return [value].filter(Boolean) as any
}

export function removeTags(content = '') {
  return content
    .replace(/<\/?[^>]*>/g, '')
    .replace(/[|]*\n/, '')
}

export function getArchiveLink(year?: string, month?: string) {
  if (!year)
    return '/archives/'
  if (!month)
    return `/archives/${year}`
  if (month)
    return `/archives/${year}/${month}`

  return ''
}

export type Deferred<T = void> = Promise<T> & {
  resolve: (value: T) => void
  reject: (value?: any) => void
}

export function createDeferred<T = void>(): Deferred<T> {
  let resolve: any, reject: any

  const promise = new Promise<any>((_resolve, _reject) => {
    resolve = _resolve
    reject = _reject
  }) as unknown as any

  promise.resolve = (v: any) => {
    resolve(v)
    return promise
  }
  promise.reject = reject

  return promise
}
