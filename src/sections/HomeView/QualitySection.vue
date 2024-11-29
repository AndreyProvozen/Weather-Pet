<template>
  <section>
    <h2 class="section-title">Our Quality</h2>
    <div class="container quality-section">
      <QualityCard v-for="cardData in QUALITY_SECTION_DATA" :key="cardData.title" v-bind="cardData" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import { readonly } from 'vue';

  const QUALITY_SECTION_DATA = readonly([
    {
      title: 'Accuracy',
      description:
        'Our accuracy is achieved through a meticulous process that leverages the latest data and advanced algorithms, ensuring precision in every detail.',
      animatedNumber: { from: 0, to: 95 },
    },
    {
      title: 'Coverage',
      description:
        'Our coverage spans the globe, providing comprehensive updates from every corner of the world, keeping you well-informed and up-to-date with the latest developments.',
      animatedNumber: { from: 0, to: 100 },
    },
    {
      title: 'Timeliness',
      description:
        'We pride ourselves on delivering prompt updates, keeping you ahead of the curve and ensuring you have the information you need when you need it most.',
      animatedNumber: { from: 0, to: 100 },
    },
    {
      title: 'Reliability',
      description:
        'Our reliability is unmatched, providing consistent forecasts that you can trust to make informed decisions with confidence.',
      animatedNumber: { from: 0, to: 98 },
    },
    {
      title: 'Efficiency',
      description:
        'We prioritize efficiency in every aspect of our operations, streamlining processes to deliver optimal performance and value to our users.',
      animatedNumber: { from: 0, to: 100 },
    },
  ]);
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
