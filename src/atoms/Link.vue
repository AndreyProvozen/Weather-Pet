<template>
  <a v-bind="$attrs"><slot /></a>
</template>

<script lang="ts" setup></script>

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
