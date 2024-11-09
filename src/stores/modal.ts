import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
  const isFavoriteModalOpen = ref(false);

  const setIsFavoriteModalOpen = (isOpen: boolean) => {
    isFavoriteModalOpen.value = isOpen;
  };

  return { isFavoriteModalOpen, setIsFavoriteModalOpen };
});
