import Vue from 'vue'
import VueRouter from 'vue-router'

// 홈 화면
import Home from '@/views/Home.vue'
import Counselors from '@/components/Counselors.vue'
// 마이 페이지 화면
import Profile from '@/views/profile/Profile.vue'
import Bookmark from '@/views/profile/Bookmark.vue'
import MarkedCounselors from '@/components/MarkedCounselors.vue'
import Records from '@/views/profile/Records.vue'
// 상담 시작화면
import Counseling from '@/views/Counseling/Counseling.vue'
import CounselingMain from '@/views/Counseling/CounselingMain.vue'
import CounselorMain from '@/views/Counselor/CounselorMain.vue'

import SingupPage from '../views/SignupPage.vue'
import LoginPage from '../views/LoginPage.vue'
import CounselorLoginPage from '../views/Counselor/CounselorLoginPage.vue'

Vue.use(VueRouter)

const routes = [
  // 홈 화면
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
  // 마이 페이지 화면
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profile/bookmark',
    name: 'Bookmark',
    component: Bookmark
  },
  {
    path: '/profile/bookmark/counselors',
    name: 'MarkedCounselors',
    component: MarkedCounselors
  },
  {
    path: '/profile/records',
    name: 'Records',
    component: Records
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
  },
  {
    path: '/login/counselor',
    name: 'CounselorLoginPage',
    component: CounselorLoginPage
  },
  {
    path: '/counseling',
    name: 'Counseling',
    component: Counseling
  },
  {
    path: '/counselingmain',
    name: 'CounselingMain',
    component: CounselingMain
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
