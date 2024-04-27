<template>
  <RouterLink v-bind="$attrs" :to="to"><slot /></RouterLink>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';

interface Props {
  to: string;
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
a {
  color: $turquoise;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: $purple-light;
  }
}
</style>
