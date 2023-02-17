import { ref } from 'vue'
import { createSharedComposable } from '@vueuse/core'

const _useContext = () => {
  const headerRef = ref<HTMLDivElement>()
  const drawerShow = ref(false)
  return {
    headerRef,
    drawerShow,
  }
}

export const useContext = createSharedComposable(_useContext)
