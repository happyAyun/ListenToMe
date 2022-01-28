<template>
  <div id="counselorsignupform" class="d-flex justify-content-center mt-5">
    <form class="SignupFormForPro" @submit.prevent="submitForm">
    <!-- <input type="file" id="uploadFile" ref="profileImage" @change="onInputImage"> -->
      <div class="custom-profile mt-5 mx-auto">
        <div v-if="credentials_signup.photo" class="box">
          <img id="preview" v-if="credentials_signup.photo" :src="profile" alt="profile">
        </div>
        <div v-else>
          <img :src="anonymous" alt="anonymous">
        </div>
        <div class="mt-5">
          <input type="file" id="myFile" @change="onFileChange">
        </div>
      </div>
      <div id="counselor-signup-content" class="mt-5">
        <div>
          <input
            type="email"
            placeholder="이메일"
            v-model.trim="credentials_signup.email" required />
        </div>
        <div>
          <input
            type="password"
            placeholder="비밀번호"
            v-model.trim="credentials_signup.password" required />
        </div>
        <div>
          <input
            type="text"
            placeholder="이름"
            v-model.trim="credentials_signup.name" required />
        </div>
        <div>
          <input
            type="text"
            placeholder="닉네임"
            v-model.trim="credentials_signup.nickname" required />
        </div>
        <div>
          <input 
            type="text"
            placeholder="핸드폰 번호"
            maxlength="13"
            v-model.trim="credentials_signup.phoneNumber" 
            @input="acceptNumber"
            required />
        </div>
        <div>
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
        <div>
          <label for="date">생년월일</label> 
          <span> 
            <input 
              class="i-custom" 
              type="date" 
              id="date" 
              v-model="credentials_signup.birth"
              required
              /> 
          </span>
        </div>
        <div>
          <input
            type="text"
            placeholder="학위"
            v-model.trim="credentials_signup.degree" required />
        </div>
        <div>
          <input
            type="text"
            placeholder="인사말"
            v-model.trim="credentials_signup.greeting" required />
        </div>
      </div>
      <button @click="SignupForCounselor(credentials_signup)">가입</button>
    </form>
  </div>
</template>

<script>
import anonymous from '@/assets/anonymous.png'
import { mapActions } from 'vuex'

export default {
  name: 'SignupForCounselor',
  data: function() {
    return {
      anonymous,
      profile: '',
      credentials_signup: {
        photo: '',
        email: '',
        password: '',
        name: '',
        phoneNumber: '',
        nickname: '',
        gender: '',
        birth: '',
        degree: '',
        greeting: '',
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
      'SignupForCounselor',
    ]),
    onFileChange(e) {
      const file = e.target.files[0];
      this.profile = URL.createObjectURL(file);
      this.credentials_signup.photo = file.name;
    },
    acceptNumber() {
      var x = this.credentials_signup.phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
      this.credentials_signup.phoneNumber = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
    },
    submitForm: function () {  
      console.log("photo = " + this.credentials_signup.photo); 
      console.log("email = " + this.credentials_signup.email); 
      console.log("password = " + this.credentials_signup.password);
      console.log("name = " + this.credentials_signup.name);
      console.log("phoneNumber = " + this.credentials_signup.phoneNumber);
      console.log("nickname = " + this.credentials_signup.nickname); 
      console.log("gender = " + this.credentials_signup.gender); 
      console.log("birth = " + this.credentials_signup.birth);
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
}

.custom-profile {
  /* display: inline-block; */
  width: 40%;
}

.box {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 70%;
  overflow: hidden;
}

#preview { 
  display: block;
  text-align: center;
  width: 100%;
  object-fit: cover;
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

.SignupFormForPro {
  position: absolute;
  /* clear: both; */
  width: 60%;
  padding: auto 20px;
  background-color:#FFEDDA;
  text-align: center;
  border-radius: 15px;
}

#counselor-signup-content div {
  width: 70%;
  background-color:#FFFCF8;
  text-align: center;
  margin: 30px auto;
  padding: 10px 15px;
  border-radius: 10px;
}

#counselorsignupform input {
  width: 100%;
  border: none;
  outline: none;
  color: #787878;
  font-size: 20px;
  height: 30px;
  background: none;
}

#counselorsignupform label {
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

#counselorsignupform button {
  width: 20%;
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