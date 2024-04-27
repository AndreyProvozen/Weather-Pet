<template>
  <div class="container city-view-container">
    <LeftWeather
      :weather-today="weatherData.daily[0]"
      :current-temperature="weatherData.current.temp"
      :current-visibility="weatherData.current.visibility"
    />
    <RightWeatherContent :weather-data="weatherData" />
  </div>
</template>

<script setup lang="ts">
import LeftWeather from '@/components/CityViewComponents/LeftWeather';
import RightWeatherContent from '@/components/CityViewComponents/RightWeatherContent.vue';
import type { OneCallWeatherData } from '@/interface';

interface Props {
  weatherData: OneCallWeatherData;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.city-view-container {
  display: flex;
  gap: 30px;
  justify-content: space-between;
  margin-top: 20px;
  min-height: calc(100vh - 90px);

  @media (max-width: $breakpoint-lg) {
    flex-direction: column;
    min-height: auto;
  }
}
</style>
