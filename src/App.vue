<template>
  <Header />
  <RouterView />
  <LazyLoadComponent
    style="min-height: 190px"
    :loader="() => import('./sections/HomeView/SubscribeToNewsletterSection.vue')"
  />
  <Footer />
</template>

<script setup lang="ts">
import { Footer, Header, LazyLoadComponent } from '@/atoms';
import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc';

dayjs.extend(utcPlugin);
</script>
