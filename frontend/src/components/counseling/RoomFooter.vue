<template>
  <div id="room-footer" class="fixed-bottom d-flex align-items-center sty-footer">
    <div class="col-4"></div>

    <div class="col-4 d-flex justify-content-center">
      <button @click="moveToHome" class="btn btn-lg sty-btn-end fs-5 sty-font">End</button>
    </div>
    
    <div class="col-4 d-flex justify-content-end">
      <button class="me-3 btn btn-lg sty-btn-func fs-5 sty-font">History</button>
      <button class="me-3 btn btn-lg sty-btn-func fs-5 sty-font">Memo</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomFooter',
  components: {

  },
  methods: {
    moveToHome: function () {
      this.$router.push({name: 'Home'})
    }
  },
}
</script>
