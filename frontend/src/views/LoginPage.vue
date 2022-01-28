<template>
  <div id="LoginPage">
    <form @submit.prevent="submitlogin">
      <img class="custom-login-logo" :src="loginlogo" alt="loginlogo">
      <h1>USER LOGIN</h1>
      <div class="custom-checkbox">
        <input type="checkbox" v-model="type" value="user" @click="clickCheck" /> 개인
        <input type="checkbox" v-model="type" value="counselor" @click="clickCheck" /> 전문가
      </div>
      <div class="custom-login-content">
        <input 
          class="custom-login-input"
          type="email" 
          placeholder="email" 
          v-model.trim="login.email">
      </div>
      <div class="custom-login-content">
        <input 
          class="custom-login-input"
          type="password" 
          placeholder="password" 
          v-model.trim="login.password">
      </div>
      <div class="custom-login-btn">
        <div v-if="isClient">
          <button class="login-btn" @click.prevent="LoginForCounselor(login)">LOGIN</button>
          <button style="background: #ED9C9C;" class="login-btn" @click="goToSignup">JOIN</button>
        </div>
        <div v-else>
          <button class="login-btn" @click.prevent="Login(login)">LOGIN</button>
          <button style="background: #ED9C9C;" class="login-btn" @click="goToSignup">JOIN</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import loginlogo from '@/assets/login-logo.png'
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  data: function () {
    return {
      isClient: true,
      loginlogo,
      type: [],
      login: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    ...mapActions([
      'Login',
      'LoginForCounselor',
    ]),
    clickCheck(event) {
      for(let i=0; i<this.type.length; i++){
        if(this.type[i] !== event.target.value){
        console.log(this.type[i])
        this.type.splice(i,1);
        }
      this.isClient = !this.isClient
      console.log(this.isClient)
      }
    },
    submitlogin() { 
      console.log("email = " + this.login.email); 
      console.log("pass = " + this.login.password);
    },
    goToSignup() {
      this.$router.push({
        name: 'SignupForClient'
      })
    }
  },
  created: function () {
    document.body.style.backgroundColor = "#FFF7EC";
  },
  destroyed: function () {
    document.body.style.backgroundColor = null;
  },
}
</script>

<style>
.custom-login-logo {
  display: block;
  margin: 40px auto;
}

.custom-login-content {
  width: 30%;
  background-color: #E9E5E5;
  margin: 30px auto;
  padding: 10px 15px;
}

.custom-checkbox {
  text-align: center;
  margin: 0px auto;
  font-size: 20px;
}

.custom-login-input {
  width: 100%;
  border: none;
  outline: none;
  color: #787878;
  font-size: 20px;
  height: 30px;
  background: none;
}

.custom-login-btn {
  width: 100%;
  text-align: center
}

.login-btn {
  width: 15%;
  background-color: #DBEAF8;
  border-radius: 90px;
  border: none;
  font-size: 25px;
  color: #695D5D;
  padding: 10px 15px;
  display: inline-block;
  margin: 0 15px;
}
</style>