import { defineStore } from 'pinia'
import type { MenuItem } from 'valaxy'
import { getHeaders, onContentUpdated, useFrontmatter, useThemeConfig } from 'valaxy'
import type { DefaultTheme } from 'valaxy/types'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const useOutlineStore = defineStore('OutlineStore', {
  state: () => ({} as Record<string, MenuItem[]>),
})

/**
 * export headers & handleClick to generate outline
 */
export function useOutline() {
  const frontmatter = useFrontmatter()
  const themeConfig = useThemeConfig()
  const route = useRoute()
  const store = useOutlineStore()

  const pageOutline = computed<DefaultTheme.Config['outline']>(
    () => frontmatter.value.outline ?? themeConfig.value.outline,
  )

  const headers = computed(() => store.$state[route.path] || [])

  onContentUpdated(() => {
    if (pageOutline.value === false)
      return
    store.$state[route.path] = getHeaders(pageOutline.value)
  })

  const handleClick = ({ target: el }: Event) => {
    const id = (el as HTMLAnchorElement).href!.split('#')[1]
    const heading = document.getElementById(decodeURIComponent(id)) as HTMLAnchorElement
    heading?.focus({ preventScroll: true })
  }

  return {
    /**
     * headers for toc
     */
    headers,
    /**
     * click hash heading
     */
    handleClick,
  }
}
