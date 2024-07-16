import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: () => import('../views/AboutView.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_ROUTER_BASE),
  scrollBehavior: () => ({ top: 0 }),
  routes,
})

export default router
