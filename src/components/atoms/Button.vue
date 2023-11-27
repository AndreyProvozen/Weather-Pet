<template>
  <button v-bind="$attrs" :class="variant"><slot /></button>
</template>

<script lang="ts" setup>
interface Props {
  variant: "outlined" | "filled";
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
button {
  font-weight: 500;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  &.outlined {
    border: 2px solid $button-color;
    background: transparent;

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
    color: white;
    border: none;

    &:hover {
      background: $button-color-hover;
    }

    &:active {
      background: $button-color-active;
    }
  }
}
</style>
