<template>
  <ForecastCardWrapper :icon="UVIndexIcon" title="UV INDEX">
    <div class="uv-index-card-content">
      <p class="uv-index-card-content__index">{{ uvIndex.toFixed(1) }}</p>
      <h4 class="uv-index-card-content__label">{{ label }}</h4>
      <div class="uv-index-card-content__scale" />
      <p class="subtitle">{{ recommendations }}</p>
    </div>
  </ForecastCardWrapper>
</template>

<script setup lang="ts">
import { getUVIndexCategory } from '@/utils';
import ForecastCardWrapper from './ForecastCardWrapper.vue';
import { UVIndexIcon } from '@/assets/icons';

interface Props {
  uvIndex: number;
}

const { uvIndex } = defineProps<Props>();
const { label, recommendations } = getUVIndexCategory(uvIndex);
</script>

<style scoped lang="scss">
.uv-index-card-content {
  margin-top: 5px;

  &__index {
    font-size: 30px;
    line-height: 1;
    margin: 0;
  }

  &__label {
    font-weight: 400;
    margin: 5px 0 10px;
  }

  &__scale {
    background: linear-gradient(to right, #3ea72d 0%, #fff300 33%, #f18b00 50%, #e53210 67%, #b567a4 100%);
    border-radius: 30px;
    height: 8px;
  }
}
</style>
