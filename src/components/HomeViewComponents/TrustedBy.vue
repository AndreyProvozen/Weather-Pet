<template>
  <div class="container">
    <Carousel :options="splideOptions" :extensions="extensions">
      <SplideSlide v-for="{ Component, name } in TRUSTED_BY_LIST" :key="name" class="trusted-by--slide">
        <component :is="Component" class="trusted-by--logo" />
        <h5 class="trusted-by--text">{{ name }}</h5>
      </SplideSlide>
    </Carousel>
  </div>
</template>

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

<style scoped lang="scss">
.trusted-by {
  &--slide {
    text-align: center;
  }

  &--logo {
    height: 70px;
    width: 70px;
  }

  &--text {
    color: $black;
    margin: 5px 0 0;
    padding: 0 10px;
    text-align: center;
  }
}
</style>
