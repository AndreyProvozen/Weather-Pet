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

<style scoped lang="scss">
.quality-card {
  &--wrapper {
    color: $black;
    display: flex;
    flex-direction: column;
    text-align: center;
    flex: 1;
  }

  &--title {
    font-weight: 600;
  }

  &--animated-number {
    font-size: 45px;
    line-height: 1;
    margin: 10px 0;
    font-weight: 600;
    color: $turquoise;
  }
}
</style>
