<script lang="ts" setup>
import { useRoute } from 'vue-router'
</script>

<template>
  <HairyToc
    :headers=" [
      {
        level: 2,
        title: 'What is Valaxy?',
        slug: 'what-is-valaxy',
        lang: 'en',
      },
      {
        level: 2,
        title: '什么是 Valaxy?',
        slug: '什么是-valaxy',
        lang: 'zh-CN',
      },
    ]"
  />
</template>
