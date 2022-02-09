import Vue from 'vue'
import VueRouter from 'vue-router'

// accounts
import Signup from '@/views/accounts/Signup.vue'
import LoginForClient from '@/views/accounts/LoginForClient.vue'
import LoginForCounselor from '@/views/accounts/LoginForCounselor.vue'

// Home
import Home from '@/views/Home.vue'
import Counselors from '@/components/Counselors.vue'
// 마이 페이지 화면
import Profile from '@/views/profile/Profile.vue'
import Bookmark from '@/views/profile/Bookmark.vue'
import MarkedCounselors from '@/components/MarkedCounselors.vue'
import MySchedule from '@/views/profile/MySchedule.vue'
import Records from '@/views/profile/Records.vue'
// 상담 시작화면
import Counseling from '@/views/Counseling/Counseling.vue'
import CounselingMain from '@/views/Counseling/CounselingMain.vue'
import CounselingFeedback from '@/views/Counseling/CounselingFeedback.vue'
import CounselorMain from '@/views/Counselor/CounselorMain.vue'


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

  // Home
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
    path: '/profile/schedule',
    name: 'MySchedule',
    component: MySchedule
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




  // 상담 화면
  {
    path: '/counseling',
    name: 'Counseling',
    component: Counseling
  },
  {
    path: '/counselingmain',
    name: 'CounselingMain',
    component: CounselingMain
  },
  {
    path: '/counseling-feedback',
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
