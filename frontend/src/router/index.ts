// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProducoesView from '../views/ProducoesView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/producoes', component: ProducoesView },
]

const router = createRouter({
  history: createWebHistory('/portifolioGabrielHenrique/'),
  routes
})

export default router