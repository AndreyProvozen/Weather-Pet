<script setup lang="ts">
import Button from '@/atoms/Button.vue';
import Input from '@/atoms/Input.vue';
import { CityListDataWithWeather } from '@/interface';
import CityCard from './CityCard.vue';
import MoveIcon from '@/assets/icons/move.svg';
import TrashIcon from '@/assets/icons/trash.svg';
import PlusIcon from '@/assets/icons/plus.svg';

interface Props {
  savedCitiesList: CityListDataWithWeather[];
}

defineProps<Props>();
const emit = defineEmits(['open-modal']);

const openAddToSavedCitiesModal = () => emit('open-modal');
</script>

<template>
  <div class="container">
    <h3 style="color: #000; text-align: center; margin-bottom: 5px">Saved Cities</h3>
    <div
      style="
        margin-bottom: 10px;
        display: flex;
        gap: 40px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
      "
    >
      <div style="display: flex; gap: 10px">
        <Button variant="filled" :start-button-icon="PlusIcon" @click="openAddToSavedCitiesModal">
          Add new city
        </Button>
        <Button variant="filled" :start-button-icon="TrashIcon"> Remove city </Button>
        <Button :start-button-icon="MoveIcon" variant="filled"> Reorder city list </Button>
      </div>
      <Input style="max-width: 350px; flex: 1" placeholder="Enter the location you're searching for" value="" />
    </div>

    <div class="city-card-container">
      <div v-for="city in savedCitiesList" :key="city.id">
        <CityCard :city-data="city" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.city-card-container {
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
</style>
