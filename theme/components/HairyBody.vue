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
        <slot />
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

.HairyBodyBackground {
  @apply transition-all duration-200;
  @apply absolute top-0 max-h-150vh inset-0  transition-all;
  opacity: 0;
}

.dark {
  .HairyBodyBackground {
    @apply absolute inset-0;
    transition-delay: 200ms;
    transition-delay: 0;
    opacity: 1;
    background-image:
      linear-gradient(to top, var(--hy-c-waves-dimm) 0%, transparent 80%),
      linear-gradient(to bottom, var(--hy-c-waves-dimm) 0%, transparent 40%),
      url(https://tva2.sinaimg.cn/large/008ugSUaly8h4mq6837kyj31hc0u00ul.jpg);
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>
