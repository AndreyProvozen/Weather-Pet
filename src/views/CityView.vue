<template>
  <div v-if="state.weather.weatherData" class="container city-view-container">
    <LeftWeather
      :weather-today="state.weather.weatherData.daily[0]"
      :current-temperature="state.weather.weatherData.current.temp"
      :current-visibility="state.weather.weatherData.current.visibility"
    />
    <RightWeatherContent :weather-data="state.weather.weatherData" />
  </div>
  <Loader v-else />
</template>

<script setup lang="ts">
import { type LocationQueryValue, useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useStore } from '@/store';
import LeftWeather from '@/components/CityView/LeftWeather';
import RightWeatherContent from '@/components/CityView/RightWeatherContent.vue';
import { Loader } from '@/atoms';

const route = useRoute();
const { dispatch, state } = useStore();

onMounted(() => {
  const lat = route.query.lat as LocationQueryValue;
  const lon = route.query.lon as LocationQueryValue;

  dispatch('fetchFullWeatherData', { lat, lon });
});
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
