<template>
  <div id="counselor-detail" class="col-10 d-flex flex-column justify-content-center align-items-center p-5 overflow-auto">
    <div class="mt-nav mb-4 p-5 part-profile">
      <!-- header -->
      <div class="d-flex align-items-center">
        <!-- name -->
        <p class="mb-0 col-3 ps-2 f-title">{{ this.counselorDetail.userInfo.name }} 상담사</p>

        <div class="col-9">
          <!-- introduction: one line -->
          <p class="f-subtitle">{{ this.counselorDetail.userInfo.shortGreeting }}</p>

          <!-- category -->
          <div class="d-flex">
            <p class="mb-0 me-2 text-center part-cat f-normal">우울</p>
            <p class="mb-0 me-2 text-center part-cat f-normal">무기력</p>
            <p class="mb-0 me-2 text-center part-cat f-normal">자살</p>
          </div>
        </div>
      </div>
      
      <hr class="my-4">

      <div class="d-flex">
        <div class="col-5 d-flex flex-column justify-content-between">
          <!-- profile image -->
          <div class="mb-4 me-3 text-center">
            <img :src="getImgUrl(this.counselorDetail.userInfo)" class="card-img-top" alt="counselor" style="width: 18vw;">
          </div>

          <!-- history -->
          <div class="me-3 p-3 part-content">
            <p>{{ this.counselorDetail.userInfo.degree }}</p>
            <!-- <p class="f-normal">중앙대학교 일반대학원 임상심리학 전공 석사 졸업</p>
            <p class="f-normal">전문상담사 2급 (한국상담학회)</p>
            <p class="mb-0 f-normal">정신건강임상심리사 1급 (보건복지부)</p> -->
          </div>
        </div>

        <div class="col-7 d-flex flex-column justify-content-between">
          <!-- content -->
          <div class="ms-3 mb-4">
            <p class="f-subtitle">소개</p>
            <div class="p-3 part-content">
              <p>{{ this.counselorDetail.userInfo.greeting }}</p>
              <!-- <p class="f-subtitle">"치유와 성장으로 가는 길 함께해요"</p>
              <p class="f-normal">누구나 아프고, 실수하고 상처받는 존재입니다.</p>
              <p class="f-normal">선생님의 치유, 회복, 성장의 과정에 함께 하겠습니다.</p>
              <p class="mb-0 f-normal">얼어붙은 맘과 몸에 따뜻한 봄을 가져갈 그여정에 함께 걷고 싶습니다.</p> -->
            </div>
          </div>

          <!-- review -->
          <div class="ms-3">
            <div class="d-flex">
              <p class="me-3 f-subtitle">평점 5.0</p>
              <p @click="changeStatus" class="f-normal">more</p>
            </div>
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
    }
  },
  computed: {
    ...mapState([
      'counselorDetail',
    ]),
  },
}
</script>

<style>

</style>