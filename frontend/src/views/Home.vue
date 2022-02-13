<template>
  <div id="home" class="col-10 p-5">
    <!-- title -->
    <div class="mb-5 d-flex">
      <p class="mb-0 me-4 f-title">오늘의 리스너</p>
      <button @click="moveToCounselors" class="mb-0 p-0 btn-more f-normal">more</button>
    </div>

    <!-- body -->
    <div class="d-flex justify-content-around ">
      <div v-for="(listener, index) in todayListners" :key=index>
        <!-- content -->
        <div @click="LoadCounselorProfile(listener)" class="p-2 card part-counselor">
          <!-- image -->
          <div class="py-3 text-center">
            <img :src="require(`@/assets/images/counselor.png`)" class="card-img-top" alt="counselor" style="width: 9vw;">
            <!-- <img :src="getImgUrl(listener)" class="card-img-top" alt="counselor" style="width: 9vw;"> -->
          </div>

          <div class="px-4 card-body d-flex justify-content-between">
            <!-- 이름 -->
            <p class="mb-0 f-subtitle">{{ listener.name }}</p>
            <!-- 평점 -->
            <p class="mb-0 f-subtitle">{{ listener.startScore }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SERVER from '@/api/index.js'
import { mapActions } from 'vuex'

export default {
  name: 'Home',

  data: function () {
    return {
      todayListners: '',
    }
  },

  methods: {
    ...mapActions([
      'LoadCounselorProfile',
    ]),

    moveToCounselors: function () {
      this.$router.push({name: 'Counselors'})
    },
    getCounselorList() {
      axios({
        methods: 'get',
        url: SERVER.URL + '/counselor-api/list/0' 
      })
      .then((res) => {
        this.todayListners = res.data.counselor.slice(0, 5)
        console.log(this.todayListners)
      })
    },
    getImgUrl(con) {
      var images = SERVER.URL + `/counselor-api/user/image/${con.photo}`
      return images
    }
  },

  created () {
    this.getCounselorList()
  }
}
</script>
