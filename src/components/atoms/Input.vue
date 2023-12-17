<template>
  <div :class="`input-container ${variant} ${containerClass}`">
    <component
      :is="startInputIcon"
      class="start-input-icon"
      v-if="startInputIcon"
    />
    <input
      @input="$emit('onChange', ($event.target as HTMLInputElement).value)"
      :value="value"
      :class="`${startInputIcon ? 'has-start-icon' : ''}`"
      v-bind="$attrs"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  variant: "filled" | "outlined" | "standard";
  value: string;
  containerClass?: string;
  startInputIcon?: any;
}

defineProps<Props>();
defineEmits(["onChange"]);
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    border-color: darken($color: $pale-gray, $amount: 10%);
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
  box-sizing: border-box;
  width: 100%;
  border: none;
  outline: 0;

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
  background: rgba($color: #fff, $alpha: 0.2);
}
</style>
