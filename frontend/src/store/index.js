import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import SERVER from '@/api/index.js'
import router from '@/router/index.js'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // for toggling
    isSideBar: true,  // 상담실에 입장하면 사이드바 감추기
    isMemo: true,  // 상담실 메모와 기록 영역 왔다리갔다리


    authToken: localStorage.getItem('jwt'),
    userid: "",
    usersession: "",
    memos: [
      {
        title: 'memo 1',
        content: '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'memo 2',
        content: '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'memo 3',
        content: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'memo 4',
        content: '4 Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        title: 'memo 5',
        content: '5 Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
    ],


    // 감정 분석 데이터 토클링: hidden < > represented
    isInfo: false,
  },

  getters: {
    isLoggedIn: function (state) {
      return state.authToken ? true : false
    },
    GE_USERID: (state) => {
      return state.userid;
    },
    GE_USERSESSION: (state) => {
      return state.usersession;
    },
  },

  mutations: {
    // for toggling
    TOGGLE_SIDEBAR: function (state) {
      state.isSideBar = !state.isSideBar
    },
    TOGGLE_MEMO: function (state) {
      state.isMemo = true
    },
    TOGGLE_RECORDS: function (state) {
      state.isMemo = false
    },


    SET_TOKEN: function (state, token) { 
      state.authToken = token
      state.isLoggedIn = true
      localStorage.setItem('jwt', token)
    },
    REMOVE_TOKEN: function (state) {
      localStorage.removeItem('jwt')
      state.authToken = ''
      state.isLoggedIn = false
    },

    TOGGLE_INFO: function (state) {
      state.isInfo = !state.isInfo
    },
    SE_USERID: function (state,payload) {
      state.userid = payload;
    },
    SE_USERSESSION: function (state,payload) {
      state.usersession = payload
    },
  },

  actions: {
    // for toggling
    toggleSideBar: function ({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    toggleMemo: function ({ commit }) {
      commit('TOGGLE_MEMO')
    },
    toggleRecords: function ({ commit }) {
      commit('TOGGLE_RECORDS')
    },
    toggleInfo: function ({ commit }) {
      commit('TOGGLE_INFO')
    },

    SE_USERID: (context, payload) => {
      return context.commit('SE_USERID', payload);
    },
    SE_USERSESSION: (context, payload) => {
      return context.commit('SE_USERSESSION', payload);
    },

    Signup: function (context, credentials) {
      axios({
        url: SERVER.URL + SERVER.ROUTES.signup,
        method: 'post',
        data: credentials,
      })
      .then(() => {
        router.push('/login')
      })
      .catch((err) => {
        console.log(err)
      })
    },
    SignupForCounselor: function (context, credentials) {
      axios({
        url: SERVER.URL + SERVER.ROUTES.co_signup,
        method: 'post',
        data: credentials,
      })
      .then(() => {
        router.push('/login')
      })
      .catch((err) => {
        console.log(err)
      })
    },
    Login: function ({ commit }, credentials) {
      if (this.getters.isLoggedIn) {
        router.push('/')
      }
      else {
        axios({
          url: SERVER.URL + SERVER.ROUTES.login,
          method: 'post',
          data: credentials,
        })
        .then((res) => {
          commit('SET_TOKEN', res.data.access)
          router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    LoginForCounselor: function ({ commit }, credentials) {
      if (this.getters.isLoggedIn) {
        router.push('/counselor')
      }
      else {
        axios({
          url: SERVER.URL + SERVER.ROUTES.co_login,
          method: 'post',
          data: credentials,
        })
        .then((res) => {
          commit('SET_TOKEN', res.data.access)
          router.push('/counselor')
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    Logout: function ({ commit }) {
      commit('REMOVE_TOKEN')
      router.push('/')
    },
  },

  plugins: [createPersistedState()],
})
