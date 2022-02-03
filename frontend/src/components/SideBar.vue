<template>
  <div id="side-bar" class="py-5 text-center">
    <!-- 메뉴: 상담 시작 버튼 -->
    <div class="mx-auto mb-4 part-side-menu f-subtitle" style="background: #ED9C9C;">상담 시작하기</div>

    <!-- 메뉴: 홈 -->
    <div @click="moveToHome" class="mx-auto mb-4 part-side-menu f-subtitle">홈</div>

    <!-- 메뉴: 마이 페이지 -->
    <div @click="moveToProfile" class="mx-auto mb-4 part-side-menu f-subtitle">마이 페이지</div>

    <div v-if="active">
      <!-- 작은 메뉴: 즐겨 찾기 -->
      <div @click="moveToBookmark" class="mx-auto mb-4 part-side-menu-small f-subtitle">북마크</div>
      <!-- 작은 메뉴: 스케줄링 -->
      <div class="mx-auto mb-4 part-side-menu-small f-subtitle">일정 관리</div>
      <!-- 작은 메뉴: 상담 내역 확인 -->
      <div @click="moveToRecords" class="mx-auto mb-4 part-side-menu-small f-subtitle">상담 내역</div>
      <!-- 작은 메뉴: 회원 정보 수정 -->
      <div class="mx-auto mb-4 part-side-menu-small f-subtitle">정보 수정</div>
    </div>

    <!-- 메뉴: 게시판 -->
    <div class="mx-auto mb-4 part-side-menu f-subtitle">이야기</div>

    <!-- 메뉴: 상담사 -->
    <div class="mx-auto mb-4 part-side-menu f-subtitle">상담사</div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  components: {

  },
  data: function () {
    return {
      active: false,
    }
  },
  methods: {
    moveToHome: function () {
      this.active = false
      this.$router.push({name: 'Home'})
    },
    moveToProfile: function () {
      this.active = true
      this.$router.push({name: 'Profile'})
    },
    moveToBookmark: function () {
      this.$router.push({name: 'Bookmark'})
    },
    moveToRecords: function () {
      this.$router.push({name: 'Records'})
    },
  }
}
</script>

<style>

</style>
