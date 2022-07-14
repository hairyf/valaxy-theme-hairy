<script lang="ts" setup>
import { useConfig } from 'valaxy'
const config = useConfig()
const hrefToUrl = () => {
  location.href = config.value.url
}
</script>

<template>
  <div class="px-2.5">
    <span class="cursor-pointer" @click="hrefToUrl">{{ config.title }}</span>
  </div>
</template>
