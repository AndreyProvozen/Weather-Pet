<template>
  <Splide :options="options" :extensions="extensions">
    <slot />
  </Splide>
</template>

<script setup lang="ts">
import { ComponentConstructor } from '@splidejs/splide';
import { Splide, Options } from '@splidejs/vue-splide';

interface Props {
  options?: Options;
  extensions?: Record<string, ComponentConstructor>;
}

withDefaults(defineProps<Props>(), {
  options: undefined,
  extensions: undefined,
});
</script>
