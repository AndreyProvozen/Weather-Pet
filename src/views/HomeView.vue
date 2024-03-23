<script lang="ts" setup>
import HomeViewContainer from '@/containers/HomeViewContainer.vue';
import { Ref, onMounted, ref } from 'vue';
import type { CityListDataWithWeather } from '@/interface';
import { get, set } from '@vueuse/core';
import { getShortWeatherData } from '@/api';

const savedCities: Ref<CityListDataWithWeather[]> = ref([]);

const loadSavedCities = async () => {
  const citiesList = localStorage.getItem('saved_cities_list') || '[]';
  if (citiesList.length) set(savedCities, JSON.parse(citiesList));

  const weatherRequests = get(savedCities).map(async ({ coordinates }) => await getShortWeatherData(coordinates));
  const weatherData = await Promise.all(weatherRequests);

  weatherData.forEach((weather, index) => (get(savedCities)[index].weather = weather));
};

onMounted(loadSavedCities);
</script>

<template>
  <HomeViewContainer :saved-cities-list="savedCities" />
</template>
