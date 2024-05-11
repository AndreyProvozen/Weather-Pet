<template>
  <HomeViewContainer />
</template>

<script lang="ts" setup>
import HomeViewContainer from '@/containers/HomeViewContainer.vue';
import { onMounted } from 'vue';
import { useStore } from '@/store';

const store = useStore();

onMounted(async () => await store.dispatch('loadSavedCities'));
</script>
