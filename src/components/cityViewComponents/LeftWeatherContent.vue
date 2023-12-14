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
    <img class="season-image" :src="getImageUrl()" alt="season background" />
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
import { ref } from "vue";

const route = useRoute();
const season = getCurrentSeason();

const savedCitiesList = ref([]);

const getImageUrl = () => CITY_PAGE_VIEW_SEASON_IMAGE[season];

const addCityToLocalStorage = () => {
  const citiesList = localStorage.getItem("saved_cities_list") || "";

  if (citiesList) savedCitiesList.value = JSON.parse(citiesList);

  const locationObj = {
    id: nanoid(),
    state: route.params.state,
    city: route.params.city,
    coordinates: { lat: route.query.lat, lng: route.query.lng },
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
  height: 80vh;
  width: 100%;
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
</style>
