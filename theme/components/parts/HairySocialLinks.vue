<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'

const config = useSiteConfig()
</script>

<template>
  <div class="links-of-author grid grid-cols-8 justify-center gap-1">
    <a v-for="item, i in config.social" :key="i" class="links-of-author-item" rel="noopener" :href="item.link" :title="item.name" target="_blank" :style="`color:${item.color}`">
      <div class="icon" :class="item.icon" />
    </a>
  </div>
</template>

<style lang="scss">
.links-of-author {
  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  &-item {
    line-height: 1;
    font-size: 0.9rem;
  }
}
</style>
