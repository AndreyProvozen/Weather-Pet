<template>
  <div class="left-weather-header">
    <Input container-class="left-weather-header__search-input" :value="inputValue" />
    <Button variant="filled" class="left-weather-header__bookmark-button" @click="toggleBookmark">
      <NuxtIcon :name="isBookmarked ? 'bookmark-plus' : 'bookmark-minus'" style="height: 24px; width: 24px" />
    </Button>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'nuxt/app';
  import { computed } from 'vue';
  import { get, set, useLocalStorage } from '@vueuse/core';
  import type { SavedCitiesProps } from '@/interface';
  import { parseLocationSlug } from '@/utils';

  const {
    params: { locationSlug },
    query: { lat, lon },
  } = useRoute();

  const savedCitiesList = useLocalStorage<SavedCitiesProps[]>('saved_cities_list', []);

  const { city, state } = parseLocationSlug(locationSlug);

  const inputValue = computed(() => `${state}, ${city}`);
  const isBookmarked = computed(() => get(savedCitiesList).some(city => city.id === locationSlug));

  const toggleBookmark = () => {
    const savedCities = get(savedCitiesList);

    const cityExists = savedCities.some(city => city.id === locationSlug);

    const updatedCities = cityExists
      ? savedCities.filter(city => city.id !== locationSlug)
      : [
          ...savedCities,
          {
            id: locationSlug,
            state: state as string,
            city: city as string,
            coordinates: { lat: Number(lat), lon: Number(lon) },
          },
        ];

    set(savedCitiesList, updatedCities);
  };
</script>

<style scoped lang="scss">
  .left-weather-header {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;

    &__search-input {
      width: 100%;
    }

    &__bookmark-button {
      padding: 4px 8px;
    }

    @media (max-width: $breakpoint-lg) {
      display: none;
    }
  }
</style>
