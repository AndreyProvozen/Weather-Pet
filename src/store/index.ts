import { Store, createStore, useStore as baseUseStore } from 'vuex';
import { globalModule, type GlobalModuleState } from './modules/globalModule';
import { InjectionKey } from 'vue';
import { searchModule, type SearchModuleState } from './modules/searchModule';
import { modalModule, type ModalModuleState } from './modules/modalModule';

export interface State {
  global: GlobalModuleState;
  search: SearchModuleState;
  modal: ModalModuleState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore({ modules: { global: globalModule, search: searchModule, modal: modalModule } });

export const useStore = () => baseUseStore(key);
