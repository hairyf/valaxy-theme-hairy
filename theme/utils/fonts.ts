import Seto from '../styles/fonts/Seto.ttf?url'
import { createPromise } from '.'

export const fontFacePromise = createPromise<void>()

async function loadFonts(fontFamily: string, url: string) {
  const font = new FontFace(fontFamily, `url(${url})`)
  await font.load()
  ;(document.fonts as any).add(font)
}

(async () => {
  await loadFonts('Seto', Seto)
  fontFacePromise.resolve()
})()
