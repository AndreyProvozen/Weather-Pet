<template>
  <Suspense>
    <template #fallback><p>Loading</p></template>
    <div v-for="city in savedCities" :key="city.id">
      <CityCard :city-data="city" />
    </div>
  </Suspense>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

import CityCard from './CityCard.vue';
import { CityListItemData } from '@/interface';

const savedCities: Ref<CityListItemData[]> = ref([]);

const getCities = async () => {
  try {
    const citiesList = localStorage.getItem('saved_cities_list') || '[]';

    if (citiesList) savedCities.value = JSON.parse(citiesList);

    const weatherRequests = savedCities.value.map(async ({ coordinates }) => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${
          import.meta.env.VITE_APP_WEATHER_API_KEY
        }&units=metric`
      );

      return await response.json();
    });

    const weatherData = await Promise.all(weatherRequests);

    weatherData.forEach((weather, index) => {
      savedCities.value[index].weather = weather;
    });
  } catch (error) {
    console.error('Error fetching cities:', error);
  }
};

getCities();
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
