<script setup lang="ts">
import CloseIcon from '@/assets/icons/close.svg';
import Button from './Button.vue';
import { useEventListener } from '@vueuse/core';

interface Props {
  isModalOpen: boolean;
}

const emit = defineEmits(['close-modal', 'submit-modal']);
const props = defineProps<Props>();

const handleEscapeKey = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.isModalOpen) closeModal();
};

const handleClickOutside = (event: MouseEvent) => {
  if (props.isModalOpen && !(event.target as HTMLElement).closest('.modal-content')) {
    emit('close-modal');
  }
};

const submitForm = () => emit('submit-modal');
const closeModal = () => emit('close-modal');

useEventListener('keydown', handleEscapeKey);
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-outer">
      <div v-show="isModalOpen" class="modal-wrapper" @click="handleClickOutside">
        <Transition name="modal-inner">
          <form v-if="isModalOpen" action="" class="modal-content" @submit="submitForm" @click.stop>
            <CloseIcon class="close-icon" @click="closeModal" />
            <slot />
            <div class="btn-wrapper">
              <Button type="button" @click="closeModal"> Close </Button>
              <Button variant="filled" type="submit"> Submit </Button>
            </div>
          </form>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.close-icon {
  background-color: $gray;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 12px;
}

.modal-wrapper {
  align-items: center;
  background-color: $dark-overlay;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: $z-40;
}

.btn-wrapper {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 16px;
}

.modal-content {
  background-color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 32px;
  position: relative;
  width: 100%;
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
