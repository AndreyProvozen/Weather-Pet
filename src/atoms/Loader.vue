<template>
  <div class="white-overlay">
    <div class="spinner"></div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.white-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
}

.spinner {
  border: 10px solid $pale-gray;
  border-left-color: $button-color;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
