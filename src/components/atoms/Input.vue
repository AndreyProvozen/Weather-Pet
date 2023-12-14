<template>
  <div :class="`input-container ${variant} ${containerClass}`">
    <input
      @input="$emit('onChange', ($event.target as HTMLInputElement).value)"
      :value="value"
      v-bind="$attrs"
    />
  </div>
</template>

<script lang="ts" setup>
interface Props {
  variant: "filled" | "outlined" | "standard";
  value: string;
  containerClass?: string;
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

input {
  font-size: 16px;
  padding: 8px 16px;
  box-sizing: border-box;
  width: 100%;
  border: none;
  outline: 0;
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
