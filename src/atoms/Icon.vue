<template>
  <img :class="classes" :src="`src/assets/icons/${name}.svg`" :alt="`${name} svg`" :style="style" />
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue';

interface Props {
  name: string;
  classes?: string;
  style?: StyleValue;
}

defineProps<Props>();
</script>
