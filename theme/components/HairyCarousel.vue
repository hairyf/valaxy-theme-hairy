<script lang="ts" setup>
import images from '@hairy:images:home'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

images.sort(() => Math.random() - 0.5)
</script>

<template>
  <swiper
    effect="fade"
    :speed="2000"
    :fade-effect="{ crossFade: true }"
    :modules="[Autoplay, EffectFade]"
    :slides-per-view="1"
    :space-between="50"
    :autoplay="{
      delay: 4000,
    }"
    class="swiper-no-swiping"
  >
    <swiper-slide v-for="(item, index) in images" :key="index" class="w-full h-full">
      <img class="w-full h-full object-cover" :src="item" />
    </swiper-slide>
  </swiper>
</template>
