<template>
  <div>
    <NuxtLayout>
      <Header />
      <NuxtPage />
      <Footer />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { extend } from 'dayjs';
  import utcPlugin from 'dayjs/plugin/utc';
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';
  import { Footer, Header } from './atoms';

  extend(utcPlugin);
</script>
