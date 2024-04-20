import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import VueSplide from '@splidejs/vue-splide';

createApp(App).use(router).use(VueSplide).mount('#app');
