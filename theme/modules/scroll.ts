import type { UserModule } from '..'
export const install: UserModule = ({ router }) => {
  router.afterEach((to) => {
    if (to.path !== '/') {
      const timer = setTimeout(() => {
        const clientHeight = document.querySelector('.HairyHeader')?.clientHeight || 0
        const top = clientHeight / 2
        window.scrollTo({ top, behavior: 'smooth' })
        window.removeEventListener('scroll', clear)
      }, window.scrollY < 50 ? 200 : 800)

      function clear() {
        clearTimeout(timer)
        window.removeEventListener('scroll', clear)
      }

      if (window.scrollY === 0)
        window.addEventListener('scroll', clear)
    }
  })
}
