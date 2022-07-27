import type { ParentCategory, PostCategory } from 'valaxy'
import { useCategory } from 'valaxy'
import type { MaybeRef } from '@vueuse/core'
import { computed, unref } from 'vue'

export function useCurrentCategory(categories: MaybeRef<string[]>) {
  const all = useCategory()
  return computed(() => {
    let parent: ParentCategory & Partial<PostCategory> = all
    for (const category of unref(categories)) {
      for (const [key, value] of parent.children) {
        if (key === category)
          parent = (value as ParentCategory)
      }
    }
    return parent
  })
}
