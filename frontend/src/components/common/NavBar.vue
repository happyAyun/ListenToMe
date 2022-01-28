<template>
  <div id="navbar">
    <nav class="navbar navbar-expand-lg nav-bg">
      <div class="container-fluid">
        <p class="mb-0 fs-3" @click="goToHome">Listen to Me</p>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul class="navbar-nav mb-2 mb-lg-0 me-4">
            <div v-if="isLoggedIn">
              <li class="nav-item">
                <a @click="Logout" class="btn nav-btn" href="" role="button">Logout</a>
              </li>
            </div>
            <div v-else class="d-flex">
              <li class="nav-item me-4">
                <button type="button" class="btn nav-btn" @click="goToSignupPage">
                  Sign Up
                </button>
              </li>
              <li class="nav-item">
                <button type="button" class="btn nav-btn" @click="goToLoginPage">
                  Login
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NavBar',
  components: {
  },
  methods: {
    ...mapActions([
      'Logout',
    ]),
    goToHome: function () {
      this.$router.push({
        name: 'Home'
      }).catch(()=>{});
    },
    goToSignupPage: function () {
      this.$router.push({
        name: 'SignupForClient'
      })
    },
    goToLoginPage: function () {
      this.$router.push({
        name: 'LoginPage'
      })
    }
  },
  computed: {
    ...mapGetters([
      'isLoggedIn',
    ]),
  }
}
</script>

<style>
.nav-bg{
  background-color: #DBEAF8;
}

.nav-btn {
  background: #94BCF0;
  border-radius: 90px;
  border: 0;
  cursor: pointer;
}
</style>