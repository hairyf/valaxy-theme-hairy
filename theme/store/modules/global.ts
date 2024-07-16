import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore('global', () => {
  const headerRef = ref<HTMLDivElement>()
  const showDrawer = ref(false)

  return {
    headerRef,
    showDrawer,
  }
})
