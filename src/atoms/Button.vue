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
    border: 2px solid $button-color;
    color: $button-color;

    &:hover {
      background: $button-color-hover;
      border-color: $button-color-hover;
      color: white;
    }

    &:active {
      background: $button-color-active;
      border-color: $button-color-active;
      color: white;
    }
  }

  &.filled {
    background: $button-color;
    border: none;
    color: white;

    &:hover {
      background: $button-color-hover;
    }

    &:active {
      background: $button-color-active;
    }
  }
}
</style>
