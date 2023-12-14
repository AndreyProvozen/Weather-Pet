<template>
  <div class="container">
    <div style="display: flex; margin-bottom: 20px; gap: 10px">
      <Input
        containerClass="search-input-container"
        variant="outlined"
        :value="`${route.params.state}, ${route.params.city}`"
      />
      <Button
        @click="addCityToLocalStorage"
        variant="filled"
        style="padding: 4px 8px"
      >
        <BookmarkPlusIcon />
      </Button>
    </div>
    <div class="image-wrapper">
      <img class="season-image" :src="getImageUrl()" alt="season background" />
      <div class="image-overlay" />
    </div>
  </div>
</template>

<script setup lang="ts">
import getCurrentSeason from "../../utils/getCurrentSeason";
import Input from "../atoms/Input.vue";
import { CITY_PAGE_VIEW_SEASON_IMAGE } from "../../constants";
import BookmarkPlusIcon from "../../assets/icons/bookmark-plus.svg";
import { useRoute } from "vue-router";
import Button from "../atoms/Button.vue";
import { nanoid } from "nanoid";
import { Ref, ref } from "vue";

interface savedCitiesListProps {
  id: string;
  state: string;
  city: string;
  coordinates: { lat: string; lng: string };
}

const route = useRoute();
const season = getCurrentSeason();

const savedCitiesList: Ref<savedCitiesListProps[]> = ref([]);

const getImageUrl = () => CITY_PAGE_VIEW_SEASON_IMAGE[season];

const addCityToLocalStorage = () => {
  const citiesList = localStorage.getItem("saved_cities_list") || "";

  if (citiesList) savedCitiesList.value = JSON.parse(citiesList);

  const locationObj = {
    id: nanoid(),
    state: route.params.state as string,
    city: route.params.city as string,
    coordinates: {
      lat: route.query.lat as string,
      lng: route.query.lng as string,
    },
  };

  savedCitiesList.value.push(locationObj);

  localStorage.setItem(
    "saved_cities_list",
    JSON.stringify(savedCitiesList.value)
  );
};
</script>

<style lang="scss" scoped>
.season-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.container {
  width: 50%;
}

.search-input-container {
  width: 100%;
}

.image-wrapper {
  position: relative;
  height: 80vh;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
}
</style>
