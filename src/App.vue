<template>
  <Header />
  <RouterView />
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';

dayjs.extend(utcPlugin);
</script>
