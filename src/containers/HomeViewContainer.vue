<template>
  <HeroSection />
  <QualitySection />
  <TrustedBySection />
  <SavedCitiesSection :saved-cities-list="savedCitiesList" @open-modal="setIsAddCityModalOpen(true)" />
  <ModalWrapper :is-modal-open="isAddCityModalOpen" @close-modal="setIsAddCityModalOpen(false)">
    <AddCityModal
      :search-cities-list="searchCitiesList"
      :search-cities-query="searchQuery"
      :on-input-value-change="onInputValueChange"
    />
  </ModalWrapper>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';
import { QualitySection, HeroSection, TrustedBySection, SavedCitiesSection } from '@/sections';
import type { CityData, CityListDataWithWeather } from '@/interface';
import { get, set, useDebounceFn, useToggle } from '@vueuse/core';
import { fetchCitiesAutoComplete } from '@/api';
import { ModalWrapper } from '@/atoms';
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

<style lang="scss">
.section-title {
  color: $black;
  margin: 30px 0 15px;
  text-align: center;
}
</style>
