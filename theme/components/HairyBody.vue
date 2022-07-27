<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const fr = useFrontmatter()
const route = useRoute()

const showWaline = computed(() => route.path.includes('/posts/') || fr.value.waline)
</script>

<template>
  <div class="HairyBody min-h-50vh relative">
    <div class="mx-auto container flex z-1 relative">
      <div class="flex-1 pt-2">
        <router-view />
        <HairyWaline v-if="showWaline" />
      </div>
      <div class="ml-4 w-60 lg:block hidden">
        <HairyUserCard class="w-60" />
      </div>
    </div>
    <div class="HairyBodyBackground" />
  </div>
</template>

<style lang="scss">
.a {
  overflow: hidden;
}

.dark {
  .HairyBodyBackground {
    @apply absolute inset-0;
    background-image: linear-gradient(to bottom, var(--hy-c-waves-dimm) 0%, transparent 80%), url(http://pic1.win4000.com/wallpaper/2019-10-22/5daecb01d8bb4.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 100%;
  }
}
</style>
