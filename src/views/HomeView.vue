<template>
  <HeroSection />
  <TrustedBySection />
  <QualitySection />
  <TestimonialSection />
  <SubscribeToNewsletter />
</template>

<script lang="ts" setup>
import { QualitySection, HeroSection, TrustedBySection, TestimonialSection, SubscribeToNewsletter } from '@/sections';
</script>

<style lang="scss">
.section-title {
  color: $black;
  margin: 30px 0 15px;
  text-align: center;
}
</style>
