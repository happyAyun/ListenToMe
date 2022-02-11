<template>
  <div id="marked-counselors" class="col-10 p-5">
    <!-- title -->
    <div class="mb-5 d-flex">
      <p class="mb-0 me-4 f-title">북마크된 리스너</p>
      <button @click="moveToBookmark" class="mb-0 p-0 btn-more f-normal">back</button>
    </div>

    <!-- body -->
    <div class="row row-cols-5 g-5 mb-5 px-4">
      <div v-for="n in 8" :key=n>
        <div class="col">
          <!-- content -->
          <div @click="moveToProfile" class="p-2 card part-counselor">
            <!-- image -->
            <div class="py-3 text-center">
              <img :src="require('@/assets/images/counselor.png')" class="card-img-top" alt="counselor" style="width: 9vw;">
            </div>

            <div class="card-body px-4">
              <!-- 카테고리 -->
              <div class="d-flex mb-3">
                <!-- temp! 레이아웃을 잡기 위한 임시 코드 -->
                <p class="mb-0 me-2 text-center part-cat f-normal">우울</p>
                <p class="mb-0 text-center part-cat f-normal">무기력</p>
              </div>

              <div class="d-flex justify-content-between">
                <!-- 이름 -->
                <p class="mb-0 f-subtitle">James</p>
                <!-- 평점 -->
                <p class="mb-0 f-subtitle">4.9</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarkedCounselors',
  components: {

  },
  data: function () {
    return {
      
    }
  },
  methods: {
    moveToBookmark: function () {
      this.$router.push({name: 'Bookmark'})
    }
  }
}
</script>

<style>

</style>
