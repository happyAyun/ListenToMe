<template>
  <div id="home" class="col-10 p-5 over-flow-auto">
    <!-- title -->
    <div class="mb-5 d-flex">
      <p class="mb-0 me-4 f-title">오늘의 리스너</p>
      <button @click="moveToCounselors" class="mb-0 p-0 btn-more f-normal">more</button>
    </div>

    <!-- body -->
    <div class="d-flex justify-content-around align-items-center">
      <div v-for="(post, index) in posts" :key=index>
        <!-- content -->
        <div @click="moveToProfile" class="p-2 card part-counselor">
          <!-- image -->
          <div class="py-3 text-center">
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
    },
    moveToProfile: function () {
      if (this.$store.state.loginState === 0) {
        this.$router.push({name: 'LoginForClient'})
      } else {
        this.$router.push({name: 'Profile'})
      }
    },
  }
}
</script>

<style>

</style>
