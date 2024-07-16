import { defineAppSetup } from 'valaxy'

// import { install as installScroll } from '../modules/scroll'
import { install as installLoading } from '../library/loading'

export default defineAppSetup((ctx) => {
  // installScroll(ctx)
  installLoading(ctx)
})
