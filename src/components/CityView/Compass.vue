<template>
  <div class="compass">
    <CompassArrowIcon :style="{ transform: `rotate(${directionInDegrees}deg)`, zIndex: 10 }" />
    <b class="north">N</b>
    <b class="south">S</b>
    <b class="west">W</b>
    <b class="east">E</b>
  </div>
</template>

<script setup lang="ts">
  import { CompassArrowIcon } from '@/assets/icons';

  interface Props {
    directionInDegrees: number;
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .compass {
    border: 2px solid $white;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: #8a9aa8;

    &::after {
      content: '';
      position: absolute;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      border: 4px dotted $white;
    }

    &::before {
      content: '';
      position: absolute;
      width: 105px;
      height: 105px;
      border-radius: 50%;
      border: 2px solid $white;
    }

    b {
      color: $white;
      background-color: #8a9aa8;
      position: absolute;
      line-height: 1;
      font-size: 18px;
    }

    .north {
      top: 3px;
      padding-inline: 5px;
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
      right: 7px;
      padding: 5px 0;
    }
  }
</style>
