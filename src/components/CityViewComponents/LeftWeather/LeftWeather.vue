<script setup lang="ts">
import { LeftWeatherProps } from '.';
import LeftWeatherContent from './LeftWeatherContent.vue';
import LeftWeatherHeader from './LeftWeatherHeader.vue';

defineProps<LeftWeatherProps>();
</script>

<template>
  <div class="left-weather-container">
    <LeftWeatherHeader />
    <LeftWeatherContent
      :current-temperature="currentTemperature"
      :weather-today="weatherToday"
      :current-visibility="currentVisibility"
    />
  </div>
</template>

<style scoped lang="scss">
.left-weather-container {
  width: 50%;

  @media (max-width: $breakpoint-lg) {
    width: auto;
    min-height: calc(100vh - 90px);
  }
}
</style>
