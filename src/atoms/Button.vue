<script lang="ts" setup>
interface Props {
  variant?: 'outlined' | 'filled';
}

withDefaults(defineProps<Props>(), { variant: 'outlined' });
</script>

<template>
  <button v-bind="$attrs" :class="variant"><slot /></button>
</template>

<style lang="scss" scoped>
button {
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  transition: all 0.3s ease;

  &.outlined {
    background: transparent;
    border: 2px solid $purple;
    color: $purple;

    &:hover {
      background: $purple-dark;
      border-color: $purple-dark;
      color: white;
    }

    &:active {
      background: $purple-light;
      border-color: $purple-light;
      color: white;
    }
  }

  &.filled {
    background: $purple;
    border: none;
    color: white;

    &:hover {
      background: $purple-dark;
    }

    &:active {
      background: $purple-light;
    }
  }
}
</style>
