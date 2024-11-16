<template>
  <div class="trusted-by">
    <Splide :options="splideOptions" :extensions="extensions">
      <SplideSlide v-for="{ icon, name } in TRUSTED_BY_LIST" :key="name" class="trusted-by__slide">
        <NuxtIcon filled :name="icon" class="trusted-by__icon" />
        <h5 class="trusted-by__text">{{ name }}</h5>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
  import { Options, Splide, SplideSlide } from '@splidejs/vue-splide';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

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
    autoScroll: { speed: isDirectionRight ? -1 : 1 },
  };

  const TRUSTED_BY_LIST = [
    { name: 'Necklace', icon: 'necklace' },
    { name: 'Cardboard', icon: 'cardboard' },
    { name: 'Honey Jar', icon: 'honey-jar' },
    { name: 'Purple Ouija', icon: 'purple-ouija' },
    { name: 'Sand Bucket', icon: 'sand-bucket' },
    { name: 'Straw Basket', icon: 'straw-basket' },
    { name: 'Green Pipe', icon: 'green-pipe' },
    { name: 'Stylish Bag', icon: 'stylish-bag' },
    { name: 'Cauldron', icon: 'cauldron' },
  ];

  const extensions = { AutoScroll };
</script>

<style scoped lang="scss">
  .trusted-by {
    &__slide {
      text-align: center;
    }

    &__text {
      color: $black;
      margin: 5px 0 0;
      padding: 0 10px;
      text-align: center;
    }

    &__icon {
      height: 70px;
      margin-inline: auto;
      width: 70px;
      display: block;
    }
  }
</style>
