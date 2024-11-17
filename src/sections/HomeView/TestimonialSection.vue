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
  import { computed, readonly } from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import { TestimonialCard } from '@/components';

  const MOCKED_TESTIMONIALS = readonly([
    {
      rating: 5,
      name: 'David Tom',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      specialty: 'CEO, Company',
      image: 'UserAvatars/placeholder-1.webp',
    },
    {
      rating: 4,
      name: 'Sarah Johnson',
      review:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      specialty: 'Marketing Director, BrandX',
      image: 'UserAvatars/placeholder-2.webp',
    },
    {
      rating: 5,
      name: 'Michael Lee',
      review: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      specialty: 'CFO, Financial Corp',
      image: 'UserAvatars/placeholder-3.avif',
    },
    {
      rating: 3,
      name: 'Emily Clark',
      review:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      specialty: 'HR Manager, People First',
      image: 'UserAvatars/placeholder-4.webp',
    },
    {
      rating: 4,
      name: 'James Wilson',
      review:
        'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
      specialty: 'CTO, Tech Innovators',
      image: 'UserAvatars/placeholder-5.avif',
    },
  ]);

  const splideOptions = computed(() => ({
    pagination: false,
    gap: '30px',
    mediaQuery: 'max',
    perPage: 3,
    breakpoints: { 1024: { perPage: 2 }, 640: { perPage: 1 } },
    perMove: 1,
  }));
</script>

<style lang="scss">
  .testimonial-section {
    color: $black;
    padding-inline: 20px;
    text-align: center;

    /* stylelint-disable-next-line selector-class-pattern */
    .splide__slide {
      padding-top: 40px;
    }

    /* stylelint-disable-next-line selector-class-pattern */
    .splide__arrow {
      background-color: $purple-light;
      border: 2px solid $purple;
      height: 40px;
      opacity: 1;
      transform: translateY(calc(-50% + 20px));
      width: 40px;
      transition: opacity 0.3s ease;

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

      &[disabled] {
        border-color: $gray-dark;
        background-color: $gray;
        pointer-events: none;
      }
    }
  }
</style>
