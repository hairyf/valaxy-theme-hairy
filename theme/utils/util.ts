export function ejectWindow(url: string) {
  const link = document.createElement('a')
  link.href = url
  link.target = '_blank'
  link.click()
  link.remove()
}

export function toArr<T>(arr: T[] | T): T[] {
  if (Array.isArray(arr))
    return arr as any
  else return [arr].filter(Boolean) as any
}
