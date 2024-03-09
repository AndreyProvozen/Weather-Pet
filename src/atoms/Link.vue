<script lang="ts" setup>
import { RouterLink } from 'vue-router';

interface Props {
  to: string;
}

defineProps<Props>();
</script>

<template>
  <RouterLink v-bind="$attrs" :to="to"><slot /></RouterLink>
</template>

<style lang="scss" scoped>
a {
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease;
  text-decoration: none;
  color: $link-color;

  &:hover {
    color: $button-color-active;
  }
}
</style>
