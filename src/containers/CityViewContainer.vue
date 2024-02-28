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

<script setup lang="ts">
import LeftWeather from '@/components/CityViewComponents/LeftWeather';
import RightWeatherContent from '@/components/CityViewComponents/RightWeatherContent.vue';

interface Props {
  weatherData: any;
}

defineProps<Props>();
</script>

<style scoped>
.temperature-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
</style>
