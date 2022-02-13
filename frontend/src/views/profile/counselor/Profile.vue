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
              <p class="me-2 f-subtitle">평점 {{ sumReviews / totalReviews }}</p>
              <p @click="changeStatus" class="mb-0 text-center part-cat f-normal">더보기</p>
            </div>
            <div class="p-3 sec-profile">
              <div v-for="review in reviews" :key="review.id" class="d-flex flex-column">
                <div class="d-flex mb-1">
                  <p class="mb-0 me-2 f-normal">{{ review.nickname }}</p>
                  <p class="mb-0 me-2 f-normal">{{ review.startScore }}점</p>
                </div>
                <div>
                  <p class="mb-0 f-subtitle">{{ review.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="active" class="mb-5 px-4 py-3 part-profile">
      <!-- review -->
      <div class="">
        <div class="d-flex">
          <p class="me-2 f-subtitle">평점 {{ sumReviews / totalReviews }}</p>
          <p @click="closeStatus" class="mb-0 text-center part-cat f-normal">닫기</p>
        </div>
        <div class="p-3 sec-profile">
          <div v-for="review in reviews" :key="review.id" class="d-flex flex-column">
            <div class="d-flex mb-1">
              <p class="mb-0 me-2 f-normal">{{ review.nickname }}</p>
              <p class="mb-0 me-2 f-normal">{{ review.startScore }}점</p>
            </div>
            <div>
              <p class="mb-0 f-subtitle">{{ review.content }}</p>
            </div>
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

      totalReviews: 1,
      sumReviews: 0,
      reviews: '',
    }
  },
  methods: {
    changeStatus: function () {
      this.active = !this.active
    },
    closeStatus: function () {
      this.active = false
    },

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
    getReviews: function () {
      axios({
        method: 'get',
        url: SERVER.URL + SERVER.ROUTES.reviewsSelection + `${this.$store.state.userEmail}/`,
        headers: {
          'Content-Type': 'application/json',
          'access-token': `${this.$store.state.authToken}`
        },
      })
        .then(res => {
          this.totalReviews = res.data.content.length
          console.log(this.totalReviews)

          this.reviews = res.data.content
          console.log(this.reviews)
          
          this.reviews.forEach(review => {
            this.sumReviews += review.startScore
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created() {
    this.getCounselorData()
    this.getReviews()
  }
}
</script>
