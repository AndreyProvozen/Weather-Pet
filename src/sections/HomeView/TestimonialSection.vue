<template>
  <section class="container testimonial-section">
    <h2 class="section-title">Testimonial</h2>
    <Splide :options="splideOptions">
      <SplideSlide v-for="testimonial in MOCKED_TESTIMONIALS" :key="`${testimonial.review} ${testimonial.name}`">
        <TestimonialCard v-bind="testimonial" />
      </SplideSlide>
    </Splide>
  </section>
</template>

<script setup lang="ts">
import TestimonialCard from '@/components/HomeView/TestimonialCard.vue';
import { MOCKED_TESTIMONIALS } from '@/constants';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const splideOptions = {
  pagination: false,
  gap: '30px',
  mediaQuery: 'max',
  perPage: 3,
  breakpoints: { 1024: { perPage: 2 }, 640: { perPage: 1 } },
  perMove: 1,
};
</script>

<style lang="scss">
.testimonial-section {
  color: $black;
  padding-inline: 20px;
  text-align: center;

  .splide__slide {
    padding-top: 40px;
  }

  .splide__arrow {
    background-color: $purple-light;
    border: 2px solid $purple;
    height: 40px;
    opacity: 1;
    width: 40px;
    transform: translateY(calc(-50% + 20px));

    &--prev {
      left: -20px;

      > svg {
        fill: $white;
      }
    }

    &--next {
      right: -20px;

      > svg {
        fill: $white;
      }
    }
  }
}
</style>
