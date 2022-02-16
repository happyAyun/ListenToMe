<template>
  <div id="memo" class="px-3">
    <!-- header -->
    <div class="d-flex justify-content-between align-items-center py-3" style="height: 10vh;">
      <!-- title -->
      <p class="mb-0 f-subtitle">메모</p>

      <!-- message: 저장 여부 -->
      <p v-show="active" class="mb-0 pe-3 f-normal">저장 완료</p>
    </div>

    <!-- body: form -->
    <section class="d-flex flex-column justify-content-evenly align-items-center p-3 part-tool" style="height: 70vh;">
      <!-- form: 제목 -->
      <input type="text" placeholder="제목" class="form-control border-2 f-normal" required>

      <!-- form: 내용 -->
      <textarea placeholder="내용" class="form-control border-2 mb-2 form-content f-normal" required></textarea>

      <!-- footer: 기능 버튼 -->
      <footer class="d-flex justify-content-between" style="width: 20vw;">
        <!-- button: 감정 분석 -->
        <button @click="toggleData" class="btn-func f-btn" style="width: 8vw;">감정 분석</button>

        <!-- button: 저장 -->
        <button @click="showMessage" class="btn-func f-btn">저장</button>
      </footer>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Memo',

  data: function () {
    return {
      active: false,
    }
  },

  methods: {
    changeStatus: function () {
      this.active = !this.active
    },
    toggleData: function () {
      this.$store.dispatch('toggleData')
    },
    showMessage: function () {
      this.changeStatus()
      setTimeout(this.changeStatus, 1000)
    },
  }
}
</script>
