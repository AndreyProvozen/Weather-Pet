<template>
  <footer class="footer">
    <div class="container footer--content">
      <div style="display: flex; flex-direction: column">
        <h2 style="margin: 0 0 10px 0">Weather-Pet</h2>
        <div style="display: flex; gap: 13px; fill: blue">
          <Icon v-for="social in socialsList" :key="social" classes="footer--social-icon" :name="social" />
        </div>
      </div>
      <div style="display: flex; gap: 70px">
        <div v-for="{ name, links } in FOOTER_COLUMN_LINKS" :key="name">
          <h4 style="margin: 0 0 20px 0">{{ name }}</h4>
          <div v-for="linkData in links" :key="linkData.title">
            <Link :to="linkData.href || ''">{{ linkData.title }}</Link>
          </div>
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

  &--content {
    padding: 60px 20px;
    display: flex;
    justify-content: space-between;
  }

  &--social-icon {
    background: $white;

    padding: 8px;
    border-radius: 10%;
  }
}
</style>
