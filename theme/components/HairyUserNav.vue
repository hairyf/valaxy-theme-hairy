<script lang="ts" setup>
import { useCategory, usePostList, useTag } from 'valaxy'
const category = useCategory()
const posts = usePostList()
const tags = useTag()
</script>

<template>
  <div class="flex justify-center mt-2">
    <HairyUserStats :count="posts.length" @click="$router.push('/archives/')">
      文章
    </HairyUserStats>
    <div class="w-1px bg-gray bg-opacity-50" />
    <HairyUserStats :count="category.total" @click="$router.push('/categories/')">
      分类
    </HairyUserStats>
    <div class="w-1px bg-gray bg-opacity-50" />
    <HairyUserStats :count="tags.size" @click="$router.push('/tags/')">
      标签
    </HairyUserStats>
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
