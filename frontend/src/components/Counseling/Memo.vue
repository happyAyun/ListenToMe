<template>
  <div id="memo" class="px-4 area-tool">
    <!-- header -->
    <div class="d-flex justify-content-between mb-3">
      <p class="mb-0 ps-1 pt-3 f-title-smaller">Memo</p>

      <!-- 모달: 저장 메시지 -->
      <p v-show="active" class="mb-0 pt-3 pe-1 f-normal">저장 완료</p>
    </div>

    <!-- body -->
    <div class="d-flex flex-column justify-content-between px-3 py-4 part-tool">
      <div class="mx-auto mb-2">
        <input type="text" placeholder="제목" class="form-control form-title f-normal">
      </div>

      <!-- 폼: 내용 -->
      <div class="mx-auto mb-2">
        <textarea placeholder="내용" class="form-control form-content f-normal"></textarea>
      </div>

      <div class="d-flex justify-content-between mx-auto" style="width: 20vw;">
        <!-- 버튼: 감정 분석 -->
        <button @click="toggleInfo" class="btn btn-lg font-normal btn-func">감정 분석</button>
        <!-- 버튼: 저장 -->
        <button @click="showMessage" class="btn btn-lg font-normal btn-func">저장</button>
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
      active: false,
    }
  },
  methods: {
    changeStatus: function () {
      this.active = !this.active
    },
    toggleInfo: function () {
      this.$store.dispatch('toggleInfo')
    },
    showMessage: function () {
      this.changeStatus()
      setTimeout(this.changeStatus, 1000)
    },
  }
}
</script>
