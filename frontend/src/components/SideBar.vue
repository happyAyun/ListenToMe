<template>
  <div id="side-bar" class="p-5 text-center">
    <!-- 메뉴: 상담 시작 -->
    <div class="mx-auto mb-4 main-side-menu font-subtitle" style="background: #ED9C9C;">상담 시작하기</div>

    <!-- 메뉴: 마이 페이지 -->
    <div @click="moveToProfile" class="mx-auto mb-4 main-side-menu font-subtitle">마이 페이지</div>

    <!-- 메뉴: 마이 페이지(dropdown) -->
    <div v-if="active">
      <div class="mx-auto mb-4 main-side-small-menu font-subtitle">북마크</div>
      <div class="mx-auto mb-4 main-side-small-menu font-subtitle">상담 내역</div>
      <div class="mx-auto mb-4 main-side-small-menu font-subtitle">정보 수정</div>
    </div>

    <!-- 메뉴: 게시판 -->
    <div @click="moveToPosts" class="mx-auto mb-4 main-side-menu font-subtitle">이야기</div>

    <!-- 메뉴: 상담사 -->
    <div @click="moveToCounselors" class="mx-auto mb-4 main-side-menu font-subtitle">상담사</div>
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
    moveToProfile: function () {
      this.active = true
      this.$router.push({name: 'Profile'})
    },
    moveToPosts: function () {
      this.active = false
    },
    moveToCounselors: function () {
      this.active = false
    },
  }
}
</script>

<style>

</style>
