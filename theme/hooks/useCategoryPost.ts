import type { MaybeRef } from '@vueuse/shared'
import { usePostList } from 'valaxy'
import { isEqual } from 'lodash-es'
import { computed, unref } from 'vue'

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
