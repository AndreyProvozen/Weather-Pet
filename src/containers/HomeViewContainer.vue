<template>
  <HeroSection />
  <QualitySection />
  <TrustedBySection />
  <SavedCitiesSection @open-modal="setIsAddCityModalOpen(true)" />
  <ModalWrapper :is-modal-open="isAddCityModalOpen" @close-modal="setIsAddCityModalOpen(false)">
    <AddCityModal
      :search-cities-list="state.search.searchCitiesList"
      :search-cities-query="state.search.searchQuery"
      :on-input-value-change="onInputValueChange"
    />
  </ModalWrapper>
</template>

<script setup lang="ts">
import { QualitySection, HeroSection, TrustedBySection, SavedCitiesSection } from '@/sections';
import { useDebounceFn, useToggle } from '@vueuse/core';
import { ModalWrapper } from '@/atoms';
import AddCityModal from '@/components/modals/AddCityModal.vue';
import { useStore } from '@/store';

const { dispatch, state, commit } = useStore();
const [isAddCityModalOpen, setIsAddCityModalOpen] = useToggle(false);

const searchCitiesAutoComplete = useDebounceFn(async () => await dispatch('citiesAutoComplete'), 500);

const onInputValueChange = async (value: string) => {
  commit('setSearchQuery', value);

  if (state.search.searchQuery.length > 2) return await searchCitiesAutoComplete();

  commit('setSearchCitiesList', undefined);
};
</script>

<style lang="scss">
.section-title {
  color: $black;
  margin: 30px 0 15px;
  text-align: center;
}
</style>
