<template>
  <h2 class="section-title">Our Quality</h2>
  <div class="container quality-card-wrapper">
    <QualityCard
      v-for="{ animatedNumber, description, title } in QUALITY_SECTION_DATA"
      :key="title"
      :title="title"
      :description="description"
      :animated-number="animatedNumber"
    />
  </div>
</template>

<script setup lang="ts">
import QualityCard from '@/components/HomeView/QualityCard.vue';
import { QUALITY_SECTION_DATA } from '@/constants';
</script>

<style scoped lang="scss">
.quality-card-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}
</style>
