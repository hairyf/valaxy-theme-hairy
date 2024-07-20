import './loading.scss'
import { ref } from 'vue'
import type { ViteSSGContext } from 'vite-ssg'
import Seto from '../styles/fonts/Seto.ttf?url'
import { createDeferred } from '../utils'

let el: HTMLElement

export const deferred = createDeferred<void>()

export function install({ router }: ViteSSGContext) {
  showFullLoading()
  loadFonts('Seto', Seto)
  router.afterEach(() => deferred.then(hideFullLoading))
}

export const isLoading = ref(false)

function showFullLoading() {
  if (typeof window === 'undefined')
    return
  if (!el)
    el = createElement()
  el.style.opacity = '0'
  document.body.appendChild(el)
  document.body.style.overflow = 'hidden'

  setTimeout(() => el.style.opacity = '1')
  isLoading.value = true
}

function hideFullLoading() {
  if (typeof window === 'undefined')
    return
  if (!el)
    return
  el.style.opacity = '0'
  document.body.style.overflow = ''
  setTimeout(() => {
    isLoading.value = true
    el.remove()
  }, 500)
}

function loadFonts(fontFamily: string, url: string) {
  if (typeof window === 'undefined')
    return
  const font = new FontFace(fontFamily, `url(${url})`)
  font.load().then(() => {
    ;(document.fonts as any).add(font)
    deferred.resolve()
  })
}

function createElement() {
  const loadingEl = document.createElement('div')
  loadingEl.className = 'hy-loading'
  loadingEl.innerHTML = `\
<div class="wrapper">
  <div id="preloader"></div>
</div>
`
  return loadingEl
}
