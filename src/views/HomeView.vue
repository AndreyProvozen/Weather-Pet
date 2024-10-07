<template>
  <LazyLoadComponent style="min-height: calc(100vh - 60px)" :loader="getLoader('Hero')" />
  <LazyLoadComponent style="min-height: 250px" :loader="getLoader('TrustedBy')" />
  <LazyLoadComponent style="min-height: 750px" :loader="getLoader('Quality')" />
  <LazyLoadComponent style="min-height: 450px" :loader="getLoader('Testimonial')" />
</template>

<script lang="ts" setup>
  import LazyLoadComponent from '@/atoms/LazyLoadComponent.vue';

  const getLoader = (componentName: string) => () => import(`../sections/HomeView/${componentName}Section.vue`);
</script>

<style lang="scss">
  .section-title {
    color: $black;
    margin: 30px 0 15px;
    text-align: center;
  }
</style>
