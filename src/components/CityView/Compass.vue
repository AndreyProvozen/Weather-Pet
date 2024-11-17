<template>
  <div class="compass">
    <NuxtIcon filled name="compass-arrow" :style="{ transform: `rotate(${directionInDegrees}deg)`, zIndex: 10 }" />
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
    align-items: center;
    background-color: #8a9aa8;
    border: 2px solid $white;
    border-radius: 50%;
    display: flex;
    height: 130px;
    justify-content: center;
    position: relative;
    width: 130px;

    &::after {
      border: 4px dotted $white;
      border-radius: 50%;
      content: '';
      height: 70px;
      position: absolute;
      width: 70px;
    }

    &::before {
      border: 2px solid $white;
      border-radius: 50%;
      content: '';
      height: 105px;
      position: absolute;
      width: 105px;
    }

    b {
      background-color: #8a9aa8;
      color: $white;
      font-size: 18px;
      line-height: 1;
      position: absolute;
    }

    .north {
      padding-inline: 5px;
      top: 3px;
    }

    .south {
      bottom: 3px;
      padding-inline: 5px;
    }

    .west {
      left: 3px;
      padding: 5px 0;
    }

    .east {
      padding: 5px 0;
      right: 7px;
    }
  }
</style>
