<script lang="tsx" setup>
import { useCategory, useConfig, usePostList, useTag, useThemeConfig } from 'valaxy'
import { computed, defineComponent } from 'vue'
import type { HairyTheme } from 'valaxy-theme-starter'

const config = useConfig()
const theme = useThemeConfig<HairyTheme>()
const category = useCategory()
const posts = usePostList()
const tags = useTag()
const name = computed(() => theme.value.user?.name || config.value.author.name)
const description = computed(() => theme.value.user?.description || config.value.description)
const State = defineComponent({
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  setup: (props, { slots }) => {
    return () => <div class="flex-center flex-col cursor-pointer hover:text-primary px-3 py-1">
        <div class="font-bold leading-none">
          {props.count}
        </div>
        <div class="leading-none mt-1">
          {slots.default?.()}
        </div>
      </div>
  },
})
</script>

<template>
  <div class="sticky top-3.125rem pt-5">
    <div class="flex flex-col items-center">
      <img class="mx-auto w-40 rounded-full " :src="config.author.avatar" />
      <div class="leading-loose mt-2">
        {{ name }}
      </div>
      <div class="text-coolgray">
        {{ description }}
      </div>
    </div>
    <div class="flex justify-center mt-2">
      <!-- TODO: template count -->
      <State :count="posts.length" @click="$router.push('/posts/')">
        文章
      </State>
      <div class="w-1px bg-gray bg-opacity-50" />
      <State :count="category.total" @click="$router.push('/categories/')">
        分类
      </State>
      <div class="w-1px bg-gray bg-opacity-50" />
      <State :count="tags.size" @click="$router.push('/tags/')">
        标签
      </State>
    </div>
  </div>
</template>

<style lang="scss">

</style>
