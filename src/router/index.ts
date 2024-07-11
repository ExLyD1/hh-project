import Landing from '@/views/Landing.vue'
import Employer from '@/views/Employer.vue'
import NotFound404 from '@/views/NotFound404.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/Employer',
    name: 'Employer',
    component: Employer,
  },
  {
    path: '/404',
    name: 'Not_Found',
    component: NotFound404,
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
