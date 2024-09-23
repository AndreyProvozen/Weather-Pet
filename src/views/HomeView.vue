<template>
  <HeroSection />
  <TrustedBySection />
  <QualitySection />
  <!-- <SavedCitiesSection /> -->
  <TestimonialSection />
  <SubscribeToNewsletter />
  <AddToSavedCitiesModal />
</template>

<script lang="ts" setup>
import { QualitySection, HeroSection, TrustedBySection } from '@/sections';
import AddToSavedCitiesModal from '@/components/modals/AddToSavedCitiesModal.vue';
import SubscribeToNewsletter from '@/sections/HomeView/SubscribeToNewsletter.vue';
import { onMounted } from 'vue';
import { useStore } from '@/store';
import TestimonialSection from '@/sections/HomeView/TestimonialSection.vue';

const { dispatch } = useStore();

onMounted(async () => await dispatch('loadSavedCities'));
</script>

<style lang="scss">
.section-title {
  color: $black;
  margin: 30px 0 15px;
  text-align: center;
}
</style>
