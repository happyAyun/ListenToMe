<template>
  <div id="side-bar" class="py-5">

    <!-- button: 상담실, loginState: 0 -->
    <div v-if="$store.state.loginState" class="d-flex justify-content-center mb-3">
      <button @click="moveToCounseling" class="menu f-subtitle" style="background: #ED9C9C">상담실</button>
    </div>

    <!-- button: 홈, loginState: ALL -->
    <div class="d-flex justify-content-center mb-3">
      <button @click="moveToHome" class="menu f-subtitle">홈</button>
    </div>

    <!-- button: 마이페이지, loginState: 1 -->
    <div v-if="$store.state.loginState === 1">
      <div class="d-flex justify-content-center mb-3">
        <button @click="toggleMypageBM" class="menu f-subtitle">마이 페이지</button>
      </div>

      <!-- button: 마이페이지 작은 메뉴 -->
      <div v-if="active">
        <!-- button: 북마크 -->
        <div class="d-flex justify-content-center mb-3">
          <button @click="moveToBookmark" class="menu-small f-normal-bold">북마크</button>
        </div>

        <!-- button: 상담 내역 -->
        <div class="d-flex justify-content-center mb-3">
          <button @click="moveToRecords" class="menu-small f-normal-bold">상담 내역</button>
        </div>

        <!-- button: 정보 수정 -->
        <div class="d-flex justify-content-center mb-3">
          <button class="menu-small f-normal-bold">정보 수정</button>
        </div>
      </div>
    </div>

    <!-- button: 마이페이지, loginState: 2 -->
    <div v-else-if="$store.state.loginState === 2">
      <div class="d-flex justify-content-center mb-3">
        <button @click="toggleMypagePF" class="menu f-subtitle">마이 페이지</button>
      </div>

      <!-- button: 마이페이지 작은 메뉴 -->
      <div v-if="active">
        <!-- button: 일정 관리 -->
        <div class="d-flex justify-content-center mb-3">
          <button @click="moveToProfile" class="menu-small f-normal-bold">프로필</button>
        </div>

        <!-- button: 일정 관리 -->
        <div class="d-flex justify-content-center mb-3">
          <button class="menu-small f-normal-bold">일정 관리</button>
        </div>

        <!-- button: 상담 내역 -->
        <div class="d-flex justify-content-center mb-3">
          <button @click="moveToRecords" class="menu-small f-normal-bold">상담 내역</button>
        </div>

        <!-- button: 정보 수정 -->
        <div class="d-flex justify-content-center mb-3">
          <button class="menu-small f-normal-bold">정보 수정</button>
        </div>
      </div>
    </div>

    <!-- button: 상담실, loginState: 0 -->
    <div class="d-flex justify-content-center mb-3">
      <button @click="moveToCounselors" class="menu f-subtitle">리스너</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',

  data: function () {
    return {
      active: false,
    }
  },
  
  methods: {
    moveToCounseling: function () {
      this.active = false
      this.$router.push({name: 'CounselingSetting'})
    },

    moveToHome: function () {
      this.active = false
      this.$router.push({name: 'Home'})
    },

    moveToBookmark: function () {
      this.$router.push({name: 'Bookmark'})
    },
    moveToProfile: function () {
      this.$router.push({name: 'Profile'})
    },

    toggleMypageBM: function () {
      this.active = !this.active
      this.moveToBookmark()
    },
    toggleMypagePF: function () {
      this.active = !this.active
      this.moveToProfile()
    },

    moveToRecords: function () {
      this.$router.push({name: 'Records'})
    },

    moveToCounselors: function () {
      this.$router.push({name: 'Counselors'})
    }
  }
}
</script>
