<script lang="ts" setup>
import { computed } from 'vue'
import { useBackToTop } from 'valaxy'

const { show, percentage } = useBackToTop({ offset: 100 })

const radius = 48
const circumference = 2 * radius * Math.PI

const strokeOffset = computed(() => {
  // 周长
  const val = (1 - percentage.value) * circumference
  return val < 0 ? 0 : val
})

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <a class="back-to-top cursor-pointer" :class="show && 'show'" @click="toTop">
    <div w="8" h="8" i-ri-arrow-up-s-line />
    <svg class="progress-circle-container" viewBox="0 0 100 100">
      <circle :stroke-dasharray="`${circumference} ${circumference}`" :stroke-dashoffset="strokeOffset" class="progress-circle" cx="50" cy="50" :r="radius" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
    </svg>
  </a>
</template>

<style lang="scss">
@use "sass:map";

.back-to-top {
  position: fixed;
  width: 32px;
  height: 32px;
  right: 0rem;
  bottom: 1.5rem;
  z-index: 10;
  opacity: 0;
  pointer-events: none;

  color: var(--hy-c-primary);
  transform: translateX(0) rotate(270deg);
  // override yun-icon-btn transition
  transition: transform var(--va-transition-duration), opacity var(--va-transition-duration-fast) !important;

  &.show {
    transform: translateX(-32px) rotate(360deg);
    opacity: 1;
    pointer-events: fill;
  }

  .icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  > div {
    margin-bottom: -2em;
  }
}

.progress-circle {
  transition: 0.3s stroke-dashoffset;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;

  &-container {
    position: absolute;
  }
}
</style>
