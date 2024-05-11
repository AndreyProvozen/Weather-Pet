import { Store, createStore, useStore as baseUseStore } from 'vuex';
import { globalModule, type GlobalModuleState } from './modules/globalModule';
import { InjectionKey } from 'vue';

export interface State {
  global: GlobalModuleState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore({ modules: { global: globalModule } });

export const useStore = () => baseUseStore(key);
