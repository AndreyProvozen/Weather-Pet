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
  align-items: center;
  background-color: $deep-blue;
  display: flex;
  justify-content: space-between;
  margin-bottom: $HEADER_MARGIN_BOTTOM;
  padding: 10px 15px;
}

.logo {
  margin: 0;
}

.right-navigation {
  align-items: center;
  column-gap: 15px;
  display: flex;
  justify-content: flex-end;
}
</style>
