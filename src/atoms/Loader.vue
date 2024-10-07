<template>
  <div class="white-overlay"><div class="spinner" /></div>
</template>

<style lang="scss" scoped>
  .white-overlay {
    align-items: center;
    backdrop-filter: blur(10px);
    background-color: $light-overlay;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .spinner {
    animation: spin 1s linear infinite;
    border: 10px solid $gray;
    border-left-color: $purple;
    border-radius: 50%;
    height: 100px;
    width: 100px;
  }
</style>
