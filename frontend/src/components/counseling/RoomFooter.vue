<template>
  <div id="room-footer" class="fixed-bottom d-flex align-items-center sty-footer">
    <div class="col-4"></div>

    <div class="col-4 d-flex justify-content-center">
      <button @click="moveToHome" class="btn btn-lg sty-btn-end fs-5 sty-font">End</button>
    </div>
    
    <div class="col-4 d-flex justify-content-end">
      <button @click="openOthers" class="me-3 btn btn-lg sty-btn-func fs-5 sty-font">Records</button>
      <button @click="openMemo" class="me-3 btn btn-lg sty-btn-func fs-5 sty-font">Memo</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomFooter',
  components: {

  },
  data: function () {
    return {
      
    }
  },
  methods: {
    moveToHome: function () {
      this.$router.push({name: 'Home'})
    },
    openMemo: function () {
      this.$store.dispatch('openMemo')
    },
    openOthers: function () {
      this.$store.dispatch('openOthers')
    },
  },
}
</script>
