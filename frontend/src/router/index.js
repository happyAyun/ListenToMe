import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// routes related to Counseling Service
import Counseling from '@/views/Counseling.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // routes related to Counseling Service
  {
    path: '/counseling',
    name: 'Counseling',
    component: Counseling
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
