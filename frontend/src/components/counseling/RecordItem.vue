<template>
  <div id="record-item" class="px-4 sty-side-others">
    <div class="d-flex justify-content-between mb-4 ">
      <p class="ms-1 mb-0 pt-4 fs-4 sty-font">Records</p>
      <p @click="showMessage" v-show="isStored" class="me-2 mb-0 pt-4 float-end">저장 되었습니다.</p>
    </div>

    <div class="pt-3 sty-side-back">
      <div class="d-flex justify-content-center mb-3">
        <input type="text" placeholder="제목" class="px-3 sty-title">
      </div>

      <div class="d-flex justify-content-center mb-4">
        <textarea placeholder="내용" class="p-3 sty-content"></textarea>
      </div>

      <div class="d-flex justify-content-end">
        <button @click="showDetails" class="me-4 btn sty-btn-memo sty-font">뒤로</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecordItem',
  components: {

  },
  methods: {
    showDetails: function () {
      this.$store.dispatch('showDetails')
    }
  }
}
</script>
