<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const fr = useFrontmatter()
const route = useRoute()

const showWaline = computed(() => route.path.includes('/posts/') || fr.value.waline)
</script>

<template>
  <div class="HairyBody min-h-50vh">
    <div class="mx-auto container flex">
      <div class="flex-1 pt-2">
        <router-view />
        <HairyWaline v-if="showWaline" />
      </div>
      <div class="ml-4 w-60 lg:block hidden">
        <HairyUserCard class="w-60" />
      </div>
    </div>
  </div>
</template>

<style>
  .a {
    overflow: hidden;
  }
</style>
