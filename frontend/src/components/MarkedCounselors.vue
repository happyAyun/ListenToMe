<template>
  <div id="marked-counselors" class="px-5">
    <!-- title -->
    <div class="mb-5 pt-5 d-flex">
      <p class="me-3 f-title">북마크된 상담사</p>
      <p @click="moveToBookmark" class="f-normal">back</p>
    </div>

    <!-- content -->
    <div class="row row-cols-5 g-5 mb-5">
      <div v-for="n in 8" :key="n">
        <div @click="moveToProfile" class="col">
          <div class="card part-counselor">
            <!-- image -->
            <div class="py-3 text-center">
              <img :src="require('@/assets/images/counselor.png')" class="card-img-top" alt="counselor" style="width: 10vw;">
            </div>

            <div class="card-body px-4">
              <!-- 카테고리 -->
              <div class="d-flex mb-2">
                <!-- tempo! 레이아웃을 잡기 위한 임시 코드 -->
                <p class="mb-0 me-2 px-2 py-1 part-cat f-normal">우울</p>
                <p class="mb-0 part-cat px-2 py-1 f-normal">무기력</p>
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
