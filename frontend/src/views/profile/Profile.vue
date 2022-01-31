<template>
  <div id="profile" class="col-10 p-5">
    <div class="mx-auto my-5 p-4 profile-content">
      <!-- header -->
      <div class="d-flex">
        <!-- name -->
        <p class="col-3 ps-2 font-title">James 상담사</p>

        <div class="col-9">
          <!-- introduction: one line -->
          <p class="mb-2 font-subtitle">"치유의 길을 함께 걸어가는 든든한 조력자가 되겠습니다."</p>

          <!-- domain -->
          <div class="d-flex">
            <p class="mb-0 me-2 px-2 py-1 font-normal profile-btn">우울</p>
            <p class="mb-0 me-2 px-2 py-1 font-normal profile-btn">무기력</p>
            <p class="mb-0 me-2 px-2 py-1 font-normal profile-btn">자살</p>
          </div>
        </div>
      </div>
      
      <hr class="mb-5">

      <div class="d-flex">
        <div class="col-5 text-center">
          <!-- profile image -->
          <img src="https://icon-library.com/images/default-user-icon/default-user-icon-26.jpg" alt="profile" class="mb-3">

          <!-- history -->
          <div class="mx-3 p-3 profile-area">
            <p class="font-normal">중앙대학교 일반대학원 임상심리학 전공 석사 졸업</p>
            <p class="font-normal">전문상담사 2급 (한국상담학회)</p>
            <p class="mb-0 font-normal">정신건강임상심리사 1급 (보건복지부)</p>
          </div>
        </div>

        <div class="col-6 mx-auto p-3 profile-area">
          <p class="font-subtitle">치유와 성장으로 가는 길 함께해요</p>
          <p class="font-subtitle">누구나 아프고, 실수하고 상처받는 존재입니다.</p>
          <p class="font-subtitle">선생님의 치유, 회복, 성장의 과정에 함께 하겠습니다.</p>
          <p class="mb-0 font-subtitle">얼어붙은 맘과 몸에 따뜻한 봄을 가져갈 그여정에 함께 걷고 싶습니다.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  components: {

  },
  data: function () {
    return {

    }
  }
}
</script>

<style>

</style>
