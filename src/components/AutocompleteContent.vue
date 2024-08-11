<template>
  <div v-if="list.length === 0" class="autocomplete__empty-state">
    <b style="font-size: 24px">We’re sorry we couldn’t find a place with that name 🤷</b>
    <p class="mb-0">Please double check the spelling and try again</p>
  </div>
  <li
    v-for="cityData in list"
    v-else
    :key="cityData.id"
    class="autocomplete__item"
    @click="$emit('on-click', cityData)"
  >
    {{ cityData.place_name }}
  </li>
</template>

<script setup lang="ts">
import { CityData } from '@/interface';

interface Props {
  list: CityData[];
}

defineProps<Props>();
defineEmits(['on-click']);
</script>

<style scoped lang="scss">
.autocomplete {
  &__empty-state {
    margin: 40px auto;
    text-align: center;
    max-width: 400px;
  }

  &__item {
    border-radius: 4px;
    cursor: pointer;
    padding: 8px;

    &:hover {
      background: rgba($color: $purple, $alpha: 30%);
    }
  }
}
</style>
