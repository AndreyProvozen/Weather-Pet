import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'homeView', component: () => import('../views/HomeView.vue') },
  { path: '/weather/:state/:city', name: 'cityView', component: () => import('../views/CityView.vue') },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
