<script lang="ts" setup>
import { ref, toRef, useModel, watch } from 'vue'
import { useRouter } from 'vue-router'
import { onKeyDown } from '@vueuse/core'
import { useFuseParsed } from '../../composables'

const props = defineProps<{
  text: string
  visible: boolean
}>()
const visible = useModel(props, 'visible')

const router = useRouter()

const input = toRef(props, 'text')

const { results } = useFuseParsed(input)

function navigation(link: string) {
  router.push(link)
  visible.value = false
}
const selected = ref(0)

onKeyDown('ArrowDown', () => {
  if (!results.value.length || selected.value === results.value.length - 1)
    return
  selected.value++
})
onKeyDown('ArrowUp', () => {
  if (!results.value.length || selected.value === 0)
    return
  selected.value--
})
onKeyDown('Enter', () => {
  if (!results.value.length)
    return
  navigation(results.value[selected.value].item.link)
  visible.value = false
})
watch(results, () => selected.value = 0)
</script>

<template>
  <div class="DocSearch-Dropdown">
    <div class="DocSearch-Dropdown-Container">
      <section v-if="results.length" class="DocSearch-Hits">
        <div class="DocSearch-Hit-source">
          Recent
        </div>
        <ul id="docsearch-list" role="listbox" aria-labelledby="docsearch-label">
          <HairyFuseSearchHit
            v-for="({ item }, index) of results" :key="index"
            :title="item.title"
            :selected="selected === index"
            :excerpt="item.excerpt"
            :path="item.link"
            @click="navigation(item.link)"
            @hover="selected = index"
          />
        </ul>
      </section>
      <div v-else-if="!text" class="DocSearch-StartScreen">
        <p class="DocSearch-Help">
          No recent searches
        </p>
      </div>
      <div v-else class="DocSearch-NoResults">
        <div class="DocSearch-Screen-Icon">
          <svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" /></svg>
        </div><p class="DocSearch-Title">
          No results for "<strong>{{ text }}</strong>"
        </p>
      </div>
    </div>
  </div>
</template>
