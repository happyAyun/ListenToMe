<template>
  <div id="profile" class="col-10 d-flex flex-column align-items-center pt-5 overflow-auto">
    <div class="mb-4 px-4 py-3 part-profile">
      <!-- header -->
      <div class="d-flex align-items-center">
        <!-- name -->
        <div class="col-7 d-flex">
          <p class="mb-0 me-4 f-title">{{ name }}</p>
          <p class="mb-0 me-2 f-subtitle">{{ shortGreeting }}</p>
          <p class="mb-0 text-center part-cat f-normal" style="width: 3vw; background: #CFE7EB">수정</p>
        </div>

        <div class="col-5 d-flex">
          <p class="mb-0 me-2 text-center part-cat f-normal">우울</p>
          <p class="mb-0 me-2 text-center part-cat f-normal">무기력</p>
          <p class="mb-0 me-2 text-center part-cat f-normal">자살</p>
          <p class="mb-0 me-2 text-center part-cat f-normal" style="width: 3vw; background: #CFE7EB">수정</p>
        </div>
      </div>
      
      <hr class="my-4">

      <div class="d-flex">
        <div class="col-4 px-2 d-flex flex-column justify-content-between">
          <!-- profile image -->
          <div class="mb-5 text-center">
            <img :src="require('@/assets/images/counselor.png')" class="card-img-top" alt="counselor" style="width: 14vw;">
          </div>

          <!-- history -->
          <div class="sec-profile">
            <p class="mb-0 p-3 f-normal">{{ degree }}</p>
          </div>
        </div>

        <div class="col-8 px-2 d-flex flex-column justify-content-between">
          <!-- content -->
          <div class="mb-5">
            <div class="d-flex">
              <p class="f-subtitle me-2">소개</p>
              <p class="mb-0 text-center part-cat f-normal" style="width: 3vw; background: #CFE7EB">수정</p>
            </div>
            <div class="sec-profile">
              <p class="mb-0 p-3 f-normal">{{ greeting }}</p>
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
    </div>

    <div v-if="active" class="mb-5 px-4 py-3 part-profile">
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
import axios from 'axios'
import SERVER from '@/api/index.js'

export default {
  name: 'Profile',
  components: {

  },
  data: function () {
    return {
      active: false,
      name:'',
      greeting: '',
      shortGreeting: '',
      degree: '',
    }
  },
  methods: {
    getCounselorData() {
      axios({
        method: 'get',
        url: SERVER.URL + `/counselor-api/user/${this.$store.state.userEmail}`,
      })
      .then((res) => {
        console.log(res)
        this.name = res.data.userInfo.name;
        this.greeting = res.data.userInfo.greeting;
        this.shortGreeting = res.data.userInfo.shortGreeting;
        this.degree = res.data.userInfo.degree;
      })
      .catch((err) => console.log(err));
    },
    changeStatus: function () {
      this.active = !this.active
    }
  },
  created() {
    this.getCounselorData()
  }
}
</script>
