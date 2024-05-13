import { Module } from 'vuex';
import { State } from '..';

export interface ModalModuleState {
  isFavoriteModalOpen: boolean;
}

export const modalModule: Module<ModalModuleState, State> = {
  state: () => ({ searchQuery: '', searchCitiesList: [], isFavoriteModalOpen: false }),
  mutations: {
    setIsFavoriteModalOpen(state, isOpen: boolean) {
      state.isFavoriteModalOpen = isOpen;
    },
  },
};
