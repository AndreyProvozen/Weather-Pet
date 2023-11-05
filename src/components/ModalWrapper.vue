<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="isModalOpen" class="modal-wrapper">
        <Transition name="modal-inner">
          <div v-if="isModalOpen" class="modal-content">
            <CloseIcon class="close-icon" @click="$emit('close-modal')" />
            <slot />
            <div class="btn-wrapper">
              <button class="outlined" @click="$emit('close-modal')">
                Close
              </button>
              <button class="filled" @click="$emit('submit-modal')">
                Submit
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import CloseIcon from "../assets/icons/close.svg";

defineEmits(["close-modal", "submit-modal"]);
defineProps({ isModalOpen: { type: Boolean, default: false } });
</script>

<style lang="scss" scoped>
.close-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.modal-wrapper {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: $z-50;
}

.btn-wrapper {
  display: flex;
  gap: 10px;
  margin-top: 16px;
  justify-content: end;
}

.modal-content {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
}

// Transition

.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
