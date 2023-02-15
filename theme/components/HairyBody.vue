<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const fr = useFrontmatter()
const route = useRoute()

const showWaline = computed(() => route.path.includes('/posts/') || fr.value.waline)
</script>

<template>
  <div class="HairyBody min-h-49vh relative">
    <div class="mx-auto breakpoint flex z-1 relative">
      <div class="relative flex-1 pt-2 w-0">
        <slot />
        <HairyWaline v-if="showWaline" />
      </div>

      <div class="ml-4 w-60 lg:block hidden">
        <div class="sticky top-3.125rem z-1">
          <slot v-if="$slots.slide" name="slide" />
          <HairyUserCard v-else />
        </div>
      </div>
    </div>
    <div class="HairyBodyBackground" />
  </div>
</template>

<style lang="scss">
.HairyBodyBackground {
  @apply transition-all duration-200;
  @apply absolute top-0 max-h-150vh top-5 bottom-0 w-full transition-opacity;
  opacity: 0;
}

.dark {
  .HairyBodyBackground {
    transition-delay: 200ms;
    transition-delay: 0;
    opacity: 1;
    background-image:
      linear-gradient(to bottom, var(--hy-c-waves-dimm) 0%, transparent 60%, var(--hy-c-waves-dimm) 100%), url(./images/bg.jpg);
    background-position: center;
    opacity: 0.4;
    background-repeat: no-repeat;
    filter: blur(0px);
    background-size: cover;
  }
}
</style>
