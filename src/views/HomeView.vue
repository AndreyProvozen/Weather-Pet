<template>
  <div class="body">
    <button @click="toggleCreateModal" class="filled">
      Open add City modal
    </button>
  </div>

  <ModalWrapper
    :isModalOpen="isAddCityModalOpen"
    @close-modal="toggleCreateModal"
  >
    <div>
      <img
        style="border-radius: 8px; height: 250px; width: 100%"
        src="../assets/images/add-city-modal.jpg"
        alt="Add new city modal image"
      />
      <h4 style="color: rgb(2, 1, 1); margin: 16px 0">Add new city</h4>
      <input
        class="input"
        style="width: 100%"
        @input="searchCitiesAutoComplete"
        v-model="searchQuery"
        placeholder="Search for a city or state"
        type="text"
      />
      <ul v-if="searchCitiesList" class="autocomplete-input">
        <p style="margin: 0" v-if="searchCitiesError">
          Something went wrong, please try again later
        </p>
        <p style="margin: 0" v-if="searchCitiesList.length === 0">
          No results found
        </p>
        <template v-else>
          <li
            v-for="cityData in searchCitiesList"
            :key="cityData.id"
            style="padding: 8px 0; cursor: pointer"
          >
            {{ cityData.place_name }}
          </li>
        </template>
      </ul>
    </div>
  </ModalWrapper>
</template>

<script lang="ts" setup>
import ModalWrapper from "@/components/ModalWrapper.vue";
import { Ref, ref } from "vue";

export interface CityData {
  id: string;
  type: string;
  place_type: string[];
  relevance: number;
  text: string;
  place_name: string;
  bbox: number[];
  center: number[];
  geometry: {
    type: string;
    coordinates: number[];
  };
}

const isAddCityModalOpen = ref(false);
const searchQuery = ref("");
const searchQueryTimeout: Ref<string | number | NodeJS.Timeout> = ref("");
const searchCitiesList: Ref<CityData[] | undefined> = ref(undefined);
const searchCitiesError = ref(false);

const toggleCreateModal = () => {
  isAddCityModalOpen.value = !isAddCityModalOpen.value;
};

const searchCitiesAutoComplete = async () => {
  clearTimeout(searchQueryTimeout.value);

  searchQueryTimeout.value = setTimeout(async () => {
    if (searchQuery.value.length > 2) {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${
            searchQuery.value
          }.json?access_token=${
            import.meta.env.VITE_APP_MAPBOX_API_KEY
          }&types=place`
        );

        const data = await response.json();

        searchCitiesList.value = data.features;
      } catch (error) {
        searchCitiesError.value = true;
      }

      return;
    }

    searchCitiesList.value = undefined;
  }, 500);
};
</script>

<style scoped lang="scss">
.body {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: $color-content-bg;
}

.autocomplete-input {
  width: 100%;
  list-style-type: none;
  padding: 8px 16px;
  border: 2px solid $input-border-color;
  color: black;
  margin: 8px 0 0;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
