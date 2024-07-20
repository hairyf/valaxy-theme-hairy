<script lang="ts" setup>
import images from '@hairy:images:home'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/element/css/virtual'

images.sort(() => Math.random() - 0.5)
const cur = ref<number>(0)
</script>

<template>
  <Swiper
    class="HairyCarousel swiper-no-swiping transition-none"
    :fade-effect="{ crossFade: true }"
    :modules="[Autoplay, EffectFade]"
    :autoplay="{ delay: 4000 }"
    :slides-per-view="1"
    :space-between="50"
    :speed="2000"
    effect="fade"
    :lazy-preload-prev-next="3"
    @slide-change="cur = $event.activeIndex"
  >
    <SwiperSlide v-for="(item, index) in images.slice(0, 5)" :key="index" lazy class="w-full h-full">
      <img v-if="[cur - 1, cur, cur + 1].includes(index)" class="w-full h-full object-cover" :src="item" loading="lazy">
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
.swiper-lazy-preloader {
  display: none !important;
}
.HairyCarousel {
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    z-index: 2;
    transition: all .2s ease-in-out 0s;
  }
}
.dark {
  .HairyCarousel::before {
    background-color: rgba(0,0,0,.4);
  }
}
</style>
