import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // dummy data: 상담 메모 (UI 확인용)
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

    // 오른쪽 사이드 영역 토글링: 메모(memo) < > 기록(records)
    isMemo: true,
    // 감정 분석 데이터 토클링: hidden < > represented
    isInfo: false,
  },
  mutations: {
    OPEN_MEMO: function (state) {
      state.isMemo = true
    },
    OPEN_RECORDS: function (state) {
      state.isMemo = false
    },
    TOGGLE_INFO: function (state) {
      state.isInfo = !state.isInfo
    },
  },
  actions: {
    openMemo: function ({ commit }) {
      commit('OPEN_MEMO')
    },
    openRecords: function ({ commit }) {
      commit('OPEN_RECORDS')
    },
    toggleInfo: function ({ commit }) {
      commit('TOGGLE_INFO')
    },
  },
})
