import Vue from 'vue'
import VueRouter from 'vue-router'

// accounts
import Signup from '@/views/accounts/Signup.vue'
import LoginForClient from '@/views/accounts/LoginForClient.vue'
import LoginForCounselor from '@/views/accounts/LoginForCounselor.vue'

// my pages
import Bookmark from '@/views/profile/Bookmark.vue'
import MarkedCounselors from '@/components/MarkedCounselors.vue'
import MySchedule from '@/views/profile/MySchedule.vue'
import Records from '@/views/profile/Records.vue'
// 상담 시작화면
import Counseling from '@/views/Counseling/Counseling.vue'
import CounselingMain from '@/views/Counseling/CounselingMain.vue'
import CounselingFeedback from '@/views/Counseling/CounselingFeedback.vue'

// 리스너 화면
import CounselorMain from '@/views/Counselor/CounselorMain.vue'
import CounselorProfile from '@/views/Counselor/CounselorProfile.vue'
import Profile from '@/views/profile/Profile.vue'

// home
import Home from '@/views/Home.vue'
import Counselors from '@/components/Counselors.vue'

// counseling
import CounselingSetting from '@/views/counseling/CounselingSetting.vue'


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
    path: '/profile/schedule',
    name: 'MySchedule',
    component: MySchedule
  },
  {
    path: '/my-page/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/my-page/records',
    name: 'Records',
    component: Records
  },
  // {
  //   path: '/profile/records',

  // },

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
  {
    path: '/counselor/:coEmail',
    name: 'CounselorProfile',
    component: CounselorProfile
  },

  // 상담 화면
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
