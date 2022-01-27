<template>
  <div id="memo" class="px-4 sty-side">
    <div class="d-flex justify-content-between mb-4 ">
      <p class="ms-1 mb-0 pt-4 fs-4 sty-font">Memo</p>
      <p @click="showMessage" v-show="isStored" class="me-2 mb-0 pt-4 float-end">저장 되었습니다.</p>
    </div>

    <div class="pt-3 sty-side-back">
      <div class="d-flex justify-content-center mb-3">
        <input type="text" placeholder="제목" class="px-3 sty-title">
      </div>

      <div class="d-flex justify-content-center mb-4">
        <textarea placeholder="내용" class="p-3 sty-content"></textarea>
      </div>

      <div class="d-flex justify-content-between">
        <button @click="sendMessage" class="ms-4 btn sty-btn-memo sty-font">감정 분석</button>
        <button @click="showMessage" class="me-4 btn sty-btn-memo sty-font">저장</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Memo',
  components: {

  },
  data: function () {
    return {
      isStored: false,
    }
  },
  methods: {
    sendMessage: function () {
      this.$store.dispatch('sendMessage')
    },
    showMessage: function () {
      this.isStored = true
    },
  }
}
</script>
