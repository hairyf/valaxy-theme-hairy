import { ref } from 'vue'
import { createSharedComposable } from '@vueuse/core'

export function _useGlobalState() {
  const headerRef = ref<HTMLDivElement>()
  const drawerShow = ref(false)
  return {
    headerRef,
    drawerShow,
  }
}
export const useGlobalState = createSharedComposable(_useGlobalState)
