<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';

dayjs.extend(utcPlugin);
</script>

<template>
  <Navigation />
  <RouterView />
</template>
