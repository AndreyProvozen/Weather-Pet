<template>
  <div class="container">
    <h2 class="section-title">Saved Cities</h2>
    <div class="saved-cities--toolbar">
      <div style="display: flex; gap: 10px">
        <Button variant="filled" :start-button-icon="PlusIcon" @click="commit('setIsAddToSavedCitiesModalOpen', true)">
          Add
        </Button>
        <Button :start-button-icon="MoveIcon" variant="filled">Reorder</Button>
        <Button variant="danger" :start-button-icon="TrashIcon">Remove</Button>
      </div>
      <Input
        :end-input-icon="SearchIcon"
        class="saved-cities--search-input"
        placeholder="Enter the location you're searching for"
        value=""
      />
    </div>
    <div class="saved-cities--city-cards-wrapper">
      <div v-for="city in state.global.savedCitiesList" :key="city.id">
        <CityCard :city-data="city" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button, Input } from '@/atoms';
import CityCard from '@/components/HomeView/CityCard.vue';
import { MoveIcon, TrashIcon, PlusIcon, SearchIcon } from '@/assets/icons';
import { useStore } from '@/store';

const { state, commit } = useStore();
</script>

<style scoped lang="scss">
.saved-cities {
  &--toolbar {
    align-items: center;
    display: flex;
    gap: 40px;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  &--search-input {
    max-width: 500px;
    flex: 1;
    height: 40px;
    width: 100%;

    @media (max-width: $breakpoint-lg) {
      max-width: 100%;
    }
  }

  &--city-cards-wrapper {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
