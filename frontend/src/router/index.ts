// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProducoesView from '../views/ProducoesView.vue'

const routes = [
  {
    path: '/portifolioGabrielHenrique/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/portifolioGabrielHenrique/producoes',
    name: 'producoes',
    component: ProducoesView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router