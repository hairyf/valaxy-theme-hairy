<script lang="ts" setup>
withDefaults(
  defineProps<{
    comment?: boolean
  }>(),
  {
    comment: true,
  },
)
</script>

<template>
  <div class="min-h-49vh relative z-5">
    <div class="mx-auto container flex z-1 relative">
      <div class="relative flex-1 pt-2 main">
        <slot v-if="$slots.default" />
        <HairyComment v-if="comment" />
      </div>
      <div class="ml-4 w-60 lg:block hidden">
        <div class="sticky top-3.125rem z-1">
          <slot v-if="$slots.slide" name="slide" />
          <HairySidebar v-else />
        </div>
      </div>
    </div>
    <div class="HairyBodyBackground" />
  </div>
</template>

<style lang="scss">
.HairyBodyBackground {
  @apply absolute top-0 max-h-150vh top-5 bottom-0 w-full;
  opacity: 0;
}
.main {
  background: linear-gradient(to bottom,#fafafa 0,#fff 20%) no-repeat top;
  padding: 1.25rem;
  border-radius: 10px
}

.dark {
  .HairyBodyBackground {
    opacity: 1;
    background-image:
      linear-gradient(to bottom, var(--hy-c-waves-dimm) 0%, transparent 60%, var(--hy-c-waves-dimm) 100%), url(./images/bg.jpg);
    background-position: center;
    opacity: 0.4;
    background-repeat: no-repeat;
    filter: blur(0px);
    background-size: cover;
  }
  .main {
    background: transparent;
  }
}
</style>
