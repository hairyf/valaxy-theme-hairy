<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
const post = useFrontmatter()
</script>

<template>
  <HairyLayout :header="{ title: post.title }">
    <router-view />
  </HairyLayout>
</template>

