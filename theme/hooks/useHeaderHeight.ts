import { useElementSize } from '@vueuse/core'
import { computed } from 'vue'
import { useContext } from './useContext'

export function useHeaderHeight() {
  const { headerRef } = useContext()
  const size = useElementSize(headerRef)
  return computed(() => size.height.value)
}
