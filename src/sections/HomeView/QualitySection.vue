<template>
  <section>
    <h2 class="section-title">Our Quality</h2>
    <div class="container quality-section">
      <QualityCard v-for="cardData in QUALITY_SECTION_DATA" :key="cardData.title" v-bind="cardData" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { QualityCard } from '@/components';
  import { QUALITY_SECTION_DATA } from '@/constants';
</script>

<style scoped lang="scss">
  .quality-section {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;

    @media (max-width: $breakpoint-md) {
      gap: 16px;
    }
  }
</style>
