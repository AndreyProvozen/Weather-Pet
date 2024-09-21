<template>
  <img :v-bind="$attrs" :src="`src/assets/icons/${name}.svg`" :alt="`${name} svg`" />
</template>

<script setup lang="ts">
interface Props {
  name: string;
}

defineProps<Props>();
</script>
