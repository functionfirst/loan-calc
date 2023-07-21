import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoanView from '@/views/LoanView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    alias: '/loan',
    component: HomeView
  },
  {
    path: '/loan/:id',
    name: 'Loan',
    component: LoanView
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
