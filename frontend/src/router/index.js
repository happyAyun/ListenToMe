import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignupPage from '../components/accounts/SignupPage.vue'
import SignupPageForPro from '../components/accounts/SignupPageForPro.vue'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignupPage',
    component: SignupPage,
  },
  {
    path: '/signup/counselor',
    name: 'SignupPageForPro',
    component: SignupPageForPro,
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
