<template>
  <div :class="['input-container', variant, containerClass]">
    <component :is="startInputIcon" v-if="startInputIcon" class="input-icon start" />
    <input
      :class="{ 'has-start-icon': startInputIcon, 'has-end-icon': endInputIcon }"
      :value="value"
      v-bind="$attrs"
      @input="$emit('on-change', ($event.target as HTMLInputElement).value)"
    />
    <component :is="endInputIcon" v-if="endInputIcon" class="input-icon end" />
  </div>
</template>

<script lang="ts" setup>
  interface Props {
    value?: string;
    variant?: 'filled' | 'outlined' | 'standard';
    containerClass?: string;
    startInputIcon?: any;
    endInputIcon?: any;
  }

  withDefaults(defineProps<Props>(), {
    variant: 'outlined',
    containerClass: '',
    value: '',
    startInputIcon: undefined,
    endInputIcon: undefined,
  });

  defineEmits(['on-change']);
</script>

<style lang="scss" scoped>
  .input-container {
    position: relative;
    transition: all 0.2s ease;

    &:hover {
      border-color: $gray-dark;
    }

    &:focus-within {
      border-color: $purple;
    }

    &-icon {
      color: $gray;
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .input-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.start {
      margin-left: 5px;
    }

    &.end {
      margin-right: 5px;
      right: 0;
    }
  }

  input {
    border: none;
    font-size: 16px;
    height: 100%;
    outline: none;
    padding: 8px 16px;
    width: 100%;

    &.has-start-icon {
      padding-left: 32px;
    }

    &.has-end-icon {
      padding-right: 32px;
    }
  }

  .outlined {
    border: 2px solid $gray;
    border-radius: 4px;
  }

  .standard {
    border-bottom: 2px solid $gray;
  }

  .filled {
    background: rgba($color: $white, $alpha: 20%);
    border-bottom: 2px solid $gray;
    border-radius: 4px;
  }
</style>
