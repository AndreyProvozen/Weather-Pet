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
import { useRoute } from 'vue-router';
import LeftWeather from './LeftWeather';
import RightWeatherContent from './RightWeatherContent.vue';

const route = useRoute();

const getWeatherData = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&appid=${
        import.meta.env.VITE_APP_WEATHER_API_KEY
      }&units=metric&exclude=minutely`
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
