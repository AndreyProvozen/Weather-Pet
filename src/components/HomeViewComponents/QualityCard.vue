<template>
  <div class="quality-card">
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
  align-items: center;
  background: $gray;
  border-radius: 20px;
  display: flex;
  flex-basis: calc(33.333% - 20px);
  height: 350px;
  justify-content: center;
  overflow: hidden;
  position: relative;

  @media (max-width: $breakpoint-lg) {
    flex-basis: calc(50% - 20px);
  }

  &::before {
    animation: spin 6s linear infinite;
    background-image: conic-gradient(transparent, transparent, transparent, $purple);
    content: '';
    height: 600px;
    position: absolute;
    width: 600px;
  }

  &::after {
    animation: spin 6s linear infinite;
    animation-delay: -3s;
    background-image: conic-gradient(transparent, transparent, transparent, $turquoise);
    content: '';
    height: 600px;
    position: absolute;
    width: 600px;
  }

  &--wrapper {
    align-items: center;
    background-color: $white;
    border-radius: 16px;
    color: $black;
    display: flex;
    flex-direction: column;
    inset: 4px;
    justify-content: center;
    padding: 16px;
    position: absolute;
    text-align: center;
    z-index: $z-10;
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
