<template>
  <div id="counseling-main" class="col-10 d-flex justify-content-center align-items-center">
    <div class="p-5 part-room-setting">
      <!-- header -->
      <p class="f-subtitle-bold">Listen to ME</p>
      
      <hr class="mb-4">

      <!-- body -->
      <div id="join" class="pt-2 px-4">
        <div id="join-dialog">
          <p class="mb-5 text-center f-title-bold">상담실에 입장하기</p>

          <div class="d-flex mb-4">
            <label class="col-2 form-label f-subtitle">Participant</label>
            <input v-model="myUserName" class="form-control" type="text" required>
          </div>

          <div class="d-flex mb-5">
            <label class="col-2 form-label f-subtitle">Session</label>
            <input v-model="mySessionId" class="form-control" type="text" required>
          </div>

          <div class="d-flex justify-content-center">
            <button @click="joinSession()" class="btn-ok f-normal">입장</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>



import { mapGetters } from 'vuex' // mapGetters 헬퍼
export default {
    name: 'CounselingMain',

    data() {
        return {
			mySessionId: '',
			myUserName: '', //here username
        };
    },

  computed: {
    ...mapGetters([ 
        'GE_USERSESSION',
        'GE_USERID'
        // { myName: 'getFirstItem' }, <-- getFirstItem 를 myName 으로 매핑
    ]) 
  },
    created(){
      this.mySessionId = this.GE_USERSESSION;
      this.myUserName =  this.GE_USERID;
  },
    methods: {
		joinSession () {
            this.$store.dispatch('SE_USERID',this.myUserName);
            this.$store.dispatch('SE_USERSESSION',this.mySessionId);
            this.$router.push({name: 'Counseling'})
        }
    }
}
</script>

<style>

</style>
