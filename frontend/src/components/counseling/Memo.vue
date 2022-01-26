<template>
  <div id="memo" class="px-4 sty-side">
    <p class="ms-1 mb-4 pt-4 fs-4 sty-font">Memo</p>

    <div class="pt-3 sty-side-back">
      <div class="d-flex justify-content-center mb-3">
        <input type="text" placeholder="제목" class="px-3 fs-5 sty-title">
      </div>

      <div class="d-flex justify-content-center mb-3">
        <textarea placeholder="내용" class="p-3 sty-content"></textarea>
      </div>

      <div class="d-flex justify-content-between">
        <button class="ms-4 btn sty-btn-memo sty-font">감정 분석</button>
        <button class="me-4 btn sty-btn-memo sty-font">저장</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Memo',
  components: {

  },
}
</script>
