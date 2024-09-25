<template>
  <footer class="footer">
    <div class="container footer__content">
      <div class="footer__socials-wrapper">
        <h2 style="margin: 0 0 10px">Weather-Pet</h2>
        <div style="display: flex; gap: 13px">
          <Icon
            v-for="social in socialsList"
            :key="social"
            viewBox="0 0 24 24"
            :svg-id="social"
            class="footer__social-icon"
            :name="social"
          />
        </div>
      </div>
      <div v-for="{ name, links } in FOOTER_COLUMN_LINKS" :key="name">
        <h4 class="footer__section-title">{{ name }}</h4>
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

  &__content {
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
    padding: 60px 20px;

    @media (max-width: $breakpoint-lg) {
      & > div {
        max-width: 210px;
        width: 100%;
      }
    }

    @media (max-width: $breakpoint-sm) {
      gap: 24px;
    }
  }

  &__section-title {
    margin: 0 0 20px;

    @media (max-width: $breakpoint-md) {
      margin: 0 0 8px;
    }
  }

  &__socials-wrapper {
    display: flex;
    flex-direction: column;
    margin-right: auto;

    @media (max-width: $breakpoint-lg) {
      margin-right: 0;
    }
  }

  &__social-icon {
    background: $white;
    cursor: pointer;
    color: $turquoise;
    border-radius: 10%;
    padding: 8px;
    transition: all 0.2s ease;

    &:hover {
      background: $purple;
      color: $white;
    }
  }
}
</style>
