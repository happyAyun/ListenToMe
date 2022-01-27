import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // side bar 영역 바꾸기
    isMemo: true,
    isMsg: false,
    isDetails: false,
  },
  mutations: {
    OPEN_MEMO: function (state) {
      state.isMemo = true
      if (state.isDetails === true) {
        state.isDetails = false
      }
    },
    OPEN_OTHERS: function (state) {
      state.isMemo = false
      if (state.isDetails === true) {
        state.isDetails = false
      }
    },
    SEND_MESSAGE: function (state) {
      state.isMsg = !state.isMsg
    },
    SHOW_DETAILS: function (state) {
      state.isDetails = !state.isDetails
    },
  },
  actions: {
    openMemo: function ({ commit }) {
      commit('OPEN_MEMO')
    },
    openOthers: function ({ commit }) {
      commit('OPEN_OTHERS')
    },
    sendMessage: function ({ commit }) {
      commit('SEND_MESSAGE')
    },
    showDetails: function ({ commit }) {
      commit('SHOW_DETAILS')
    },
  },
})
