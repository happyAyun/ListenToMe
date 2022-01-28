import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingupPage from '../views/SignupPage.vue'
// import SignupForClient from '../components/accounts/SignupForClient.vue'
// import SignupForCounselor from '../components/accounts/SignupForCounselor.vue'
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
    name: 'SignupForClient',
    component: SingupPage,
  },
  {
    path: '/signup/counselor',
    name: 'SignupForCounselor',
    component: SingupPage,
  },
  // {
  //   path: '/signup',
  //   name: 'SignupForClient',
  //   component: SignupForClient,
  // },
  // {
  //   path: '/signup/counselor',
  //   name: 'SignupForCounselor',
  //   component: SignupForCounselor,
  // },
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
