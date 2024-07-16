<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  type?: 'white' | 'normal'
  bordered?: boolean
  href?: string
  onClick?: ((payload: MouseEvent) => void)
}>()

const router = useRouter()
const urlReg = /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/
const isLink = computed(() => urlReg.test(props.href || ''))

function onClick(payload: MouseEvent) {
  !props.onClick
    ? isLink.value ? redirectTo(props.href!) : router.push(props.href!)
    : props.onClick?.(payload)
  payload.preventDefault()
}

function redirectTo(url: string, target = '_blank') {
  const link = document.createElement('a')
  link.href = url
  link.target = target
  link.click()
  link.remove()
}
</script>

<template>
  <a
    class="cursor-pointer transition-colors" :class="[
      type === 'white'
        ? 'text-black hover:text-primary dark:text-white'
        : 'text:text-primary-light hover:text-primary-dark',
      bordered && 'border-b border-dashed hover:border-primary',
    ]"
    :href="href"
    onclick="return false"
    @click="onClick"
  >
    <slot />
  </a>
</template>

<style lang="scss" scoped></style>
