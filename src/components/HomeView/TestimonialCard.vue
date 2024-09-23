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
  height: 100%;
  border: 2px solid $purple;
  background-color: $white;
  border-radius: 12px;
  padding: 55px 20px 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  &__image {
    border: 10px solid $light-blue;
    position: absolute;
    top: -50px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ccc;
  }
}

.testimonial-rating {
  margin: 6px 0 16px 0;
  color: orange;
}
</style>
