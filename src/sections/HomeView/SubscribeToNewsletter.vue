<template>
  <div class="subscribe-to-newsletter">
    <h3 class="m-0">Join our newsletter</h3>
    <p class="m-0 subscribe-to-newsletter__subtitle">
      Subscribe to our newsletter and never miss out on important weather updates!
    </p>
    <form class="subscribe-to-newsletter__form">
      <Input value="" type="email" placeholder="Enter your email" />
      <Button variant="filled" type="submit">Subscribe</Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import Button from '@/atoms/Button.vue';
import Input from '@/atoms/Input.vue';
</script>

<style scoped lang="scss">
.subscribe-to-newsletter {
  background: linear-gradient(45deg, $turquoise 0%, $deep-dark-blue 100%);
  margin-top: 32px;
  padding: 32px;
  text-align: center;

  &__subtitle {
    margin-inline: auto;
    margin-top: 4px;
    max-width: 400px;
    text-wrap: balance;
  }

  &__form {
    align-items: center;
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;

    @media (max-width: $breakpoint-xs) {
      align-items: unset;
      flex-direction: column;

      button {
        justify-content: center;
      }
    }
  }
}
</style>
