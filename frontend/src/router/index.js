import Vue from 'vue'
import VueRouter from 'vue-router'

// accounts
import Signup from '@/views/accounts/Signup.vue'
import LoginForClient from '@/views/accounts/LoginForClient.vue'
import LoginForCounselor from '@/views/accounts/LoginForCounselor.vue'

// my pages
import Bookmark from '@/views/profile/Bookmark.vue'
import MarkedCounselors from '@/components/MarkedCounselors.vue'
import Profile from '@/views/profile/Profile.vue'
import List from '@/views/profile/List.vue'

// home
import Home from '@/views/Home.vue'
import Counselors from '@/components/Counselors.vue'

// counseling
import Counseling from '@/views/counseling/Counseling.vue'
import CounselingSetting from '@/views/counseling/CounselingSetting.vue'
import CounselingFeedback from '@/views/counseling/CounselingFeedback.vue'


Vue.use(VueRouter)

const routes = [
  // accounts
  {
    path: '/signup',
    name: 'SignupForClient',
    component: Signup,
  },
  {
    path: '/signup-counselor',
    name: 'SignupForCounselor',
    component: Signup,
  },
  {
    path: '/login',
    name: 'LoginForClient',
    component: LoginForClient
  },
  {
    path: '/login-counselor',
    name: 'LoginForCounselor',
    component: LoginForCounselor
  },

  // my pages
  {
    path: '/my-page/bookmark',
    name: 'Bookmark',
    component: Bookmark
  },
  {
    path: '/my-page/bookmark/counselors',
    name: 'MarkedCounselors',
    component: MarkedCounselors
  },
  {
    path: '/my-page/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/my-page/list',
    name: 'List',
    component: List
  },

  // home
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/counselors',
    name: 'Counselors',
    component: Counselors
  },

  // counseling
  {
    path: '/counseling/on-air',
    name: 'Counseling',
    component: Counseling
  },
  {
    path: '/counseling/setting',
    name: 'CounselingSetting',
    component: CounselingSetting
  },
  {
    path: '/counseling/feedback',
    name: 'CounselingFeedback',
    component: CounselingFeedback
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
