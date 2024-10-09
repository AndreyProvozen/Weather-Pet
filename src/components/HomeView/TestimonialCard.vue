<template>
  <div class="testimonial-card">
    <img v-if="image" :src="image" :alt="`${name} avatar`" class="testimonial-card__image" />
    <div v-else class="testimonial-card__image" />
    <h5 class="m-0">{{ name }}</h5>
    <p class="m-0">{{ specialty }}</p>
    <div class="testimonial-rating">
      <template v-for="item in 5" :key="item">
        <StarFilledIcon v-if="item <= rating" />
        <StarOutlinedIcon v-else />
      </template>
    </div>
    <p class="m-0">{{ review }}</p>
  </div>
</template>

<script setup lang="ts">
  import { StarFilledIcon, StarOutlinedIcon } from '@/assets/icons';

  interface Props {
    rating: number;
    name: string;
    review: string;
    specialty: string;
    image?: string;
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .testimonial-card {
    align-items: center;
    background-color: $white;
    border: 2px solid $purple;
    border-radius: 12px;
    box-shadow: 0 0 15px rgb(0 0 0 / 10%);
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 55px 20px 20px;
    position: relative;

    &__image {
      background-color: #ccc;
      border: 10px solid $light-blue;
      border-radius: 50%;
      height: 100px;
      position: absolute;
      top: -50px;
      width: 100px;
    }
  }

  .testimonial-rating {
    color: orange;
    margin: 6px 0 16px;
  }
</style>
