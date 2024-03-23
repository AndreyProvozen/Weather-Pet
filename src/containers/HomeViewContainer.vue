<script setup lang="ts">
import { Ref, ref } from 'vue';
import CityCard from '@/components/HomeViewComponents/CityCard.vue';
import type { CityData, CityListDataWithWeather } from '@/interface';
import { get, set, useDebounceFn, useToggle } from '@vueuse/core';
import { fetchCitiesAutoComplete } from '@/api';
import Button from '@/atoms/Button.vue';
import ModalWrapper from '@/atoms/ModalWrapper.vue';
import AddCityModal from '@/components/modals/AddCityModal.vue';

interface Props {
  savedCitiesList: CityListDataWithWeather[];
}

defineProps<Props>();

const [isAddCityModalOpen, setIsAddCityModalOpen] = useToggle(false);
const searchQuery = ref('');
const searchCitiesList: Ref<CityData[] | undefined> = ref();

const searchCitiesAutoComplete = useDebounceFn(async () => {
  const { features } = await fetchCitiesAutoComplete(get(searchQuery));

  set(searchCitiesList, features);
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
    <div class="city-card-container">
      <div v-for="city in savedCitiesList" :key="city.id">
        <CityCard :city-data="city" />
      </div>
    </div>
  </div>
  <ModalWrapper :is-modal-open="isAddCityModalOpen" @close-modal="setIsAddCityModalOpen(false)">
    <AddCityModal
      :search-cities-list="searchCitiesList"
      :search-cities-query="searchQuery"
      :on-input-value-change="onInputValueChange"
    />
  </ModalWrapper>
</template>

<style scoped lang="scss">
.city-card-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, 350px);
  grid-auto-flow: dense;
  justify-content: space-evenly;
  gap: 20px;
}
</style>
