<template>
  <div id="counselors" class="col-10 overflow-auto">
    <!-- title -->
    <div class="mb-5 pt-5 d-flex mx-5">
      <p class="me-3 f-title">전체 상담사</p>
      <button @click="moveToHome" class="mb-0 p-0 btn-more f-normal">back</button>
    </div>

    <!-- content -->
    <div class="row row-cols-5 g-5 mb-5 mx-4">
      <div 
        v-for="counselor in counselorList" 
        :key="counselor.id" 
        @click="LoadCounselorProfile(counselor)"
        >
        <div class="col">
          <div class="card part-counselor">
            <!-- image -->
            <div class="py-3 text-center">
              <img :src="getImgUrl(counselor)" class="card-img-top" alt="counselor" style="width: 9vw;">  
            </div>

            <div class="card-body px-4">
              <!-- 카테고리 -->
              <div class="d-flex mb-2">
                <!-- tempo! 레이아웃을 잡기 위한 임시 코드 -->
                <p class="mb-0 me-2 text-center part-cat f-normal">우울</p>
                <p class="mb-0 text-center part-cat f-normal">무기력</p>
              </div>

              <div class="d-flex justify-content-between">
                <!-- 이름 -->
                <p class="mb-0 f-subtitle">{{ counselor.name }}</p>
                <!-- 평점 -->
                <p class="mb-0 f-subtitle">5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- pagination -->
    <!-- <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#" onc>3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav> -->
  </div>
</template>

<script>
import axios from 'axios'
import SERVER from "@/api/index.js"
import { mapActions } from 'vuex'

export default {
  name: 'Counselors',

  data: function () {
    return {
      counselorList: [],
      // page: 0
      counselorEmail: '',

      // 클릭한 상담사 기록
      counselorInfo: [],
    }
  },
  
  methods: {
    ...mapActions([
      'LoadCounselorProfile',
    ]),

    moveToHome: function () {
      this.$router.push({name: 'Home'})
    },

    getCounselorList() {
      axios({
        methods: 'get',
        url: SERVER.URL + '/counselor-api/list/0' 
      })
      .then((res) => {
        // console.log(res)
        this.counselorList = res.data.counselor;
        // this.imgName = res.data.counselor.photo
      })
      .catch((err) => console.log(err));
    },

    getImgUrl(con) {
      var images = SERVER.URL + `/counselor-api/user/image/${con.photo}`
      return images
    }
  },
  created() {
    this.getCounselorList()
  }
}
</script>

<style>

</style>
