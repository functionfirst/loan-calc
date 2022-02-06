import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Loan from '@/views/Loan.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    alias: '/loan',
    component: Home
  },
  {
    path: '/loan/:id',
    name: 'Loan',
    component: Loan
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
