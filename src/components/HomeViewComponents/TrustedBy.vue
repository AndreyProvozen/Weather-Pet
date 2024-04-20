<script setup lang="ts">
import Carousel from '@/atoms/Carousel.vue';
import { Options, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { TRUSTED_BY_LIST } from '@/constants';

const splideOptions: Options = {
  pauseOnHover: true,
  arrows: false,
  pagination: false,
  focus: 'center',
  type: 'loop',
  autoWidth: true,
  drag: 'free',
  autoScroll: {
    speed: 1,
  },
};
const extensions = { AutoScroll };
</script>

<template>
  <h3 style="color: #000; text-align: center; margin-bottom: 5px">Trusted By</h3>
  <Carousel :options="splideOptions" :extensions="extensions">
    <SplideSlide v-for="{ Component, name } in TRUSTED_BY_LIST" :key="name">
      <component :is="Component" style="height: 200px; width: 200px" />
    </SplideSlide>
  </Carousel>
</template>

<style scoped></style>
