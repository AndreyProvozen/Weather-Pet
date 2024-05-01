<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script setup lang="ts">
import { Footer, Header } from '@/atoms';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';

dayjs.extend(utcPlugin);
</script>
