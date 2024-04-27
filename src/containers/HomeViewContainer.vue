<template>
  <HeroBlock />
  <h2 class="section-title">Trusted By</h2>
  <TrustedBy />
  <TrustedBy :is-direction-right="true" />
  <h2 class="section-title">Our Quality</h2>
  <div class="container" style="display: flex; gap: 30px">
    <QualityCard
      v-for="qualityData in QUALITY_SECTION_DATA"
      :key="qualityData.title"
      :title="qualityData.title"
      :description="qualityData.description"
      :animated-number="qualityData.animatedNumber"
    />
  </div>
  <SavedCities :saved-cities-list="savedCitiesList" @open-modal="setIsAddCityModalOpen(true)" />
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
import HeroBlock from '@/components/HomeViewComponents/HeroBlock.vue';
import SavedCities from '@/components/HomeViewComponents/SavedCities.vue';
import QualityCard from '@/components/HomeViewComponents/QualityCard.vue';
import TrustedBy from '@/components/HomeViewComponents/TrustedBy.vue';
import type { CityData, CityListDataWithWeather } from '@/interface';
import { get, set, useDebounceFn, useToggle } from '@vueuse/core';
import { fetchCitiesAutoComplete } from '@/api';
import ModalWrapper from '@/atoms/ModalWrapper.vue';
import AddCityModal from '@/components/modals/AddCityModal.vue';
import { QUALITY_SECTION_DATA } from '@/constants';

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
