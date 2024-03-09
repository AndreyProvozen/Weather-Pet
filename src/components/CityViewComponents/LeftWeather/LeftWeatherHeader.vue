<script setup lang="ts">
import BookmarkPlusIcon from '@/assets/icons/bookmark-plus.svg';
import LocationIcon from '@/assets/icons/location.svg';
import { useRoute } from 'vue-router';
import Button from '@/atoms/Button.vue';
import { Ref, ref } from 'vue';
import Input from '@/atoms/Input.vue';
import { CityListItemData } from '@/interface';

const route = useRoute();

const savedCitiesList: Ref<CityListItemData[]> = ref([]);

const addCityToLocalStorage = () => {
  const citiesList = localStorage.getItem('saved_cities_list') || '[]';

  if (citiesList) savedCitiesList.value = JSON.parse(citiesList);

  const locationObj = {
    id: `${route.params.state}&${route.params.city}`,
    state: route.params.state as string,
    city: route.params.city as string,
    coordinates: {
      lat: Number(route.query.lat),
      lon: Number(route.query.lon),
    },
  };

  savedCitiesList.value.push(locationObj);

  localStorage.setItem('saved_cities_list', JSON.stringify(savedCitiesList.value));
};
</script>

<template>
  <div class="wrapper">
    <Input
      container-class="search-input-container"
      :start-input-icon="LocationIcon"
      :value="`${route.params.state}, ${route.params.city}`"
    />
    <Button variant="filled" style="padding: 4px 8px" @click="addCityToLocalStorage">
      <BookmarkPlusIcon />
    </Button>
  </div>
</template>

<style scoped lang="scss">
.search-input-container {
  width: 100%;
}

.wrapper {
  display: flex;
  margin-bottom: 20px;
  gap: 10px;

  @media (max-width: $breakpoint-lg) {
    display: none;
  }
}
</style>
