<template>
  <div class="left-weather-wrapper">
    <Input container-class="search-input" :start-input-icon="LocationIcon" :value="`${params.state}, ${params.city}`" />
    <Button variant="filled" style="padding: 4px 8px" @click="addCityToLocalStorage">
      <BookmarkPlusIcon />
    </Button>
  </div>
</template>

<script setup lang="ts">
import BookmarkPlusIcon from '@/assets/icons/bookmark-plus.svg';
import LocationIcon from '@/assets/icons/location.svg';
import { useRoute } from 'vue-router';
import { Button, Input } from '@/atoms';
import { Ref, ref } from 'vue';
import type { CityListItemData } from '@/interface';
import { get, set } from '@vueuse/core';

const { params, query } = useRoute();
const savedCitiesList: Ref<CityListItemData[]> = ref([]);

const addCityToLocalStorage = () => {
  const citiesList = localStorage.getItem('saved_cities_list') || '[]';

  if (citiesList.length) set(savedCitiesList, JSON.parse(citiesList));

  const locationObj = {
    id: `${params.state}&${params.city}`,
    state: params.state as string,
    city: params.city as string,
    coordinates: {
      lat: Number(query.lat),
      lon: Number(query.lon),
    },
  };

  get(savedCitiesList).push(locationObj);

  localStorage.setItem('saved_cities_list', JSON.stringify(get(savedCitiesList)));
};
</script>

<style scoped lang="scss">
.search-input {
  width: 100%;
}

.left-weather-wrapper {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: $breakpoint-lg) {
    display: none;
  }
}
</style>
