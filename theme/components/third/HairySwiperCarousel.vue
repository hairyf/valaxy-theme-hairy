<script lang="ts" setup>
import images from '@hairy:images:home'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

images.sort(() => Math.random() - 0.5)
</script>

<template>
  <Swiper
    effect="fade" :speed="2000" :fade-effect="{ crossFade: true }" :modules="[Autoplay, EffectFade]"
    :slides-per-view="1" :space-between="50" :autoplay="{
      delay: 4000,
    }" class="HairyCarousel swiper-no-swiping"
  >
    <SwiperSlide v-for="(item, index) in images" :key="index" class="w-full h-full">
      <img class="w-full h-full object-cover" :src="item">
    </SwiperSlide>
  </Swiper>
</template>

<style lang="scss">
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
