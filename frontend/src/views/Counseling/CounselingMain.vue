<template>
  <div id="profile" class="col-10 p-5">
    <div class="mx-auto my-5 p-4 profile-content">
      <!-- header -->
      <div class="d-flex">
        <!-- name -->
        <p class="col-3 ps-2 font-title">상담 시작하기</p>


      </div>
      
      <hr class="mb-5">

        <div >
          <div id="join">
			<div id="join-dialog" class="jumbotron vertical-center">
				<h1>상담사와 설정한 세션에 입장하기</h1>
				<div class="form-group">
					<p>
						<label>Participant</label>
						<input v-model="myUserName" class="form-control" type="text" required>
					</p>
					<p>
						<label>Session</label>
						<input v-model="mySessionId" class="form-control" type="text" required >
					</p>
					<p class="text-center">
						<button class="btn btn-lg btn-success" @click="joinSession()">Join!</button>
					</p>
				</div>
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

<style lang="scss" scoped>

</style>