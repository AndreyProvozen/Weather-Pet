<template>
  <div class="overview-card">
    <NuxtIcon :name="icon" filled style="height: 60px; width: 60px" />
    <div class="overview-card__text-wrapper">
      <h5 class="m-0">{{ title }}</h5>
      <p class="overview-card__value">{{ value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    title: string;
    value: string;
    icon: string;
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .overview-card {
    align-items: center;
    background: rgba($color: $dark-blue, $alpha: 80%);
    border-radius: 10px;
    display: flex;
    flex: 1;
    gap: 10px;
    padding: 15px;
    text-align: center;

    &__text-wrapper {
      margin-inline: auto;
    }

    &__value {
      font-size: 28px;
      margin: 5px 0 0 auto;
    }
  }
</style>
