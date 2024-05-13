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

<style lang="scss">
.section-title {
  color: $black;
  margin: 30px 0 15px;
  text-align: center;
}
</style>
