import { Store, createStore, useStore as baseUseStore } from 'vuex';
import { globalModule, type GlobalModuleState } from './modules/globalModule';
import { InjectionKey } from 'vue';
import { searchModule, type SearchModuleState } from './modules/searchModule';

export interface State {
  global: GlobalModuleState;
  search: SearchModuleState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore({ modules: { global: globalModule, search: searchModule } });

export const useStore = () => baseUseStore(key);
