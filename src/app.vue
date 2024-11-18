<template>
  <div>
    <NuxtLayout>
      <Header />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { extend } from 'dayjs';
  import utcPlugin from 'dayjs/plugin/utc';
  import '@splidejs/splide/dist/css/themes/splide-default.min.css';

  extend(utcPlugin);
</script>
