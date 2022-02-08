<template>
  <div id="counseling-main" class="col-10 d-flex justify-content-center align-items-center">
    <div class="p-5 part-room-setting">
      <!-- header: title -->
      <header class="mb-5 text-center">
        <p class="f-title-bold">상담실에 입장하기</p>
      </header>

      <!-- body: form -->
      <section class="mb-5">
        <!-- form: participant -->
        <div class="d-flex mb-4">
          <label for="participant" class="col-2 form-label f-subtitle">Participant</label>
          <input v-model="myUserName" type="text" id="participant" class="form-control f-normal" required>
        </div>

        <!-- form: room -->
        <div class="d-flex mb-4">
          <label for="session" class="col-2 form-label f-subtitle">Room</label>
          <input v-model="mySessionId" type="text" id="session" class="form-control f-normal" required>
        </div>

        <!-- form: sticker -->
        <div class="d-flex justify-content-center align-items-center">
          <input @click="toggleSticker" class="me-2 form-check-input" type="checkbox" id="sticker">
          <label class="form-check-label f-normal" for="sticker">얼굴에 스티커를 씌우시겠습니까?</label>
        </div>
      </section>

      <!-- footer: OK button -->
      <footer class="d-flex justify-content-center">
        <button @click="joinSession()" class="btn-ok f-btn">입장</button>
      </footer>
    </div>
  </div>

  <!-- dummy -->
  <!-- <div id="join" class="pt-2 px-4">
    <div id="join-dialog"></div>
  </div> -->
</template>

<script>
import { mapGetters } from 'vuex'  // mapGetters 헬퍼

export default {
  name: 'CounselingMain',

  data () {
    return {
      mySessionId: '',
      myUserName: '',  //here username
    }
  },

  computed: {
    ...mapGetters([ 
      'GE_USERSESSION',
      'GE_USERID',
      // {myName: 'getFirstItem'}, <-- getFirstItem을 myName으로 매핑
    ]),
  },

  methods: {
    joinSession () {
      this.$store.dispatch('SE_USERID', this.myUserName)
      this.$store.dispatch('SE_USERSESSION', this.mySessionId)
      this.$store.dispatch('toggleSideBar')  // side bar 토글링
      this.$router.push({name: 'Counseling'})
    },

    // for toggling
    toggleSticker: function () {
      this.$store.dispatch('toggleSticker')
      console.log(this.$store.state.isSticker)
    },
  },

  created () {
    this.mySessionId = this.GE_USERSESSION
    this.myUserName = this.GE_USERID
  },
}
</script>

<style>

</style>
