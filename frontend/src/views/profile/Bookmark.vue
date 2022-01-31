<template>
  <div id="bookmark" class="col-10">
    <!-- 북마크된 상담사 -->
    <div class="mx-5 mb-5 pt-5">
      <!-- title -->
      <div class="mb-4 d-flex">
        <p class="me-3 font-title">자주 찾는 상담사</p>
        <p class="font-normal">more</p>
      </div>

      <!-- content -->
      <div class="d-flex justify-content-between">
        <div v-for="(post, index) in posts" :key=index >
          <p class="p-3 main-content font-normal">{{ post.content }}</p>
        </div>
      </div>
    </div>

    <!-- 추천 상담사 -->
    <div class="mx-5 mb-5 pt-5">
      <!-- title -->
      <div class="mb-4 d-flex">
        <p class="font-title">추천드리는 상담사</p>
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
  name: 'Bookmark',
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
