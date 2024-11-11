<template>
  <div v-bind="$attrs" class="forecast-card-wrapper">
    <div class="forecast-card-wrapper__title">
      <NuxtIcon :name="icon" filled style="height: 20px; width: 20px" />
      <h4 class="m-0">{{ title }}</h4>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
  interface Props {
    icon: string;
    title: string;
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .forecast-card-wrapper {
    background: rgba($color: $dark-blue, $alpha: 60%);
    border-radius: 10px;
    padding: 16px;

    &__title {
      align-items: center;
      border-bottom: 2px solid;
      display: flex;
      gap: 5px;
      margin-bottom: 10px;
      padding-bottom: 10px;
    }
  }
</style>
