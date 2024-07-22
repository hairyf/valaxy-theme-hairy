<script lang="ts" setup>
import type { PostFrontMatter } from 'valaxy'
import { useFrontmatter } from 'valaxy'
import { computed, inject, nextTick, ref } from 'vue'
import { useRouter } from 'vue-router'
import { toArray } from '../../utils'
import { useCategory } from '../../composables'

const frontmatter = useFrontmatter()
const paths = computed(() => toArray(frontmatter.value.categories).filter(Boolean) as string[])
const category = useCategory(paths)

const posts = computed(() => {
  const result = [...(category.value.children?.values() || [])] as PostFrontMatter[]
  return result.sort((a, b) => (a.date || 1) > (b.date || 1) ? 1 : -1)
})

const router = useRouter()

const active = inject('HairyUserTab:active', ref(''))

function isCurrent(title = '') {
  return frontmatter.value.title === title
}

async function changePost(path = '') {
  router.push(path)
  await nextTick()
  active.value = 'aside'
}
</script>

<template>
  <div class="pl-16px text-14px relative overflow-hidden animate__animated animate__fadeIn">
    <div class="outline-title">
      On this Series
    </div>
    <ul class="va-toc relative z-1">
      <a v-for="(item, index) of posts" :key="index" class="va-toc-item" @click="changePost(item.path)">
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
  position: relative;
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

    &::after {
      position: absolute;
      content: '';
      left: -1.12rem;
      top: 0;
      bottom: 0;
      margin: auto;
      width: 4px;
      height: 18px;
      background-color: var(--va-c-brand);
      transition: top 0.25s cubic-bezier(0, 1, 0.5, 1), background-color 0.5s, opacity 0.25s;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }
}
</style>
