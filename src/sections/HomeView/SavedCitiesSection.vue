<template>
  <div class="container">
    <h2 class="section-title">Saved Cities</h2>
    <div class="saved-cities--toolbar">
      <div style="display: flex; gap: 10px">
        <Button variant="filled" :start-button-icon="PlusIcon" @click="commit('setIsFavoriteModalOpen', true)">
          Add new city
        </Button>
        <Button variant="filled" :start-button-icon="TrashIcon"> Remove city </Button>
        <Button :start-button-icon="MoveIcon" variant="filled"> Reorder city list </Button>
      </div>
      <Input
        style="flex: 1; max-width: 350px"
        :end-input-icon="SearchIcon"
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
import MoveIcon from '@/assets/icons/move.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import PlusIcon from '@/assets/icons/plus.svg';
import SearchIcon from '@/assets/icons/search.svg';
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
