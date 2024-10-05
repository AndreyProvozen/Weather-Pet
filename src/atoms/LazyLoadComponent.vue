<template>
  <div v-bind="$attrs" ref="sectionRef">
    <component :is="asyncComponent" v-if="asyncComponent" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits, defineAsyncComponent, type Component } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

interface EmitProps {
  (event: 'intersect'): void;
}

interface Props {
  loader: () => Promise<Component>;
}

const emit = defineEmits<EmitProps>();
const { loader } = defineProps<Props>();

const sectionRef = ref<HTMLElement | null>(null);
const asyncComponent = ref<Component | null>(null);

useIntersectionObserver(
  sectionRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting && !asyncComponent.value) {
      asyncComponent.value = defineAsyncComponent({
        loader,
        delay: 200,
        timeout: 30000,
      });

      emit('intersect');
    }
  },
  { threshold: 0.1 }
);
</script>
