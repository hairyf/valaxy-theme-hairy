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
  if (!month)
    return `/archives/${year}/${month}`

  return ''
}
