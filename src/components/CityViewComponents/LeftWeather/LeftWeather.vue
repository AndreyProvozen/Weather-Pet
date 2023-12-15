<template>
  <div class="wrapper">
    <LeftWeatherHeader />
    <LeftWeatherContent
      :current-temperature="currentTemperature"
      :weatherToday="weatherToday"
      :currentVisibility="currentVisibility"
    />
  </div>
</template>

<script setup lang="ts">
import { LeftWeatherProps } from ".";
import LeftWeatherContent from "./LeftWeatherContent.vue";
import LeftWeatherHeader from "./LeftWeatherHeader.vue";

defineProps<LeftWeatherProps>();
</script>

<style scoped>
.wrapper {
  width: 50%;
}
</style>
