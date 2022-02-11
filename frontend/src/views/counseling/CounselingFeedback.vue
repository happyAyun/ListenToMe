<template>
  <div id="counseling-feedback" class="col-10 d-flex justify-content-center align-items-center" style="background: black;">
    <div class="d-flex flex-column justify-content-between p-4 part-feedback">
      <!-- header: title -->
      <header class="text-center mb-5">
        <p class="mb-0 f-title-bold">상담은 만족스러우셨나요?</p>
      </header>

      <!-- body: form -->
      <section class="mb-5">
        <!-- form: review -->
        <textarea placeholder="내용" class="form-control border-2 mb-4 form-content-fb f-normal" required></textarea>

        <!-- form: rating -->
        <div v-if="!this.score" class="d-flex justify-content-around">
          <img @click="score1" :src="require('@/assets/images/star_blank.png')" alt="blank_star" class="img-star">
          <img @click="score2" :src="require('@/assets/images/star_blank.png')" alt="blank_star" class="img-star">
          <img @click="score3" :src="require('@/assets/images/star_blank.png')" alt="blank_star" class="img-star">
          <img @click="score4" :src="require('@/assets/images/star_blank.png')" alt="blank_star" class="img-star">
          <img @click="score5" :src="require('@/assets/images/star_blank.png')" alt="blank_star" class="img-star">
        </div>
        <div v-else class="d-flex justify-content-around">
          <div v-for="n in score" :key=n>
            <img @click="score0" :src="require('@/assets/images/star.png')" alt="star" class="img-star">
          </div>
          <div v-for="m in theLeft" :key=m>
            <img @click="score0" :src="require('@/assets/images/star_blank.png')" alt="blank_star" class="img-star">
          </div>
        </div>
      </section>

      <!-- footer: 퇴장 button -->
      <footer class="d-flex justify-content-center">
        <button @click="moveToHome" class="btn-ok f-btn" style="background: #ED9C9C">제출</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CounselingFeedback',

  data: function () {
    return {
      score: 0,
      theLeft: 0,
    }
  },

  methods: {
    moveToHome: function () {
      this.$router.push({name: 'Home'})
    },

    score1: function () {
      this.score = 1
      this.theLeft = 5 - this.score
    },
    score2: function () {
      this.score = 2
      this.theLeft = 5 - this.score
    },
    score3: function () {
      this.score = 3
      this.theLeft = 5 - this.score
    },
    score4: function () {
      this.score = 4
      this.theLeft = 5 - this.score
    },
    score5: function () {
      this.score = 5
      this.theLeft = 5 - this.score
    },
    score0: function () {
      this.score = 0
      this.theLeft = 5 - this.score
    },
  },
}
</script>
