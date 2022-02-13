<template>
  <div id="list" class="col-10 p-3 overflow-auto">
    <!-- 진행 예정 상담 -->
    <div class="mb-4 pt-5 pb-2 px-5">
      <!-- title -->
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <p class="mb-0 me-4 f-title">진행 예정 상담</p>
        <button class="mb-0 p-0 btn-tool f-btn" style="width: 8vw; background: #FFDF70">{{ leftPoints }} points</button>
      </div>

      <!-- content -->
      <ul class="d-flex list-group mb-4">
        <!-- header -->
        <li class="list-group-item d-flex" style="background: #95D0F1;">
          <p class="col-2 mb-0 text-center f-subtitle">번호</p>
          <p class="col-2 mb-0 text-center f-subtitle">상담사</p>
          <p class="col-3 mb-0 text-center f-subtitle">상담 날짜</p>
          <p class="col-3 mb-0 text-center f-subtitle">상담 일시</p>
          <p class="col-2 mb-0 text-center f-subtitle">상태</p>
        </li>
        
        <!-- body -->
        <li v-for="(item, index) in list" :key=index class="list-group-item d-flex">
          <p class="col-2 mb-0 text-center f-normal">{{ item.id }}</p>
          <p class="col-2 mb-0 text-center f-normal">{{ item.counselor_name }}</p>
          <p class="col-3 mb-0 text-center f-normal">{{ item.date }}</p>
          <p class="col-3 mb-0 text-center f-normal">{{ item.time }}</p>
          
          <p v-if="item.state === 1" class="col-2 mb-0 text-center f-normal">대기</p>
          <p v-else-if="item.state === 2" class="col-2 mb-0 text-center f-normal">승인</p>
        </li>
      </ul>

      <ul class="d-flex justify-content-center pagination">
        <li class="page-item" style="width: 4vw;"><p @click="setBack" class="page-link f-normal">Prev</p></li>
        <li
          v-for="n in this.totalPages" :key=n class="page-item" style="width: 2vw;"
        >
          <p @click="setPage(n)" class="page-link f-normal">{{ n }}</p>
        </li>
        <li class="page-item" style="width: 4vw;"><p @click="setNext" class="page-link f-normal">Next</p></li>
      </ul>
    </div>

    <!-- 종료된 상담 -->
    <div class="mb-4 pb-2 px-5">
      <!-- title -->
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <p class="mb-0 me-4 f-title">종료된 상담</p>
        <button @click="selectAll()" class="mb-0 p-0 btn-tool f-btn" style="width: 8vw; background: #FFDF70">전체 보기</button>
      </div>

      <!-- content -->
      <ul class="d-flex list-group mb-4">
        <!-- header -->
        <li class="list-group-item d-flex" style="background: #7DABD0;">
          <p class="col-2 mb-0 text-center f-subtitle">번호</p>
          <p class="col-2 mb-0 text-center f-subtitle">상담사</p>
          <p class="col-2 mb-0 text-center f-subtitle">상담 날짜</p>
          <p class="col-2 mb-0 text-center f-subtitle">상담 일시</p>
          <p class="col-2 mb-0 text-center f-subtitle">차감 포인트</p>
          <p class="col-2 mb-0 text-center f-subtitle">기록</p>
        </li>
        
        <!-- body -->
        <li v-for="(item, index) in doneList" :key=index class="list-group-item d-flex align-items-center">
          <p class="col-2 mb-0 text-center f-normal">{{ item.id }}</p>
          <p class="col-2 mb-0 text-center f-normal">{{ item.counselor_name }}</p>
          <p class="col-2 mb-0 text-center f-normal">{{ item.date }}</p>
          <p class="col-2 mb-0 text-center f-normal">{{ item.time }}</p>
          <p class="col-2 mb-0 text-center f-normal">{{ item.point }}</p>

          <!-- counseling details -->
          <div class="col-2 d-flex justify-content-center">
            <button @click="selectDetails(index)" class="btn-more f-btn">보기</button>
          </div>
        </li>
      </ul>

      <ul class="d-flex justify-content-center pagination">
        <li class="page-item" style="width: 4vw;"><p @click="setBack" class="page-link f-normal">Prev</p></li>
        <li
          v-for="n in this.totalPages" :key=n class="page-item" style="width: 2vw;"
        >
          <p @click="setPage(n)" class="page-link f-normal">{{ n }}</p>
        </li>
        <li class="page-item" style="width: 4vw;"><p @click="setNext" class="page-link f-normal">Next</p></li>
      </ul>

      <!-- Modal -->
      <div v-if="active" class="p-3 part-record">
        <div class="mb-5 d-flex justify-content-between align-items-center">
          <p class="mb-0 me-4 f-title">종료된 상담</p>
          <button @click="closeModal()" class="mb-0 p-0 btn-tool f-btn" style="background: #FFDF70">닫기</button>
        </div>

        <div v-for="(memo, index) in memos" :key=index>
          <!-- header: 제목 -->
          <div class="mx-auto mb-3 p-3 part-record" style="width: 50vw;">
            <div class="d-flex justify-content-between align-items-center">
              <p class="mb-0 text-center f-subtitle">{{ memo.title }}</p>
              <p class="mb-0 text-center f-normal">{{ memo.date }}</p>
            </div>

            <hr class="my-3">

            <!-- body: 내용 -->
            <p class="mb-0 py-2 f-normal">{{ memo.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SERVER from '@/api/index.js'

export default {
  name: 'List',
  components: {

  },
  data: function () {
    return {
      active: 0,

      currentPage: 1,
      totalPages: 0,
      list: '',

      currentPageDone: 1,
      totalPagesDone: 0,
      doneList: '',

      currentDone: '',

      leftPoints: 10000,

      memos: ''
    }
  }, 

  methods: {
    closeModal: function () {
      this.active = false
    },

    setPage: function (page) {
      this.currentPage = page
      this.getCounselingList(this.currentPage)
    },
    setBack: function () {
      if (this.currentPage !== 1) {
        this.currentPage--
      }
      this.getCounselingList(this.currentPage)
      console.log(this.currentPage)
    },
    setNext: function () {
      if (this.currentPage !== this. totalPages) {
        this.currentPage++
      }
      this.getCounselingList(this.currentPage)
      console.log(this.currentPage)
    },

    setPageDone: function (page) {
      this.currentPageDone = page
      this.getDoneList(this.currentPageDone)
    },
    setBackDone: function () {
      if (this.currentPageDone !== 1) {
        this.currentPageDone--
      }
      this.getCounselingList(this.currentPageDone)
      console.log(this.currentPageDone)
    },
    setNextDone: function () {
      if (this.currentPageDone !== this. totalPagesDone) {
        this.currentPageDone++
      }
      this.getCounselingList(this.currentPageDone)
      console.log(this.currentPageDone)
    },

    getCounselingList: function (page) {
      axios({
        method: 'get',
        url: SERVER.URL + SERVER.ROUTES.counselingListCounselor + `${page}/`,
        headers: {
          'Content-Type': 'application/json',
          'access-token': `${this.$store.state.authToken}`
        },
      })
        .then(res => {
          this.list = res.data.content
          this.totalPages = res.data.totalPages
          const items = []
          res.data.content.forEach((item) => {
            let info = {
              id: item.id,
              counselor_name: item.counselor_name,
              date: item.dateTime.slice(0, 10),
              time: item.dateTime.slice(11, 16),
              state: item.state,
            }
            items.push(info)
          })
          this.list = items
          console.log(res.data.content)
        })
        .catch(err => {
          console.log(err)
        })
    },
    
    getDoneList: function (page) {
      axios({
        method: 'get',
        url: SERVER.URL + SERVER.ROUTES.doneListCounselor + `${page}/`,
        headers: {
          'Content-Type': 'application/json',
          'access-token': `${this.$store.state.authToken}`
        },
      })
        .then(res => {
          this.doneList = res.data.content
          this.totalPagesDone = res.data.totalPages
          this.leftPoints = 10000 + 1000 * ((this.totalPagesDone - 1) * 5 + res.data.numberOfElements)
          const items = []
          res.data.content.forEach((item) => {
            let info = {
              id: item.id,
              counselor_name: item.counselor_name,
              date: item.dateTime.slice(0, 10),
              time: item.dateTime.slice(11, 16),
              point: item.point,
            }
            items.push(info)
          })
          this.doneList = items
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getMemo: function () {
      axios({
        method: 'get',
        url: SERVER.URL + SERVER.ROUTES.memoSelection + `${5}/`,
        headers: {
          'Content-Type': 'application/json',
          'access-token': `${this.$store.state.authToken}`
        },
      })
        .then(res => {
          console.log(this.currentDone.id)
          console.log(res)
        })
        .catch(err => {
          console.log(this.currentDone.id)
          console.log(err)
        })
    },
    getMemos: function (id) {
      axios({
        method: 'get',
        url: SERVER.URL + SERVER.ROUTES.memosSelection + `${id}/`,
        headers: {
          'Content-Type': 'application/json',
          'access-token': `${this.$store.state.authToken}`
        },
      })
        .then(res => {
          const items = []
          res.data.forEach((item) => {
            let info = {
              title: item.title,
              content: item.content,
              date: item.dateTime.slice(0, 10) + ' ' + item.dateTime.slice(11, 16),
            }
            items.push(info)
          })
          this.memos = items
        })
        .catch(err => {
          console.log(err)
        })
    },

    selectDetails: function (index) {
      this.currentDone = this.doneList[index]
      this.active = true
      this.getMemo()
      console.log(this.currentDone)
    },

    selectAll: function () {
      console.log(this.doneList[0].id)
      this.active = true
      this.getMemos(this.doneList[0].id)
      console.log(this.currentDone)
    },
  },

  created () {
    this.getCounselingList(0)
    this.getDoneList(0)
  }
}
</script>
