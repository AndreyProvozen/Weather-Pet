<script lang="ts" setup>
import ModalWrapper from '@/atoms/ModalWrapper.vue';
import HomeViewContainer from '@/containers/HomeViewContainer.vue';
import AddCityModal from '@/components/modals/AddCityModal.vue';
import { Ref, ref } from 'vue';
import type { CityData } from '@/interface';
import Button from '@/atoms/Button.vue';
import { get, set, useDebounceFn, useToggle } from '@vueuse/core';
import { fetchCitiesAutoComplete } from '@/api';

const [isAddCityModalOpen, setIsAddCityModalOpen] = useToggle(false);
const searchQuery = ref('');
const searchCitiesList: Ref<CityData[] | undefined> = ref(undefined);
const searchCitiesError = ref(false);

const searchCitiesAutoComplete = useDebounceFn(async () => {
  const { features } = await fetchCitiesAutoComplete(get(searchQuery));

  set(searchCitiesList, features);
  set(searchCitiesError, false);
}, 500);

const onInputValueChange = async (value: string) => {
  set(searchQuery, value);

  if (get(searchQuery).length > 2) return await searchCitiesAutoComplete();

  set(searchCitiesList, undefined);
};
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
