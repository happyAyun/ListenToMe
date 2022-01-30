<template>
  <div class="container">
    <div id="signupheader" class="mt-5">
      <h1>회원가입</h1>
      <ul class="select-list d-flex justify-content-evenly mx-5 mt-4 fs-5">
        <li @click="loadData">
          <span>개인</span>
        </li>
        <li @click="loadDataPro">
          <span>전문가</span>
        </li>
      </ul>
      <div v-if="isDefault" id="signupline">
        <div class="divider"></div>
        <div class="divider-off"></div>
      </div>
      <div v-else id="signupline">
        <div class="divider-off"></div>
        <div class="divider"></div>
      </div>
    </div>
    <div v-if="isDefault">
      <signup-for-client/>
    </div>
    <div v-else>
      <signup-for-counselor/>
    </div>
  </div>
</template>

<script>
import SignupForClient from '@/components/Client/SignupForClient.vue'
import SignupForCounselor from '@/components/Counselor/SignupForCounselor.vue'

export default {
  name: 'SignupPage',
  components: {
    SignupForClient,
    SignupForCounselor
  },
  data: function () {
    return {
      isDefault: true
    }
  },
  methods : {
    loadData() {
      this.isDefault = true
      this.$router.push({
        name: 'SignupForClient'
      })
    },
    loadDataPro() {
      this.isDefault = false
      this.$router.push({
        name: 'SignupForCounselor'
      })
    }
  }
}
</script>

<style>

</style>