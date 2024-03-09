<script lang="ts" setup>
import Link from '@/atoms/Link.vue';
</script>

<template>
  <div class="navigation">
    <h1 class="logo">Weather-Pet</h1>
    <div class="right-navigation">
      <Link to="/">Main</Link>
      <Link to="#">Test</Link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: $HEADER_MARGIN_BOTTOM;
  background-color: $deep-blue;
  justify-content: space-between;
}

.logo {
  margin: 0;
}

.right-navigation {
  display: flex;
  align-items: center;
  column-gap: 15px;
  justify-content: flex-end;
}
</style>
