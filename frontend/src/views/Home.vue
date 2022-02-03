<template>
  <div id="home" class="col-10">
    <!-- 게시판 -->
    <div class="mb-5 pt-5 px-5">
      <!-- title -->
      <div class="mb-4 d-flex">
        <p class="me-3 f-title">오늘의 이야기</p>
        <p class="f-normal">more</p>
      </div>

      <!-- content -->
      <div class="d-flex justify-content-between">
        <div v-for="(post, index) in posts" :key=index >
          <p class="p-3 main-content f-normal">{{ post.content }}</p>
        </div>
      </div>
    </div>

    <!-- 상담사 -->
    <div class="px-5">
      <!-- title -->
      <div class="mb-3 d-flex">
        <p class="me-3 f-title">오늘의 상담사</p>
        <p @click="moveToCounselors" class="f-normal">more</p>
      </div>

      <div class="d-flex justify-content-between">
        <div v-for="(post, index) in posts" :key=index>
          <!-- content -->
          <div class="card part-counselor">
            <!-- image -->
            <div class="py-3 text-center">
              <img :src="require('@/assets/images/counselor.png')" class="card-img-top" alt="counselor" style="width: 10vw;">
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
  </div>
</template>

<script>
export default {
  name: 'Home',
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
    moveToCounselors: function () {
      this.$router.push({name: 'Counselors'})
    }
  }
}
</script>

<style>

</style>
