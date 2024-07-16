import { computed, onMounted, ref } from 'vue'
import type { UseFuseOptions } from '@vueuse/integrations/useFuse'
import { useFuse } from '@vueuse/integrations/useFuse'
import type { FuseListItem } from 'valaxy/types'
import { useSiteConfig } from 'valaxy'
import type { MaybeRefOrGetter } from '@vueuse/shared'

export function useFuseParsed(input: MaybeRefOrGetter<string>) {
  const siteConfig = useSiteConfig()
  const data = ref<FuseListItem[]>([])

  const keys = computed(() => {
    const defKs = ['title', 'tags', 'categories', 'excerpt']
    const ks = siteConfig.value.fuse.options.keys || []
    return ks.length === 0 ? defKs : ks
  })

  const fuseOptions = computed<UseFuseOptions<FuseListItem>>(() => ({
    fuseOptions: {
      ...siteConfig.value.fuse.options,
      keys: keys.value,
    // threshold: 0.99,
    // ignoreLocation: true,
    },
    includeMatches: true,
    findAllMatches: true,
  // resultLimit: resultLimit.value,
  // matchAllWhenSearchEmpty: matchAllWhenSearchEmpty.value,
  }))

  onMounted(async () => {
    const path = !siteConfig.value.fuse.dataPath.startsWith('http')
      ? `${import.meta.env.BASE_URL}${siteConfig.value.fuse.dataPath}`
      : siteConfig.value.fuse.dataPath
    data.value = await fetch(path).then(r => r.json() || [])
  })

  const { fuse, results: _results } = useFuse(input, data, fuseOptions)
  const results = computed(() => _results.value.map((v) => {
    return {
      ...v,
      item: {
        ...v.item,
        excerpt: removeTags(v.item.excerpt || ''),
      },
    }
  }))
  return { results, fuse, data }
}

function removeTags(content = '') {
  content = content.replace(/<\/?[^>]*>/g, '')
  content = content.replace(/[|]/g, '')
  content = content.replace(/```.*?\n/sg, '')
  content = content.replace(/:::.*?\n/sg, '')
  content = content.replace(/\[\[toc\]\]/g, '')
  content = content.replace(/\{lang=".*?\}/sg, '')
  content = content.replace(/#.*? /sg, '')
  return content
}
