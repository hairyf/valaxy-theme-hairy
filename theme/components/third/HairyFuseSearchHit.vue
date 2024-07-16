<script lang="ts" setup>
import { defineEmits, ref } from 'vue'
import { useElementHover, whenever } from '@vueuse/core'

withDefaults(
  defineProps<{
    selected: boolean
    title: string
    excerpt: string
    path: string
    history?: boolean
  }>(),
  {
    selected: false,
  },
)

const emit = defineEmits(['hover'])

const itemRef = ref()

whenever(useElementHover(itemRef), () => emit('hover'))
</script>

<template>
  <li id="docsearch-item-0" ref="itemRef" class="DocSearch-Hit" role="option" :aria-selected="selected">
    <a :href="path" onclick="return false">
      <div class="DocSearch-Hit-Container">
        <div class="DocSearch-Hit-icon">
          <svg v-if="history" width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" /><path d="M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" /></g></svg>
          <svg v-else width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round" /></svg>
        </div>
        <div class="DocSearch-Hit-content-wrapper">
          <span class="DocSearch-Hit-title">{{ title }}</span>
          <span class="DocSearch-Hit-path">{{ excerpt }}</span>
        </div>
        <div v-if="history" class="DocSearch-Hit-action">
          <button class="DocSearch-Hit-action-button" title="Save this search" type="submit">
            <svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round" /></svg>
          </button>
        </div>
        <div v-if="history" class="DocSearch-Hit-action">
          <button class="DocSearch-Hit-action-button" title="Remove this search from history" type="submit"><svg width="20" height="20" viewBox="0 0 20 20"><path d="M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" /></svg>
          </button>
        </div>
        <div class="DocSearch-Hit-action">
          <svg class="DocSearch-Hit-Select-Icon" width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2" /><path d="M8 17l-6-6 6-6" /></g></svg>
        </div>
      </div>
    </a>
  </li>
</template>
