<template>
  <div>
    <HeroSection />
    <TrustedBySection />
    <QualitySection />
    <TestimonialSection />
    <SubscribeToNewsletterSection />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
  import HeroSection from '@/sections/HomeView/HeroSection.vue';
  import QualitySection from '@/sections/HomeView/QualitySection.vue';
  import SubscribeToNewsletterSection from '@/sections/HomeView/SubscribeToNewsletterSection.vue';
  import TestimonialSection from '@/sections/HomeView/TestimonialSection.vue';
  import TrustedBySection from '@/sections/HomeView/TrustedBySection.vue';
</script>

<style lang="scss">
  .section-title {
    color: $black;
    margin: 30px 0 15px;
    text-align: center;
  }
</style>
