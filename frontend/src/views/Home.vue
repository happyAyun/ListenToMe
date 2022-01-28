<template>
  <!-- dummy page -->
  <div id="home" class="d-flex justify-content-center mt-4">
    <!-- 버튼: 상담 시작 -->
    <button @click="moveToRoom" class="btn btn-lg btn-outline-success">상담 시작</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    moveToRoom: function () {
      this.$router.push({name: 'Counseling'})
    }
  },
}
</script>
