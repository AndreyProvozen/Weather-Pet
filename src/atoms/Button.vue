<script lang="ts" setup>
interface Props {
  variant?: 'outlined' | 'filled';
  startButtonIcon?: any;
}

withDefaults(defineProps<Props>(), { variant: 'outlined', startButtonIcon: undefined });
</script>

<template>
  <button v-bind="$attrs" :class="variant"><component :is="startButtonIcon" v-if="startButtonIcon" /><slot /></button>
</template>

<style lang="scss" scoped>
button {
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  font-size: 18px;
  font-weight: 500;
  gap: 5px;
  min-height: 40px;
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
