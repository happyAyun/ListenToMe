<template>
  <div class="container">
    <h1>회원가입</h1>
    <ul class="select-list">
      <li>
        <span>개인</span>
      </li>
      <li @click="loadDataPro">
        <span>전문가</span>
      </li>
    </ul>
    <div class="divider"></div>
    <div class="divider-off"></div>
    <form class="SignupForm" @submit.prevent="submitForm">
      <div class="content-custom">
        <input
          class="input-custom"
          type="email"
          placeholder="이메일"
          v-model.trim="credentials_signup.email" required />
      </div>
      <div class="content-custom">
        <input
          class="input-custom"
          type="password"
          placeholder="비밀번호"
          v-model.trim="credentials_signup.password" required />
      </div>
      <div class="content-custom">
        <input
          class="input-custom"
          type="text"
          placeholder="이름"
          v-model.trim="credentials_signup.name" required />
      </div>
      <div class="content-custom">
        <input 
          class="input-custom"
          type="text"
          placeholder="핸드폰 번호"
          maxlength="13"
          v-model.trim="credentials_signup.phoneNumber" 
          @input="acceptNumber"
          required />
      </div>
      <div class="content-custom">
        <input
          class="input-custom"
          type="text"
          placeholder="닉네임"
          v-model.trim="credentials_signup.nickname" required />
      </div>
      <div class="content-custom">
        <select class="i-custom" v-model="credentials_signup.gender">
          <option value="">성별</option> 
          <option 
            v-for="(item, index) in genderList" 
            :key="index" 
            :value="item.value" 
            > 
              {{ item.text }} 
            </option> 
        </select>
      </div>
      <div class="content-custom">
        <label class="label-custom" for="date">생년월일</label> 
        <span> 
          <input 
            class="i-custom" 
            type="date" 
            id="date" 
            v-model="credentials_signup.birth"
            required/> 
        </span>
      </div>
      <button class="signup-btn" @click="Signup(credentials_signup)">가입</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignupForClient',
  data: function() {
    return {
      // isClicked: true,
      // isClickedPro: false,
      credentials_signup : {
        email: '',
        password: '',
        name: '',
        phoneNumber: '',
        nickname: '',
        gender: '',
        birth: '',
        point: '1000',
      },
      genderList: [
        { 
          value: "m", 
          text: "남성", 
        }, 
        { 
          value: "f", 
          text: "여성", 
        }, 
      ],
    }
  },
  methods: {
    ...mapActions([
      'Signup',
    ]),
    loadDataPro() {
      this.$router.push({
        name: 'SignupForCounselor'
      })
    },
    acceptNumber() {
      var x = this.credentials_signup.phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
      this.credentials_signup.phoneNumber = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
    },
    submitForm: function () { 
      console.log("email = " + this.credentials_signup.email); 
      console.log("password = " + this.credentials_signup.password);
      console.log("name = " + this.credentials_signup.name);
      console.log("phoneNumber = " + this.credentials_signup.phoneNumber);
      console.log("nickname = " + this.credentials_signup.nickname); 
      console.log("gender = " + this.credentials_signup.gender); 
      console.log("birth = " + this.credentials_signup.birth);
      console.log("point = " + this.credentials_signup.point);
    }
  }
}
</script>

<style>
.container {
  text-align: center;
}

h1 {
  font-size: 44px;
  color: #695D5D;
  font-weight: bold;
  text-align: center;
}

.select-list {
  list-style: none;
  padding: 0px;
  text-align: center;
}

.select-list li {
  display: inline-block;
  padding: 0px 170px;
  font-size: 20px;
}

.divider {
  display: inline-block;
  border-bottom: solid 4px #fad0a3;
  width: 25%;
  margin: 5px 30px;
}

.divider-off {
  display: inline-block;
  border-bottom: solid 4px #695D5D;
  opacity: .3;
  width: 25%;
  margin: 5px 30px;
}

.SignupForm {
  position: absolute;
  width: 60%;
  padding: auto 20px;
  background-color:#FFEDDA;
  text-align: center;
  top: 60%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 15px;
}

.content-custom {
  width: 70%;
  background-color:#FFFCF8;
  text-align: center;
  margin: 40px auto;
  padding: 10px 15px;
  border-radius: 10px;
}

.input-custom {
  width: 100%;
  border: none;
  outline: none;
  color: #787878;
  font-size: 20px;
  height: 30px;
  background: none;
}

.label-custom {
  color: #787878;
  font-size: 20px;
}

.i-custom {
  width: 100%;
  border: none;
  outline: none;
  color: #787878;
  font-size: 20px;
  height: 30px;
  background: none;
}

.signup-btn {
  width: 20%;
  line-height: 10px;
  background-color: #ED9C9C;
  border: none;
  padding: 10px 15px;
  margin: 20px auto;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 30px;
}
</style>