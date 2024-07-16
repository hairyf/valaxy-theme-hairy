<script lang="ts" setup>
import type { NavItem } from 'valaxy-theme-hairy'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  item: NavItem
}>()
const urlReg = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/
const isLink = computed(() => urlReg.test(props.item?.link || ''))
const isPointer = computed(() => Boolean(props.item.link) || isLink.value)

const route = useRoute()

const active = computed(() => {
  return !isLink.value && (
    props.item.link === '/'
      ? route.path === props.item.link
      : route.path.includes(props.item.link!)
  )
})
</script>

<template>
  <a href="" class="px-2.5 HairyMenuItem" :class="[isPointer ? 'cursor-pointer' : 'select-none', active && 'text-primary active']">
    <HairyLink class="flex items-center" type="white" :href="item.link" :target="isLink ? '__blank' : ''">
      <div v-if="item.icon" class="mr-1 icon" :class="item.icon" />
      <div class="question">
        {{ item.text }}
      </div>
    </HairyLink>
  </a>
</template>

<style lang="scss" scoped></style>
