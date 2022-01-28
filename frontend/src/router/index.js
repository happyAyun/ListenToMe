import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
// related to Counseling
import Counseling from '@/views/Counseling.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // related to Counseling
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
