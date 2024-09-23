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
  margin-top: 32px;
  padding: 32px;
  background: linear-gradient(45deg, $turquoise 0%, $deep-dark-blue 100%);
  text-align: center;

  &__subtitle {
    margin-top: 4px;
    max-width: 400px;
    margin-inline: auto;
    text-wrap: balance;
  }

  &__form {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    @media (max-width: $breakpoint-xs) {
      flex-direction: column;
      align-items: unset;

      button {
        justify-content: center;
      }
    }
  }
}
</style>
