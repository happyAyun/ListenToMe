<template>
  <div id="records" class="px-3 overflow-auto">
    <!-- header: title -->
    <header class="d-flex align-items-center py-3" style="height: 10vh;">
      <p class="mb-0 f-subtitle">기록</p>
    </header>

    <!-- body: 전체 기록 -->
    <section v-for="(memo, index) in memos" :key=index>
      <record-item :memo="memo"></record-item>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import SERVER from '@/api/index.js'

import RecordItem from '@/components/counseling/RecordItem.vue'

export default {
  name: 'Records',

  components: {
    RecordItem
  },

  data: function () {
    return {
      memos: '',
    }
  },

  methods: {
    getMemos: function () {
      axios({
        method: 'get',
        url: SERVER.URL + SERVER.ROUTES.memosSelection + `${2}/`,
        headers: {
          'Content-Type': 'application/json',
          'access-token': `${this.$store.state.authToken}`
        },
      })
        .then(res => {
          this.memos = res.data
          console.log(this.memos)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, 

  created () {
    this.getMemos()
  }
}
</script>
