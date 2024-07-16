<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{
  links?: {
    name: string
    url: string
    image: string
    color: string
    desc?: string
  }[]
}>()
</script>

<template>
  <div class="min-h-30vh">
    <div class="links">
      <div
        v-for="(item, index) in links" :key="index" class="link-block flex items-center py-0.5rem px-1rem rounded-lg"
        :style="{ '--block-color': item.color }"
      >
        <a :href="item.url" class="w-4rem h-4rem">
          <HairyImage class="w-full h-full rounded-xl" :src="item.image" />
        </a>
        <div class="pl-1rem flex-1">
          <a :href="item.url" class="font-bold text-lg title">
            {{ item.name }}
          </a>
          <div class="max-w-180px text-sm my-0.5rem truncate desc">
            {{ item.desc }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.link-block {
  border: 0.0625rem solid #f7f7f7;
  box-shadow: 0 0.625rem 1.875rem -0.9375rem rgba(0, 0, 0, 0.1);
  --bg-color: var(--block-color, #666);
  @apply transition-all duration-200;

  .title {
    color: var(--block-color);
  }
}

.dark .link-block {
  background: rgba($color: #989898, $alpha: 0.1);
}

.links .link-block:hover {
  background-color: var(--bg-color);
  box-shadow: 0 0.125rem 1.25rem var(--bg-color);
  border-color: var(--bg-color);

  .title,
  .desc {
    color: #fff;
  }
}

.links {
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 24px;
}
</style>
