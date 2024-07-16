<script lang="ts" setup>
import type { NavItem } from 'valaxy-theme-hairy'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { ejectWindow } from '../../utils'
import { useGlobalStore } from '../../store'

const props = defineProps<{
  item: NavItem
}>()
const { showDrawer } = storeToRefs(useGlobalStore())
const urlReg = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/
const isLink = computed(() => urlReg.test(props.item?.link || ''))
const isPointer = computed(() => Boolean(props.item.link) || isLink.value)
const router = useRouter()
const route = useRoute()

function toLink() {
  if (isLink.value)
    return ejectWindow(props.item.link!)
  if (props.item.link)
    router.push(props.item.link)
  showDrawer.value = false
}

const isActive = computed(() => {
  if (isLink.value)
    return false
  if (props.item.link === '/')
    return route.path === props.item.link
  return route.path.includes(props.item.link!)
})
</script>

<template>
  <button class="px-2.5 HairyMenuItem" :class="[isPointer ? 'cursor-pointer' : 'select-none', isActive && 'text-primary active']">
    <div class="flex items-center hover:text-primary" @click="toLink">
      <div v-if="item.icon" class="mr-1 icon" :class="item.icon" />
      <div class="question">
        {{ item.text }}
      </div>
    </div>
  </button>
</template>

<style lang="scss" scoped></style>
