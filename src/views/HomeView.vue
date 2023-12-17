<template>
  <div>
    <Button @click="toggleCreateModal" variant="filled">
      Open add City modal
    </Button>
  </div>

  <ModalWrapper
    :isModalOpen="isAddCityModalOpen"
    @close-modal="toggleCreateModal"
  >
    <AddCityModal
      :searchCitiesList="searchCitiesList"
      :searchCitiesError="searchCitiesError"
      :searchCitiesQuery="searchQuery"
      :onInputValueChange="onInputValueChange"
    />
  </ModalWrapper>
</template>

<script lang="ts" setup>
import ModalWrapper from "@/components/atoms/ModalWrapper.vue";
import AddCityModal from "@/components/modals/AddCityModal.vue";
import { Ref, ref } from "vue";
import { CityData } from "@/interface";
import Button from "@/components/atoms/Button.vue";

const isAddCityModalOpen = ref(false);
const searchQuery = ref("");
const searchQueryTimeout: Ref<string | number | NodeJS.Timeout> = ref("");
const searchCitiesList: Ref<CityData[] | undefined> = ref(undefined);
const searchCitiesError = ref(false);

const toggleCreateModal = () => {
  isAddCityModalOpen.value = !isAddCityModalOpen.value;
};

const onInputValueChange = async (value: string) => {
  searchQuery.value = value;

  if (searchQuery.value.length > 2) return await searchCitiesAutoComplete();

  searchCitiesList.value = undefined;
};

const searchCitiesAutoComplete = async () => {
  clearTimeout(searchQueryTimeout.value);

  searchQueryTimeout.value = setTimeout(async () => {
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
      searchCitiesError.value = false;
    } catch (error) {
      searchCitiesError.value = true;
    }
  }, 500);
};
</script>

<style lang="scss">
.autocomplete-input {
  width: 100%;
  list-style-type: none;
  padding: 8px 16px;
  border: 2px solid $pale-gray;
  color: black;
  margin: 8px 0 0;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
