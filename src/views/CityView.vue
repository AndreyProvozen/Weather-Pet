<template>
  <div>
    <Suspense>
      <template #default> <CityViewContent /></template>
      <template #fallback><p>Loading</p></template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import CityViewContent from "../components/CityViewContent.vue";
</script>

<style scoped></style>
