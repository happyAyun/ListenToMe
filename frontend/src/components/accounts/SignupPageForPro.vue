<template>
  <div class="container">
    <h1>회원가입</h1>
    <ul class="select-list">
      <li @click="loadData">
        <span>개인</span>
      </li>
      <li>
        <span>전문가</span>
      </li>
    </ul>
    <div class="divider-off"></div>
    <div class="divider"></div>
    <form class="SignupFormForPro" @submit.prevent="submitForm">
      <!-- <input type="file" id="uploadFile" ref="profileImage" @change="onInputImage"> -->
      <div class="custom-profile">
        <div v-if="signup.image" class="box">
          <img id="preview" v-if="signup.image" :src="signup.image" alt="profile">
        </div>
        <div v-else>
          <img :src="anonymous" alt="anonymous">
        </div>
        <div class="custom-profile-input">
          <input type="file" @change="onFileChange">
        </div>
      </div>
      <div class="content-side">
        <div class="content-custom-counselor">
          <input
            class="input-custom"
            type="email"
            placeholder="이메일"
            v-model.trim="signup.email" required />
        </div>
        <div class="content-custom-counselor">
          <input
            class="input-custom"
            type="password"
            placeholder="비밀번호"
            v-model.trim="signup.password" required />
        </div>
        <div class="content-custom-counselor">
          <input
            class="input-custom"
            type="text"
            placeholder="이름"
            v-model.trim="signup.name" required />
        </div>
        <div class="content-custom-counselor">
          <input
            class="input-custom"
            type="text"
            placeholder="닉네임"
            v-model.trim="signup.nickname" required />
        </div>
      </div>
      <div class="content-footer">
        <div class="content-custom-counselor">
          <input 
            class="input-custom"
            type="text"
            placeholder="핸드폰 번호"
            maxlength="13"
            v-model.trim="signup.phoneNumber" 
            @input="acceptNumber"
            required />
        </div>
        <div class="content-custom-counselor">
          <select class="i-custom" v-model="signup.gender">
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
        <div class="content-custom-counselor">
          <label class="label-custom" for="date">생년월일</label> 
          <span> 
            <input 
              class="i-custom" 
              type="date" 
              id="date" 
              v-model="signup.birth"
              required /> 
          </span>
        </div>
        <div class="content-custom-counselor">
          <input
            class="input-custom"
            type="text"
            placeholder="학위"
            v-model.trim="signup.degree" required />
        </div>
        <div class="content-custom-counselor">
          <input
            class="input-custom"
            type="text"
            placeholder="인사말"
            v-model.trim="signup.greeting" required />
        </div>
      </div>
      <button class="signup-btn">가입</button>
    </form>
  </div>
</template>

<script>
import anonymous from '@/assets/anonymous.png'

export default {
  name: 'SignupPage',
  data: function() {
    return {
      anonymous,
      signup : {
        image: '',
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
          value: "M", 
          text: "남성", 
        }, 
        { 
          value: "F", 
          text: "여성", 
        }, 
      ],
    }
  },
  methods: {
    // onInputImage () {
    //   this.signup.image = this.$refs.profileImage.files
    // },
    onFileChange(e) {
      const file = e.target.files[0];
      this.signup.image = URL.createObjectURL(file);
    },
    loadData() {
      this.$router.push({
        name: 'SignupPage'
      })
    },
    acceptNumber() {
      var x = this.signup.phoneNumber.replace(/\D/g, '').match(/(\d{0,3})(\d{0,4})(\d{0,4})/);
      this.signup.phoneNumber = !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
    },
    submitForm: function () { 
      console.log("image = " + this.signup.image); 
      console.log("email = " + this.signup.email); 
      console.log("password = " + this.signup.password);
      console.log("name = " + this.signup.name);
      console.log("phoneNumber = " + this.signup.phoneNumber);
      console.log("nickname = " + this.signup.nickname); 
      console.log("gender = " + this.signup.gender); 
      console.log("birth = " + this.signup.birth);
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

.custom-profile {
  display: inline-block;
  width: 30%;
  margin: 20px;
}

.custom-profile-input {
  margin-top: 50px;
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
  margin: 0px auto;
  width: 100%;
  height: 100%;
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
  top: 60%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 15px;
}

.content-side {
  width: 60%;
  display: inline-block;
}

.content-footer {
  clear: both;
}

.content-custom-counselor {
  width: 70%;
  background-color:#FFFCF8;
  text-align: center;
  margin: 30px auto;
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