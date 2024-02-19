<template>
  <div :class="['input-container', variant, containerClass]">
    <component :is="startInputIcon" v-if="startInputIcon" class="start-input-icon" />
    <input
      :class="{ 'has-start-icon': startInputIcon }"
      :value="value"
      v-bind="$attrs"
      @input="$emit('onChange', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  value: string;
  variant?: 'filled' | 'outlined' | 'standard';
  containerClass?: string;
  startInputIcon?: any;
}

withDefaults(defineProps<Props>(), {
  variant: 'outlined',
  containerClass: '',
  startInputIcon: undefined,
});

defineEmits(['onChange']);
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    border-color: darken($pale-gray, 10%);
  }

  &:focus-within {
    border-color: $button-color;
  }

  &-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
    color: $pale-gray;
  }
}

.start-input-icon {
  position: absolute;
  top: 50%;
  margin-left: 5px;
  transform: translateY(-50%);
}

input {
  font-size: 16px;
  padding: 8px 16px;
  width: 100%;
  border: none;
  outline: none;

  &.has-start-icon {
    padding-left: 32px;
  }
}

.outlined {
  border: 2px solid $pale-gray;
  border-radius: 4px;
}

.standard {
  border-bottom: 2px solid $pale-gray;
}

.filled {
  border-bottom: 2px solid $pale-gray;
  border-radius: 4px;
  background: rgba($color: #fff, $alpha: 20%);
}
</style>
