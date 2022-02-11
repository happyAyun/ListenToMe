import Vue from 'vue'
import VueRouter from 'vue-router'

// accounts
import Signup from '@/views/accounts/Signup.vue'
import LoginForClient from '@/views/accounts/LoginForClient.vue'
import LoginForCounselor from '@/views/accounts/LoginForCounselor.vue'


// home
import Home from '@/views/Home.vue'

// my page  
  // client
import Bookmark from '@/views/profile/client/Bookmark.vue'
import MarkedCounselors from '@/components/MarkedCounselors.vue'
import List from '@/views/profile/client/List.vue'

  // counselor
import Profile from '@/views/profile/counselor/Profile.vue'
import Schedule from '@/views/profile/counselor/Schedule.vue'

// counseling
import Counseling from '@/views/counseling/Counseling.vue'
import CounselingSetting from '@/views/counseling/CounselingSetting.vue'
import CounselingFeedback from '@/views/counseling/CounselingFeedback.vue'

// listener
import Counselors from '@/views/listener/Counselors.vue'
import CounselorDetail from '@/views/listener/CounselorDetail.vue'


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

  // my pages - client
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
    path: '/my-page/list',
    name: 'List',
    component: List
  },
  
  // my pages - counselor
  {
    path: '/my-page/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/my-page/schedule',
    name: 'Schedule',
    component: Schedule
  },
  
  

  // home
  {
    path: '/',
    name: 'Home',
    component: Home
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

  // listener
  {
    path: '/counselors',
    name: 'Counselors',
    component: Counselors
  },
  {
    path: '/counselors/:coEmail',
    name: 'CounselorDetail',
    component: CounselorDetail
  },

]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
