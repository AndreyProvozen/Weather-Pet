<template>
  <header class="header">
    <h1 class="header--logo">Weather-Pet</h1>
    <div class="header--navigation">
      <Link to="/">Main</Link>
      <Link to="#">Test</Link>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { Link } from '@/atoms';
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  background-color: $black;
  display: flex;
  justify-content: space-between;
  margin-bottom: $HEADER_MARGIN_BOTTOM;
  padding: 10px 15px;
  position: sticky;
  top: 0;
  z-index: $z-30;

  &--logo {
    margin: 0;
  }

  &--navigation {
    align-items: center;
    column-gap: 15px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
