<template>
  <div id="home" class="col-10">
    <!-- 게시판 -->
    <div class="mx-5 mb-5 pt-5">
      <!-- title -->
      <div class="mb-4 d-flex">
        <p class="me-3 font-title">오늘의 이야기</p>
        <p class="font-normal">more</p>
      </div>

      <!-- content -->
      <div class="d-flex justify-content-between">
        <div v-for="(post, index) in posts" :key=index >
          <p class="p-3 main-content font-normal">{{ post.content }}</p>
        </div>
      </div>
    </div>

    <!-- 상담사 -->
    <div class="mx-5 mb-5 pt-5">
      <!-- title -->
      <div class="mb-4 d-flex">
        <p class="me-3 font-title">오늘의 상담사</p>
        <p class="font-normal">more</p>
      </div>

      <!-- content -->
      <div class="d-flex justify-content-between">
        <div v-for="(post, index) in posts" :key=index >
          <p class="p-3 main-content font-normal">{{ post.content }}</p>
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
          content: '1 Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          content: '2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          content: '3 Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          content: '4 Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          content: '5 Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
          content: '6 Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
      ]
    }
  }
}
</script>

<style>

</style>
