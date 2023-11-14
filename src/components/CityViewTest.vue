<template>
  <div></div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const getWeatherData = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${
        route.query.lat
      }&lon=${route.query.lng}&exclude={part}&appid=${
        import.meta.env.VITE_APP_WEATHER_API_KEY
      }&units=imperial`
    );

    const weatherData = await response.json();

    const localOffset = new Date().getTimezoneOffset() * 60000;
    const utc = weatherData.data.current.dt * 1000 + localOffset;
    weatherData.data.currentTime =
      utc + 1000 * weatherData.data.timezone_offset;

    weatherData.data.hourly.forEach((hour: any) => {
      const utc = hour.dt * 1000 + localOffset;
      hour.currentTime = utc + 1000 * weatherData.data.timezone_offset;
    });

    return weatherData.data;
  } catch (error) {
    console.log(error);
  }
};

const weatherData = await getWeatherData();
console.log(weatherData);
</script>

<style scoped></style>
