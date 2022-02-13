<template>
  <div id="counselor-detail" class="col-10 d-flex flex-column align-items-center pt-5 overflow-auto">
    <div class="mb-4 px-4 py-3 part-profile">
      <!-- header -->
      <div class="d-flex align-items-center">
        <!-- name -->
        <div class="col-7 d-flex">
          <p class="mb-0 me-4 f-title">{{ this.counselorDetail.userInfo.name }}</p>
          <p class="mb-0 me-2 f-subtitle">{{ this.counselorDetail.userInfo.shortGreeting }}</p>
        </div>

        <div class="col-5 d-flex justify-content-between">
          <div class="d-flex align-items-center">
            <p class="mb-0 me-2 text-center part-cat f-normal">우울</p>
            <p class="mb-0 me-2 text-center part-cat f-normal">무기력</p>
            <p class="mb-0 me-2 text-center part-cat f-normal">자살</p>
          </div>
          <div>
            <button @click="setBookmark()" class="btn-func f-normal" style="background: #CFE7EB">북마크</button>
          </div>
        </div>
      </div>
      
      <hr class="my-4">

      <div class="d-flex mb-5">
        <div class="col-4 px-2 d-flex flex-column justify-content-between">
          <!-- profile image -->
          <div class="mb-5 text-center">
            <img :src="require('@/assets/images/counselor.png')" class="card-img-top" alt="counselor" style="width: 14vw;">
          </div>

          <!-- history -->
          <div class="sec-profile">
            <p class="mb-0 p-3 f-normal">{{ this.counselorDetail.userInfo.degree }}</p>
          </div>
        </div>

        <div class="col-8 px-2 d-flex flex-column justify-content-between">
          <!-- content -->
          <div class="mb-5">
            <div class="d-flex">
              <p class="f-subtitle me-2">소개</p>
            </div>
            <div class="sec-profile">
              <p class="mb-0 p-3 f-normal">{{ this.counselorDetail.userInfo.greeting }}</p>
            </div>
          </div>

          <!-- review -->
          <div class="">
            <div class="d-flex">
              <p class="me-2 f-subtitle">평점 5.0</p>
              <p @click="changeStatus" class="mb-0 text-center part-cat f-normal">더보기</p>
            </div>
            <div class="p-3 sec-profile">
              <div class="d-flex mb-2 f-normal">
                <span class="me-2 p">월요일조아님(2022-01-03)</span>
                <div v-for="n in 5" :key="n">
                  <img :src="require('@/assets/images/star.png')" class="me-1 card-img-top" alt="counselor" style="width: 1.2vw;">
                </div>
              </div>
              <p class="mb-3">상담 후에 월요일이 더 좋아졌어요. 잘 들어주셔서 너무너무 감사드려요!</p>
              <div class="d-flex mb-2 f-normal">
                <span class="me-2 p">월요일조아님(2022-01-03)</span>
                <div v-for="n in 5" :key="n">
                  <img :src="require('@/assets/images/star.png')" class="me-1 card-img-top" alt="counselor" style="width: 1.2vw;">
                </div>
              </div>
              <p class="mb-0">상담 후에 월요일이 더 좋아졌어요. 잘 들어주셔서 너무너무 감사드려요!</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <counselor-schedule :coEmail="coEmail"/>
      </div>
    </div>

    <div v-if="active" class="mb-5 p-4 part-profile">
      <!-- review -->
      <div class="ms-3 mb-3">
        <p class="me-3 f-subtitle">평점 5.0</p>
        <div class="p-3 part-content">
          <div class="d-flex mb-2 f-normal">
            <span class="me-2 p">월요일조아님(2022-01-03)</span>
            <div v-for="n in 5" :key="n">
              <img :src="require('@/assets/images/star.png')" class="me-1 card-img-top" alt="counselor" style="width: 1.2vw;">
            </div>
          </div>
          <p class="mb-3">상담 후에 월요일이 더 좋아졌어요. 잘 들어주셔서 너무너무 감사드려요!</p>
          <div class="d-flex mb-2 f-normal">
            <span class="me-2 p">월요일조아님(2022-01-03)</span>
            <div v-for="n in 5" :key="n">
              <img :src="require('@/assets/images/star.png')" class="me-1 card-img-top" alt="counselor" style="width: 1.2vw;">
            </div>
          </div>
          <p class="mb-3">상담 후에 월요일이 더 좋아졌어요. 잘 들어주셔서 너무너무 감사드려요!</p>
          <div class="d-flex mb-2 f-normal">
            <span class="me-2 p">월요일조아님(2022-01-03)</span>
            <div v-for="n in 5" :key="n">
              <img :src="require('@/assets/images/star.png')" class="me-1 card-img-top" alt="counselor" style="width: 1.2vw;">
            </div>
          </div>
          <p class="mb-0">상담 후에 월요일이 더 좋아졌어요. 잘 들어주셔서 너무너무 감사드려요!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CounselorSchedule from '@/components/listener/CounselorSchedule.vue'

import axios from 'axios'
import SERVER from "@/api/index.js"

export default {
  name: 'CounselorDetail',
  components: {
    CounselorSchedule
  },
  props: {
    coEmail: {
      type: String,
    }
  },
  data: function () {
    return {
      active: false,
      conEmail: '',
    }
  },
  methods: {
    changeStatus: function () {
      this.active = !this.active
    },

    getImgUrl(con) {
      var images = SERVER.URL + `/counselor-api/user/image/${con.photo}`
      return images
    },

    setBookmark: function () {
      axios({
        method: 'post',
        url: SERVER.URL + SERVER.ROUTES.bookmarkCreation + `${this.coEmail}/`,
        headers: {
          'Content-Type': 'application/json',
          'access-token': `${this.$store.state.authToken}`
        },
        data: {
          "counselor": this.conEmail
        },
      })
        .then(res => {
          console.log(res)
        })
    }
  },

  computed: {
    ...mapState([
      'counselorDetail',
    ]),
  },
}
</script>
