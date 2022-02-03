<template>
  <div id="memo" class="px-4 area-side">
    <!-- 영역: 헤더 -->
    <div class="d-flex justify-content-between mb-4">
      <!-- 텍스트: 타이틀 -->
      <p class="ms-1 mb-0 pt-4 font-title">Memo</p>

      <!-- 모달: 저장 메시지 -->
      <p v-show="active" class="float-end me-2 mb-0 pt-4 font-normal">저장 되었습니다.</p>
    </div>

    <!-- 영역: 바디 -->
    <div class="py-4 area-side-body">
      <!-- 폼: 제목 -->
      <div class="d-flex justify-content-center mb-3">
        <input type="text" placeholder="제목" class="px-3 font-normal form-title">
      </div>

      <!-- 폼: 내용 -->
      <div class="d-flex justify-content-center mb-4">
        <textarea placeholder="내용" class="p-3 font-normal form-content"></textarea>
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
