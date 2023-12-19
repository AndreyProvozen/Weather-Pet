<template>
  <div>{{ cityData.city }}</div>
</template>

<script setup lang="ts">
import { CityListItemData } from '@/interface';

interface Props {
  cityData: CityListItemData;
}

const props = defineProps<Props>();
console.log(props.cityData);
</script>

<style scoped></style>
