<template>
  <header class="header">
    <h1 class="m-0">Weather-Pet</h1>
    <div class="header--navigation">
      <Link to="/">Main</Link>
      <Link to="#">Test</Link>
    </div>
    <MenuIcon class="header--burger" />
  </header>
</template>

<script lang="ts" setup>
import { Link } from '@/atoms';
import MenuIcon from '@/assets/icons/menu.svg';
</script>

<style lang="scss" scoped>
.header {
  align-items: center;
  background-color: $black;
  display: flex;
  justify-content: space-between;
  padding: 10px $SIDE_SPACING;
  position: sticky;
  top: 0;
  z-index: $z-30;

  &--navigation {
    align-items: center;
    column-gap: 15px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: $breakpoint-md) {
      display: none;
    }
  }

  &--burger {
    display: none;

    @media (max-width: $breakpoint-md) {
      display: block;
    }
  }
}
</style>
