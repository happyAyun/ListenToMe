<template>
  <div id="counseling">
    <div class="d-flex justify-content-center">
      <button @click="moveToRoom" class="btn btn-lg btn-outline-success">상담 시작</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counseling',
  components: {

  },
  methods: {
    moveToRoom: function () {
      this.$router.push({name: 'Room'})
    }
  }
}
</script>
