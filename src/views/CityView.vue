<template>
  <Suspense>
    <template #default>
      <CityViewContent />
    </template>
    <template #fallback>
      <Loader />
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import CityViewContent from '@/components/CityViewComponents.vue';
import Loader from '@/atoms/Loader.vue';
</script>
