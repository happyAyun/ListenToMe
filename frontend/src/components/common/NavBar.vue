<template>
  <div class="main-header">
    <div class="hide-on-small">
      <div class="logo-wrapper" @click="goToHome">Listen to Me</div>
      <div class="tool-wrapper">
        <button class="nav-btn" @click="goToSignupPage">Sign up</button>
        <button class="nav-btn" @click="goToLoginPage">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  components: {
  },
  methods: {
    goToHome: function () {
      this.$router.push({
        name: 'Home'
      }).catch(()=>{});
    },
    goToSignupPage: function () {
      this.$router.push({
        name: 'SignupPage'
      })
    },
    goToLoginPage: function () {
      this.$router.push({
        name: 'LoginPage'
      })
    }
  }
}
</script>

<style>
.main-header {
  width: 100%;
  padding: 10px 20px;
  background-color: #DBEAF8;
}

.main-header .hide-on-small .logo-wrapper {
  cursor: pointer;
  display: inline-block;
}

.main-header .hide-on-small .tool-wrapper {
  float: right;
  margin-right: 3%;
}

.main-header .hide-on-small .tool-wrapper .nav-btn {
  background: #94BCF0;
  border-radius: 90px;
  border: 0;
  margin-left: 10px;
  cursor: pointer;
}
</style>