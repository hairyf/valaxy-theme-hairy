<script lang="tsx" setup>
import { useCategory, usePostList, useTag } from 'valaxy'
import { defineComponent } from 'vue'
const category = useCategory()
const posts = usePostList()
const tags = useTag()
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
  <div class="flex justify-center mt-2">
    <State :count="posts.length" @click="$router.push('/archives/')">
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
  <HairySocialLinks class="mt-5" />
  <HairyMenu class="HairyUserMenu mt-5 flex-col h-auto" />
</template>

<style lang="scss">
  .HairyUserMenu {
    .HairyMenuItem {
      padding: 2px;
      width: 100%;
      border: 1px solid transparent;
      > div {
        justify-content: center;
      }
    }

    .HairyMenuItem:hover,
    .HairyMenuItem.active {
      border-top: 1px solid var(--hy-c-primary);
      border-bottom: 1px solid var(--hy-c-primary);
    }
    .HairyMenuItem.active + .HairyMenuItem {
      border-top-color: transparent;
    }
    .HairyMenuItem:hover + .HairyMenuItem {
      border-top-color: transparent;
    }
  }
</style>
