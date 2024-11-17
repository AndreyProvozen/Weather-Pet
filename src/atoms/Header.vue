<template>
  <header class="header">
    <Link to="/" style="color: #fff" aria-label="Go to homepage">
      <h1 class="m-0">Weather-Pet</h1>
    </Link>
    <div class="header__navigation" aria-label="Main navigation">
      <Link to="/">Home</Link>
      <Link to="/">Search</Link>
    </div>
    <NuxtIcon name="menu" aria-label="Open navigation menu" class="header__burger" />
  </header>
</template>

<script lang="ts" setup>
  import Link from './Link.vue';
</script>

<style lang="scss" scoped>
  .header {
    align-items: center;
    background-color: $black;
    display: flex;
    height: 60px;
    justify-content: space-between;
    padding: 10px $SIDE_SPACING;
    position: sticky;
    top: 0;
    z-index: $z-30;

    &__navigation {
      align-items: center;
      column-gap: 15px;
      display: flex;
      justify-content: flex-end;

      @media (max-width: $breakpoint-md) {
        display: none;
      }
    }

    &__burger {
      display: none;

      @media (max-width: $breakpoint-md) {
        display: block;
        height: 36px;
        width: 36px;
      }
    }
  }
</style>
