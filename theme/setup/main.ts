import { defineAppSetup } from 'valaxy'

// import { install as installScroll } from '../modules/scroll'
import { install as installLoading } from '../modules/loading'
import { install as installContext } from '../modules/context'

export default defineAppSetup((ctx) => {
  // installScroll(ctx)
  installLoading(ctx)
  installContext(ctx)
})
