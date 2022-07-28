<script lang="ts" setup>
import { useTags } from 'valaxy'
import { useRouter } from 'vue-router'
const router = useRouter()

const { tags, getTagStyle } = useTags({
  primary: 'red',
})

const displayTag = (tag: string) => {
  router.push(`/tags/${tag}`)
}
</script>

<template>
  <div class="inset-0 h-full flex-center flex-col">
    <div text="center" class="text-size-2.5em pt-10 mb-5">
      目前共计 {{ Array.from(tags).length }} 个标签
    </div>
    <div text="center">
      <a v-for="[key, tag] in Array.from(tags).sort()" :key="key" class="post-tag cursor-pointer" :style="getTagStyle(tag.count)" p="1" @click="displayTag(key.toString())">
        {{ key }}
      </a>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: tags
</route>
