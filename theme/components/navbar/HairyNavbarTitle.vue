<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'

const config = useSiteConfig()

function hrefToUrl() {
  location.href = config.value.url
}
</script>

<template>
  <div class="px-2.5">
    <span class="cursor-pointer hover:text-primary" @click="hrefToUrl">{{ config.title }}</span>
  </div>
</template>
