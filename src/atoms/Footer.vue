<template>
  <footer v-bind="$attrs" class="footer">
    <div class="container footer__content">
      <div class="footer__socials-wrapper">
        <Link to="/" style="color: #fff" aria-label="Go to homepage">
          <h2 style="margin: 0 0 10px">Weather-Pet</h2>
        </Link>
        <div style="display: flex; gap: 13px">
          <NuxtIcon v-for="{ type } in FOOTER_SOCIAL_LINKS" :key="type" class="footer__social-icon" :name="type" />
        </div>
      </div>
      <div v-for="{ name, links } in FOOTER_COLUMN_LINKS" :key="name" aria-label="Footer navigation">
        <h4 class="footer__section-title">{{ name }}</h4>
        <div v-for="{ href = '', title } in links" :key="title">
          <Link :to="href">{{ title }}</Link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { readonly } from 'vue';
  import Link from './Link.vue';

  const FOOTER_COLUMN_LINKS = readonly([
    {
      name: 'GETTING STARTED',
      links: [
        { title: 'Get in touch', href: '#' },
        { title: 'Help Centre', href: '#' },
        { title: 'Blog', href: '#' },
        { title: 'Help Centre', href: '#' },
      ],
    },
    {
      name: 'Legal',
      links: [
        { title: 'Cookie Policy', href: '#' },
        { title: 'Privacy Policy', href: '#' },
        { title: 'Terms & Conditions', href: '#' },
        { title: 'Cookie Settings', type: 'cookie' },
      ],
    },
    {
      name: 'CONTACTS',
      links: [
        { title: '+1-825-888-0000', type: 'phone' },
        { title: 'testemail@gmail.com', type: 'email' },
      ],
    },
  ]);

  const FOOTER_SOCIAL_LINKS = readonly([
    { href: 'https://twitter.com', type: 'twitter' },
    { href: 'https://www.facebook.com', type: 'facebook' },
    { href: 'https://www.instagram.com', type: 'instagram' },
    { href: 'https://www.linkedin.com', type: 'linkedin' },
  ]);
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
      border-radius: 10%;
      color: $turquoise;
      cursor: pointer;
      height: 40px;
      padding: 8px;
      transition: all 0.2s ease;
      width: 40px;

      &:hover {
        background: $purple;
        color: $white;
      }
    }
  }
</style>
