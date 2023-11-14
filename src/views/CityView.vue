<template>
  <div class="body">
    <Suspense>
      <template #default> <CityViewTest /></template>
      <template #fallback><p>Loading</p></template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import CityViewTest from "../components/CityViewTest.vue";
</script>

<style scoped></style>
