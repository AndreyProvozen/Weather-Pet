<script setup lang="ts">
import Carousel from '@/atoms/Carousel.vue';
import { Options, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { TRUSTED_BY_LIST } from '@/constants';

interface Props {
  isDirectionRight?: boolean;
}

const { isDirectionRight } = defineProps<Props>();

const splideOptions: Options = {
  pauseOnHover: true,
  arrows: false,
  pagination: false,
  focus: 'center',
  type: 'loop',
  autoWidth: true,
  drag: 'free',
  autoScroll: {
    speed: isDirectionRight ? -1 : 1,
  },
};

const extensions = { AutoScroll };
</script>

<template>
  <div class="container">
    <Carousel :options="splideOptions" :extensions="extensions">
      <SplideSlide v-for="{ Component, name } in TRUSTED_BY_LIST" :key="name">
        <component :is="Component" class="logo-styles" />
        <h5 class="logo-text">{{ name }}</h5>
      </SplideSlide>
    </Carousel>
  </div>
</template>

<style scoped lang="scss">
.logo-styles {
  height: 140px;
  width: 140px;
}

.logo-text {
  color: $black;
  margin-top: 5px;
  padding: 0 10px;
  text-align: center;
}
</style>
