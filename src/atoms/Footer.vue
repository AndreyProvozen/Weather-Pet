<template>
  <footer class="footer">
    <div class="container footer--content">
      <div class="footer--socials-wrapper">
        <h2 style="margin: 0 0 10px 0">Weather-Pet</h2>
        <div style="display: flex; gap: 13px">
          <Icon v-for="social in socialsList" :key="social" classes="footer--social-icon" :name="social" />
        </div>
      </div>
      <div v-for="{ name, links } in FOOTER_COLUMN_LINKS" :key="name">
        <h4 style="margin: 0 0 20px 0">{{ name }}</h4>
        <div v-for="{ href = '', title } in links" :key="title">
          <Link :to="href">{{ title }}</Link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon, Link } from '@/atoms';
import { FOOTER_COLUMN_LINKS } from '@/constants';

const socialsList = ['facebook', 'linkedin', 'twitter', 'instagram'];
</script>

<style scoped lang="scss">
.footer {
  background-color: $black;
  margin-top: 30px;

  &--content {
    padding: 60px 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 70px;

    @media (max-width: $breakpoint-lg) {
      & > div {
        max-width: 210px;
        width: 100%;
      }
    }

    @media (max-width: $breakpoint-sm) {
      gap: 35px;
    }
  }

  &--socials-wrapper {
    display: flex;
    flex-direction: column;
    margin-right: auto;

    @media (max-width: $breakpoint-lg) {
      margin-right: 0;
    }
  }

  &--social-icon {
    background: $white;
    padding: 8px;
    border-radius: 10%;
  }
}
</style>
