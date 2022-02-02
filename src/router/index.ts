import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Loan from '@/views/Loan.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loan/:id',
    name: 'Loan',
    component: Loan
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
