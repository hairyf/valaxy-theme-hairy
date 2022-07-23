<script lang="ts" setup>
import { usePostLayout } from '../hooks/usePostLayout'
const layout = usePostLayout()
</script>

<template>
  <HairyPostImageList v-if="layout.includes('image')" />
  <HairyPostList v-else />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
