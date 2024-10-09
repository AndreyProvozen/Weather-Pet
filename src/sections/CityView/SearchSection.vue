<template>
  <div class="left-weather-header">
    <Input container-class="left-weather-header__search-input" :start-input-icon="LocationIcon" :value="inputValue" />
    <Button variant="filled" class="left-weather-header__bookmark-button" @click="toggleBookmark">
      <BookmarkMinusIcon v-if="isBookmarked" />
      <BookmarkPlusIcon v-else />
    </Button>
  </div>
</template>

<script setup lang="ts">
  import { BookmarkPlusIcon, BookmarkMinusIcon, LocationIcon } from '@/assets/icons';
  import { useRoute } from 'vue-router';
  import { Button, Input } from '@/atoms';
  import { onMounted, ref, computed } from 'vue';
  import { get, set } from '@vueuse/core';
  import { SavedCitiesProps } from '@/interface';

  const {
    params: { state, city },
    query: { lat, lon },
  } = useRoute();

  const savedCitiesList = ref<SavedCitiesProps[]>([]);

  const isBookmarked = computed(() => {
    const cityId = `${state}&${city}`;
    const savedCities = get(savedCitiesList);

    return savedCities.some(city => city.id === cityId);
  });

  const inputValue = computed(() => `${state}, ${city}`);

  const loadCitiesFromLocalStorage = () => {
    const storedCities = JSON.parse(localStorage.getItem('saved_cities_list') || '[]');
    set(savedCitiesList, storedCities);
  };

  onMounted(loadCitiesFromLocalStorage);

  const toggleBookmark = () => {
    const cityId = `${state}&${city}`;
    const savedCities = get(savedCitiesList);

    const cityExists = savedCities.some(city => city.id === cityId);

    const updatedCities = cityExists
      ? savedCities.filter(city => city.id !== cityId)
      : [
          ...savedCities,
          {
            id: cityId,
            state: state as string,
            city: city as string,
            coordinates: { lat: Number(lat), lon: Number(lon) },
          },
        ];

    set(savedCitiesList, updatedCities);
    localStorage.setItem('saved_cities_list', JSON.stringify(updatedCities));
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
