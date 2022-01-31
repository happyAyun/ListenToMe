<template>
  <div id="main-content">
    <!-- title: 게시판 -->
    <div class="mb-4 pt-5 d-flex">
      <p class="col-11 text-center font-title">오늘의 이야기</p>
      <p class="col-1 font-normal">more</p>
    </div>

    <!-- content: 게시판 -->
    <div class="d-flex justify-content-evenly mb-4">
      <div v-for="(post, index) in posts" :key=index >
        <p class="p-3 main-content font-normal">{{ post.content }}</p>
      </div>
    </div>

    <!-- title: 상담사 -->
    <div class="mb-4 pt-5 d-flex">
      <p class="col-11 text-center font-title">오늘의 상담사</p>
      <p class="col-1 font-normal">more</p>
    </div>

    <!-- content: 상담사 -->
    <div class="d-flex justify-content-evenly">
      <div v-for="(post, index) in posts" :key=index >
        <p class="p-3 main-content font-normal">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainContent',
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
      ]
    }
  }
}
</script>

<style>

</style>
