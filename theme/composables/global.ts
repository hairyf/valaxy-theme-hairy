import { ref } from 'vue'
import { createSharedComposable, useElementSize } from '@vueuse/core'

export function _useGlobalState() {
  const headerRef = ref<HTMLDivElement>()
  const headerSize = useElementSize(headerRef)
  const drawerShow = ref(false)
  return {
    headerRef,
    drawerShow,
    headerSize,
  }
}
export const useGlobalState = createSharedComposable(_useGlobalState)
