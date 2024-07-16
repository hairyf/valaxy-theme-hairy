import type { CategoryList, PostFrontMatter } from 'valaxy'
import { useCategories, usePostList } from 'valaxy'
import type { MaybeRef } from '@vueuse/core'
import { computed, unref } from 'vue'

import { isEqual } from 'lodash-es'

export function useCategory(categories: MaybeRef<string[]>) {
  const all = useCategories()

  unref(categories)
  // [BBB]
  return computed(() => {
    let parent: PostFrontMatter & Partial<CategoryList> = all.value as any
    for (const category of unref(categories)) {
      const children = (parent.children || new Map([]))
      for (const [key, value] of children) {
        if (key === category && !key.startsWith('/posts')) {
          parent = (value as PostFrontMatter)
          continue
        }
      }
    }
    return parent
  })
}

export function useCategoryPost(categories: MaybeRef<string[]>) {
  const postList = usePostList()
  return computed(() => {
    if (!unref(categories).length)
      return postList.value
    return postList.value.filter((item) => {
      let target = Array.isArray(item.categories)
        ? item.categories
        : [item.categories || '']
      target = target.filter(Boolean)
      if (unref(categories)[0] === 'Uncategorized')
        return !target.length
      return isEqual(target.sort(), unref(categories).sort())
    }) as any
  })
}
