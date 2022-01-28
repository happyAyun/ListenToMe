<template>
  <div id="room-footer" class="d-flex align-items-center area-footer">
    <div class="col-4"></div>

    <!-- 버튼: 종료 -->
    <div class="col-4 d-flex justify-content-center">
      <button @click="moveToHome" class="btn btn-lg font-btn btn-end">End</button>
    </div>
    
    <div class="col-4 d-flex justify-content-end">
      <!-- 버튼: 기록(records) -->
      <button @click="openRecords" class="me-4 btn btn-lg font-btn btn-mov">Records</button>
      <!-- 버튼: 메모 -->
      <button @click="openMemo" class="me-4 btn btn-lg font-btn btn-mov">Memo</button>
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
    openRecords: function () {
      this.$store.dispatch('openRecords')
    },
  },
}
</script>
