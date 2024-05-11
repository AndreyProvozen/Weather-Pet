import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import VueSplide from '@splidejs/vue-splide';
import store, { key } from '@/store';

createApp(App).use(store, key).use(router).use(VueSplide).mount('#app');
