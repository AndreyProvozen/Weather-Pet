<template>
  <div class="container">
    <Input
      class="search-input"
      variant="outlined"
      :value="`${route.params.state}, ${route.params.city}`"
    />
    <img
      class="season-image"
      src="../../assets/images/CityPageView/summer-image.jpg"
      alt="season background"
    />
  </div>
</template>

<script setup lang="ts">
import Input from "../atoms/Input.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style lang="scss" scoped>
.season-image {
  height: 80vh;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.container {
  width: 50%;
}

.search-input {
  margin-bottom: 20px;
}
</style>
