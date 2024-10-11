<template>
  <div class="compass">
    <div class="compass__arrow" :style="{ transform: `rotate(${directionInDegrees}deg)` }" />
    <b class="north">N</b>
    <b class="south">S</b>
    <b class="west">W</b>
    <b class="east">E</b>
  </div>
</template>

<script setup lang="ts">
  interface Props {
    directionInDegrees: number;
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .compass {
    border: 2px solid white;
    border-radius: 50%;
    width: 170px;
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &__arrow {
      width: 3px;
      height: 30px;
      background: white;
    }

    b {
      position: absolute;
      color: white;
    }

    .north {
      top: 5px;
    }

    .south {
      bottom: 5px;
    }

    .west {
      left: 10px;
    }

    .east {
      right: 10px;
    }
  }
</style>
