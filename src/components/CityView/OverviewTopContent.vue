<template>
  <div class="overview-top-content">
    <p class="overview-top-content__temperature">{{ temperatureNow }}</p>
    <p class="overview-top-content__description capitalize-first-letter">
      {{ weatherDescription }}
    </p>
    <p class="m-0 capitalize-first-letter" style="text-wrap: balance">
      The forecast for today anticipates
      {{ weatherDescription }}, with temperatures expected to vary between a low of {{ temperatureMin }} and a high of
      {{ temperatureMax }}.
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  temperatureNow: string;
  weatherDescription: string;
  temperatureMax: string;
  temperatureMin: string;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.overview-top-content {
  max-width: 600px;
  margin-inline: auto;
  text-align: center;
  z-index: 1;

  &__temperature {
    font-size: 100px;
    margin: 0;
    line-height: 120px;
  }

  &__description {
    font-size: 30px;
    line-height: 40px;
    margin: 0;
  }
}
</style>
