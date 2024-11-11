<template>
  <NuxtLink v-bind="$attrs" :to="to"><slot /></NuxtLink>
</template>

<script lang="ts" setup>
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
