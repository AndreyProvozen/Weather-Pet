<script setup lang="ts">
import LeftWeather from '@/components/CityViewComponents/LeftWeather';
import RightWeatherContent from '@/components/CityViewComponents/RightWeatherContent.vue';
import { OneCallWeatherData } from '@/interface';

interface Props {
  weatherData: OneCallWeatherData;
}

defineProps<Props>();
</script>

<template>
  <div class="container temperature-container">
    <LeftWeather
      :weather-today="weatherData.daily[0]"
      :current-temperature="weatherData.current.temp"
      :current-visibility="weatherData.current.visibility"
    />
    <RightWeatherContent :weather-data="weatherData" />
  </div>
</template>

<style scoped lang="scss">
.temperature-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  min-height: calc(100vh - 90px);

  @media (max-width: $breakpoint-lg) {
    flex-direction: column;
    min-height: auto;
  }
}
</style>
