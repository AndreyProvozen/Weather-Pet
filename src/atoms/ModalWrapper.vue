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
  position: absolute;
  border-radius: 50%;
  background-color: $pale-gray;
  top: 12px;
  right: 12px;
  cursor: pointer;
}

.modal-wrapper {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $semi-transparent-black;
  z-index: $z-50;
}

.btn-wrapper {
  display: flex;
  gap: 10px;
  margin-top: 16px;
  justify-content: flex-end;
}

.modal-content {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  padding: 32px;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
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
