<template>
  <div class="navigation">
    <h1 class="logo">Weather-Pet</h1>
    <div class="right-navigation">
      <a href="#">Main</a>
      <a href="#">Test</a>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: $color-header-footer-bg;
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
