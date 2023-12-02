<template>
  <div class="container temperature-container">
    <LeftWeatherContent />
    <RightWeatherContent :weatherData="weatherData" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

import LeftWeatherContent from "./cityViewComponents/LeftWeatherContent.vue";
import RightWeatherContent from "./cityViewComponents/RightWeatherContent.vue";

const route = useRoute();

const getWeatherData = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${
        route.query.lat
      }&lon=${route.query.lng}&appid=${
        import.meta.env.VITE_APP_WEATHER_API_KEY
      }&units=metric`
    );

    const weatherResponse = await response.json();

    const localOffset = new Date().getTimezoneOffset() * 60000;

    const utc = weatherResponse.current?.dt * 1000 + localOffset;

    weatherResponse.currentTime = utc + 1000 * weatherResponse.timezone_offset;

    weatherResponse.hourly.forEach((hour: any) => {
      const utc = hour.dt * 1000 + localOffset;
      hour.currentTime = utc + 1000 * weatherResponse.timezone_offset;
    });

    return weatherResponse;
  } catch (error) {
    console.error(error);
  }
};

const weatherData = await getWeatherData();
console.log(weatherData);
</script>

<style scoped>
.temperature-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  align-items: flex-start;
}
</style>
