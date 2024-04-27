<template>
  <div class="quality-card--wrapper">
    <h3 class="m-0 quality-card--title">{{ title }}</h3>
    <NumberAnimation
      class="quality-card--animated-number"
      :format="formatNumber"
      :from="animatedNumber.from"
      :to="animatedNumber.to"
      :duration="2"
    />
    <p class="m-0">{{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import NumberAnimation from 'vue-number-animation';

interface Props {
  title: string;
  description: string;
  animatedNumber: { from: number; to: number };
}

defineProps<Props>();

const formatNumber = (value: number) => `${value.toFixed(0)}%`;
</script>

<style scoped lang="scss">
.quality-card {
  &--wrapper {
    color: $black;
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
  }

  &--title {
    font-weight: 600;
  }

  &--animated-number {
    color: $turquoise;
    font-size: 45px;
    font-weight: 600;
    line-height: 1;
    margin: 10px 0;
  }
}
</style>
