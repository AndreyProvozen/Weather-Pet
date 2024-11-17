<template>
  <div class="testimonial-card">
    <NuxtImg
      v-if="image"
      width="100px"
      height="100px"
      :src="image"
      :alt="`${name} avatar`"
      class="testimonial-card__image"
    />
    <div v-else class="testimonial-card__image" />
    <h5 class="m-0">{{ name }}</h5>
    <p class="m-0">{{ specialty }}</p>
    <div class="testimonial-card__rating" aria-label="Rating: {{ rating }} out of 5">
      <NuxtIcon
        v-for="item in 5"
        :key="item"
        :name="item <= rating ? 'star-filled' : 'star-outlined'"
        class="testimonial-card__star"
      />
    </div>
    <p class="m-0">{{ review }}</p>
  </div>
</template>

<script setup lang="ts">
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
      position: absolute;
      top: -50px;
    }

    &__rating {
      color: orange;
      margin: 6px 0 16px;
    }

    &__star {
      display: inline-block;
      width: 24px;
      height: 24px;
    }
  }
</style>
