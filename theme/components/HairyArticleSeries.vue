<script lang="ts" setup>
import { useFrontmatter } from 'valaxy'
import { computed } from 'vue'
import { toArr } from '../utils'
import { useCurrentCategory } from '../hooks/useCategory'

const frontmatter = useFrontmatter()
const paths = computed(() => toArr(frontmatter.value.categories).filter(Boolean) as string[])
const category = useCurrentCategory(paths)
const posts = computed(() => category.value.posts || [])

function isCurrent(title = '') {
  return frontmatter.value.title === title
}
</script>

<template>
  <div class="pl-16px text-14px relative">
    <div class="outline-title">
      On this Series
    </div>
    <ul class="va-toc relative z-1">
      <a v-for="(item, index) of posts" :key="index" class="va-toc-item">
        <a class="outline-link" :class="[isCurrent(item.title) && 'active']">{{ index + 1 }}.{{ item.title }}</a>
      </a>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.outline-title {
  letter-spacing: 0.4px;
  line-height: 28px;
  font-size: 14px;
  font-weight: 600;
}

.outline-link {
  display: block;
  line-height: 28px;
  color: var(--va-c-text-light);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: var(--va-c-brand);
    transition: color 0.25s;
  }

  &.active {
    color: var(--va-c-brand);
    transition: color .25s;
  }
}
</style>
