<template>
  <div class="navigation">
    <h1 class="logo">Weather-Pet</h1>
    <div class="right-navigation">
      <Link href="#">Main</Link>
      <Link href="#">Test</Link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Link from "./atoms/Link.vue";
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 20px;
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
