<template>
  <div>
    <Input
      class="search-input"
      variant="outlined"
      :value="`${route.params.state}, ${route.params.city}`"
    />
    <img
      class="season-image"
      src="../../assets/images/autumn-cityPage-image.jpg"
      alt="season background"
    />
  </div>
</template>

<script setup lang="ts">
import Input from "../atoms/Input.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped>
.season-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
.search-input {
  margin-bottom: 20px;
}
</style>
