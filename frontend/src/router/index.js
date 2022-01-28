import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingupPage from '../views/SignupPage.vue'
import CounselorMain from '../views/Counselor/CounselorMain.vue'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counselor',
    name: 'CounselorMain',
    component: CounselorMain
  },
  {
    path: '/signup',
    name: 'SignupForClient',
    component: SingupPage,
  },
  {
    path: '/signup/counselor',
    name: 'SignupForCounselor',
    component: SingupPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
