<script setup lang="ts">
import CityViewContainer from '@/containers/CityViewContainer.vue';
import Loader from '@/atoms/Loader.vue';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';

const route = useRoute();

const weatherData = ref(null);

const getWeatherData = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lon}&appid=${
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

    weatherData.value = weatherResponse;
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await getWeatherData();
});
</script>

<template>
  <CityViewContainer v-if="weatherData" :weather-data="weatherData" />
  <Loader v-else />
</template>
