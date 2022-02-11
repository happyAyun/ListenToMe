<template>
  <div id="navbar" class="fixed-top">
    <!-- login 되어 있을 때 -->
    <div
      v-if="$store.state.loginState"
      class="d-flex justify-content-between align-items-center px-4"
      :class="{'area-nav': $store.state.isNavbar, 'area-nav-top': !$store.state.isNavbar}"
    >
      <div class="d-flex align-items-center">
        <!-- image: logo -->
        <img
          @click="moveToHome" :src="require('@/assets/images/logo_white.png')"
          alt="logo-image" :class="{'pointer': $store.state.isSideBar}" class="me-2 img-logo"
        >
        
        <!-- section: service name -->
        <p @click="moveToHome" :class="{'pointer': $store.state.isSideBar}" class="mb-0 f-title">Listen to Me</p>
      </div>

      <div v-if="$store.state.isSideBar" class="d-flex">
        <!-- section: buttons -->
        <button @click="Logout" class="me-2 btn-tool f-btn" style="background: #ED9C9C">로그아웃</button>
      </div>
    </div>

    <!-- login 안되어 있을 때 -->
    <div
      v-else
      class="d-flex justify-content-between align-items-center px-4"
      :class="{'area-nav': $store.state.isNavbar, 'area-nav-top': !$store.state.isNavbar}"
    >
      <div class="d-flex align-items-center">
        <!-- image: logo -->
        <img @click="moveToHome" :src="require('@/assets/images/logo_white.png')" alt="logo-image" class="me-2 img-logo">
        
        <!-- section: service name -->
        <p @click="moveToHome" id="logo" class="mb-0 f-title">Listen to Me</p>
      </div>

      <div class="d-flex">
        <!-- section: buttons -->
        <button @click="moveToSignup" class="me-3 btn-tool f-btn">회원가입</button>
        <button @click="moveToLogin" class="me-3 btn-tool f-btn">로그인</button>
        <button @click="moveToLoginCounselor" class="me-2 btn-tool f-btn" style="width: 9vw">상담사 로그인</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NavBar',

  methods: {
    ...mapActions([
      'Logout',
    ]),

    moveToHome: function () {
      this.$router.push({name: 'Home'})
        .catch(() => {})
    },

    moveToSignup: function () {
      this.$store.dispatch('moveDown')
      this.$router.push({name: 'SignupForClient'})
    },

    moveToLogin: function () {
      this.$store.dispatch('moveDown')
      this.$router.push({name: 'LoginForClient'})
    },

    moveToLoginCounselor: function () {
      this.$store.dispatch('moveDown')
      this.$router.push({name: 'LoginForCounselor'})
    }
  },
}
</script>
