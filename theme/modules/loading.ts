import './loading.scss'
import { ref } from 'vue'
import type { UserModule } from '..'

export const install: UserModule = ({ router }) => {
  showFullLoading()
  router.afterEach(hideFullLoading)
}

export const isLoading = ref(false)

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

let el: HTMLElement

function showFullLoading() {
  if (!el)
    el = createElement()
  el.style.opacity = '0'
  document.body.appendChild(el)
  setTimeout(() => el.style.opacity = '1')
  isLoading.value = true
}

function hideFullLoading() {
  if (!el)
    return
  el.style.opacity = '0'
  setTimeout(() => {
    isLoading.value = true
    el.remove()
  }, 500)
}