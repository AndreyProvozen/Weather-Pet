<template>
  <img v-if="!svgId" :v-bind="$attrs" :src="`src/assets/icons/${name}.svg`" :alt="`${name} svg`" />
  <svg v-else v-bind="$attrs" :alt="`${name} svg`">
    <use style="width: 20px; height: 20px" :xlink:href="`src/assets/icons/${name}.svg#${svgId}`" />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  svgId?: string;
}

defineProps<Props>();
</script>
