<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useHairyTags } from '../composables'

const router = useRouter()

const { getTagStyle, tags } = useHairyTags({
  primary: '#1bc9a6',
})

function displayTag(tag: string) {
  router.push(`/tags/${tag}`)
}
</script>

<template>
  <div class="min-h-59vh flex-center flex-col">
    <div text="center" class="text-size-2.5em pt-10 mb-5">
      目前共计 {{ Array.from(tags).length }} 个标签
    </div>
    <div text="center" class="max-w-7xl flex flex-wrap justify-center items-center gap-2">
      <a
        v-for="[key, tag] in Array.from(tags).sort()"
        :key="key" class="post-tag cursor-pointer transition-all duration-200"
        :style="getTagStyle(tag.count)"
        p="1"
        @click="displayTag(key.toString())"
      >
        {{ key }}
      </a>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: tags
</route>

<style lang="scss" scoped>
  a {
    color: var(--yun-tag-color);
    &:hover {
      --un-text-opacity: 1;
      color: var(--hy-c-primary-dark);
    }
  }
</style>
