<template>
  <div style="display: flex; margin-bottom: 20px; gap: 10px">
    <Input
      containerClass="search-input-container"
      variant="outlined"
      :startInputIcon="LocationIcon"
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
</template>

<script setup lang="ts">
import BookmarkPlusIcon from "@/assets/icons/bookmark-plus.svg";
import LocationIcon from "@/assets/icons/location.svg";
import { useRoute } from "vue-router";
import Button from "../../atoms/Button.vue";
import { nanoid } from "nanoid";
import { Ref, ref } from "vue";
import Input from "../../atoms/Input.vue";

interface savedCitiesListProps {
  id: string;
  state: string;
  city: string;
  coordinates: { lat: string; lng: string };
}

const route = useRoute();

const savedCitiesList: Ref<savedCitiesListProps[]> = ref([]);

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

<style scoped>
.search-input-container {
  width: 100%;
}
</style>
