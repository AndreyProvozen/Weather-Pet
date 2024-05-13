<template>
  <HeroSection />
  <QualitySection />
  <TrustedBySection />
  <SavedCitiesSection />
  <FavoriteModal />
</template>

<script lang="ts" setup>
import { QualitySection, HeroSection, TrustedBySection, SavedCitiesSection } from '@/sections';
import FavoriteModal from '@/components/modals/FavoriteModal.vue';
import { onMounted } from 'vue';
import { useStore } from '@/store';

const { dispatch } = useStore();

onMounted(async () => await dispatch('loadSavedCities'));
</script>
