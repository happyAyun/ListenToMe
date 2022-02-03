<template>
  <div id="bookmark" class="col-10">
    <!-- 즐겨찾기 -->
    <div class="mb-5 pt-5 pb-2 px-5">
      <!-- title -->
      <div class="mb-2 d-flex">
        <p class="me-3 f-title">북마크된 상담사</p>
        <p @click="moveToMarkedCounselors" class="f-normal">more</p>
      </div>

      <div class="d-flex justify-content-between">
        <div v-for="(post, index) in posts" :key=index>
          <!-- content -->
          <div class="card part-counselor">
            <!-- image -->
            <div class="py-2 text-center">
              <img :src="require('@/assets/images/counselor.png')" class="card-img-top" alt="counselor" style="width: 9vw;">
            </div>

            <div class="px-4 card-body d-flex justify-content-between">
              <!-- 이름 -->
              <p class="mb-0 f-subtitle">{{ post.name }}</p>
              <!-- 평점 -->
              <p class="mb-0 f-subtitle">{{ post.score }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 추천 -->
    <div class="px-5">
      <!-- title -->
      <div class="mb-2 d-flex">
        <p class="f-title">추천 상담사</p>
      </div>

      <div class="d-flex justify-content-between">
        <div v-for="(post, index) in posts" :key=index>
          <!-- content -->
          <div class="card part-counselor">
            <!-- image -->
            <div class="py-2 text-center">
              <img :src="require('@/assets/images/counselor.png')" class="card-img-top" alt="counselor" style="width: 9vw;">
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
                <p class="mb-0 f-subtitle">{{ post.name }}</p>
                <!-- 평점 -->
                <p class="mb-0 f-subtitle">{{ post.score }}</p>
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
  name: 'Bookmark',
  components: {

  },
  data: function () {
    return {
      // dummy data
      posts: [
        {
          content: '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          name: 'James',
          score: 5.5,
        },
        {
          content: '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          name: 'James',
          score: 5.5,
        },
        {
          content: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          name: 'James',
          score: 5.5,
        },
        {
          content: '4 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          name: 'James',
          score: 5.5,
        },
        {
          content: '5 Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          name: 'James',
          score: 5.5,
        },
      ]
    }
  },
  methods: {
    moveToMarkedCounselors: function () {
      this.$router.push({name: 'MarkedCounselors'})
    }
  }
}
</script>

<style>

</style>
