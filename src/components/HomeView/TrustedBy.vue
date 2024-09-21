<template>
  <div class="trusted-by">
    <Splide :options="splideOptions" :extensions="extensions">
      <SplideSlide v-for="{ icon, name } in TRUSTED_BY_LIST" :key="name" class="trusted-by__slide">
        <Icon :name="icon" class="trusted-by__logo" />
        <h5 class="trusted-by__text">{{ name }}</h5>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@/atoms';
import { Options, Splide, SplideSlide } from '@splidejs/vue-splide';
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
  autoScroll: { speed: isDirectionRight ? -1 : 1 },
};

const extensions = { AutoScroll };
</script>

<style scoped lang="scss">
.trusted-by {
  &__slide {
    text-align: center;
  }

  &__logo {
    height: 70px;
    width: 70px;
  }

  &__text {
    color: $black;
    margin: 5px 0 0;
    padding: 0 10px;
    text-align: center;
  }
}
</style>
