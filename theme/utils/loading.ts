import './loading.scss'

function createElement() {
  const loadingEl = document.createElement('div')
  loadingEl.className = 'vp-loading'
  loadingEl.innerHTML = `\
<div class="wrapper">
  <div id="preloader"></div>
</div>
`
  return loadingEl
}

let el: HTMLElement

export function showFullLoading() {
  if (!el)
    el = createElement()
  el.style.opacity = '0'
  document.body.appendChild(el)
  setTimeout(() => el.style.opacity = '1')
}

export function hideFullLoading() {
  if (!el)
    return
  el.style.opacity = '0'
  setTimeout(() => el.remove(), 500)
}

