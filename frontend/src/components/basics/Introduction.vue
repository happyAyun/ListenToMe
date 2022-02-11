<template>
  <div id="introduction" class="card part-home-image">
    <img
      :src="require('@/assets/images/main-background2.jpg')"
      alt="background-image" class="img-fluid" style="width: 100vw; height: 100vh;"
    >

    <div class="card-img-overlay mx-auto my-auto" style="width: 50vw; height: 50vh;">
      <p class="mb-5 text-center text-white f-title"> Listen to Me, 나의 이야기를 들어줄래?</p>

      <div class="d-flex justify-content-center">
        <button @click="moveDown" class="menu f-subtitle">내려가기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introductoin',

  methods: {
    moveDown: function () {
      this.$store.dispatch('moveDown')
    }
  },
}
</script>
