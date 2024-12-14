import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
  const isFavoriteModalOpen = ref(false);

  const setIsFavoriteModalOpen = (isOpen: boolean) => {
    isFavoriteModalOpen.value = isOpen;
  };

  return { isFavoriteModalOpen, setIsFavoriteModalOpen };
});
