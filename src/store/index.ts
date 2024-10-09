import { type Store, createStore, useStore as baseUseStore } from 'vuex';
import type { InjectionKey } from 'vue';
import { searchModule, type SearchModuleState } from './modules/searchModule';
import { modalModule, type ModalModuleState } from './modules/modalModule';
import { weatherModule, type WeatherModuleState } from './modules/weatherModule';

export interface State {
  search: SearchModuleState;
  modal: ModalModuleState;
  weather: WeatherModuleState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore({
  modules: { search: searchModule, modal: modalModule, weather: weatherModule },
});

export const useStore = () => baseUseStore(key);
