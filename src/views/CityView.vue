<template>
  <CityViewContainer v-if="weatherData" :weather-data="weatherData" />
  <Loader v-else />
</template>

<script setup lang="ts">
import CityViewContainer from '@/containers/CityViewContainer.vue';
import Loader from '@/atoms/Loader.vue';
import { type LocationQueryValue, useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getFullWeatherData } from '@/api';
import { set } from '@vueuse/core';
import dayjs from 'dayjs';
import type { HourlyWeatherProps, OneCallWeatherData } from '@/interface';

const route = useRoute();

const weatherData = ref<OneCallWeatherData | null>(null);

const getWeatherData = async () => {
  const weatherResponse = await getFullWeatherData({
    lat: route.query.lat as LocationQueryValue,
    lon: route.query.lon as LocationQueryValue,
  });

  const currentTimeUTC = dayjs.unix(weatherResponse.current?.dt).utc();
  weatherResponse.currentTime = currentTimeUTC.add(weatherResponse.timezone_offset, 'second');

  weatherResponse.hourly.forEach((hour: HourlyWeatherProps) => {
    const hourUTC = dayjs.unix(hour.dt).utc();
    hour.currentTime = hourUTC.add(weatherResponse.timezone_offset, 'second');
  });

  set(weatherData, weatherResponse);
};

onMounted(getWeatherData);
</script>
