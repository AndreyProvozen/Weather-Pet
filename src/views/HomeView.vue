<script lang="ts" setup>
import ModalWrapper from '@/atoms/ModalWrapper.vue';
import HomeViewContainer from '@/containers/HomeViewContainer.vue';
import AddCityModal from '@/components/modals/AddCityModal.vue';
import { Ref, ref } from 'vue';
import { CityData } from '@/interface';
import Button from '@/atoms/Button.vue';
import { useDebounceFn, useToggle } from '@vueuse/core';

const [isAddCityModalOpen, setIsAddCityModalOpen] = useToggle(false);
const searchQuery = ref('');

const searchCitiesList: Ref<CityData[] | undefined> = ref(undefined);
const searchCitiesError = ref(false);

const onInputValueChange = async (value: string) => {
  searchQuery.value = value;

  if (searchQuery.value.length > 2) return await searchCitiesAutoComplete();

  searchCitiesList.value = undefined;
};

const searchCitiesAutoComplete = useDebounceFn(async () => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${
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
</script>

<template>
  <div class="container">
    <Button variant="filled" @click="setIsAddCityModalOpen(true)"> Open add City modal </Button>
    <HomeViewContainer />
    <ModalWrapper :is-modal-open="isAddCityModalOpen" @close-modal="setIsAddCityModalOpen(false)">
      <AddCityModal
        :search-cities-list="searchCitiesList"
        :search-cities-error="searchCitiesError"
        :search-cities-query="searchQuery"
        :on-input-value-change="onInputValueChange"
      />
    </ModalWrapper>
  </div>
</template>

<style lang="scss">
.autocomplete-input {
  width: 100%;
  list-style-type: none;
  padding: 8px 16px;
  border: 2px solid $pale-gray;
  color: black;
  margin: 8px 0 0;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba($color: #000, $alpha: 10%);
}
</style>
