<template>
  <Suspense>
    <template #default>
      <CityViewContainer />
    </template>
    <template #fallback>
      <Loader />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import CityViewContainer from '@/containers/CityViewContainer.vue';
import Loader from '@/atoms/Loader.vue';
</script>
