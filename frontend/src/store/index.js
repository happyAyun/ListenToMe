import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import SERVER from '@/api/index.js'
import router from '@/router/index.js'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    authToken: localStorage.getItem('jwt'),
  },
  getters: {
    isLoggedIn: function (state) {
      return state.authToken ? true : false
    },
  },
  mutations: {
    SET_TOKEN: function (state, token) { 
      state.authToken = token
      localStorage.setItem('jwt', token)
    },
    REMOVE_TOKEN: function (state) {
      localStorage.removeItem('jwt')
      state.authToken = ''
    },

  },
  actions: {
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
    },
    LoginForCounselor: function ({ commit }, credentials) {
      axios({
        url: SERVER.URL + SERVER.ROUTES.co_login,
        method: 'post',
        data: credentials,
      })
      .then((res) => {
        commit('SET_TOKEN', res.data.access)
        this.$store.state.isLoggedIn = true
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
    },
    Logout: function ({ commit }) {
      commit('REMOVE_TOKEN')
    },
  },
  modules: {
  }
})
