<template>
  <div id="list" class="col-10 p-5">
    <!-- 진행 예정 상담 -->
    <div class="mb-5 pt-5 pb-2 px-5">
      <!-- title -->
      <div class="mb-4 d-flex justify-content-between align-items-center">
        <p class="f-title">진행 예정 상담</p>
        <p class="text-center f-subtitle part-side-menu-small">300 points</p>
      </div>

      <!-- content -->
      <ul class="d-flex list-group">
        <!-- header -->
        <li class="list-group-item d-flex" style="background: #FFDF70;">
          <p class="col-2 mb-0 f-subtitle">번호</p>
          <p class="col-2 mb-0 f-subtitle">상담사</p>
          <p class="col-3 mb-0 f-subtitle">상담 날짜</p>
          <p class="col-3 mb-0 f-subtitle">상담 일시</p>
          <p class="col-2 mb-0 f-subtitle">상태</p>
        </li>
        
        <!-- body -->
        <li v-for="(record, index) in records" :key=index class="list-group-item d-flex profile-records">
          <p class="col-2 mb-0 f-normal">{{ record.id }}</p>
          <p class="col-2 mb-0 f-normal">{{ record.counselor }}</p>
          <p class="col-3 mb-0 f-normal">{{ record.date }}</p>
          <p class="col-3 mb-0 f-normal">{{ record.time }}</p>
          <p class="col-2 mb-0 f-normal">승인</p>
        </li>
      </ul>
    </div>

    <!-- 종료된 상담 -->
    <div class="pt-3 px-5">
      <!-- title -->
      <div class="mb-4 d-flex">
        <p class="f-title">종료된 상담</p>
      </div>

      <!-- content -->
      <ul class="d-flex list-group">
        <!-- header -->
        <li class="list-group-item d-flex" style="background: #ED9C9C;">
          <p class="col-2 mb-0 f-subtitle">번호</p>
          <p class="col-2 mb-0 f-subtitle">상담사</p>
          <p class="col-2 mb-0 f-subtitle">상담 날짜</p>
          <p class="col-2 mb-0 f-subtitle">상담 일시</p>
          <p class="col-2 mb-0 f-subtitle">차감 포인트</p>
          <p class="col-2 mb-0 f-subtitle">기록</p>
        </li>
        
        <!-- body -->
        <li v-for="(record, index) in records" :key=index class="list-group-item d-flex profile-records">
          <p class="col-2 mb-0 f-normal">{{ record.id }}</p>
          <p class="col-2 mb-0 f-normal">{{ record.counselor }}</p>
          <p class="col-2 mb-0 f-normal">{{ record.date }}</p>
          <p class="col-2 mb-0 f-normal">{{ record.time }}</p>
          <p class="col-2 mb-0 f-normal">{{ record.point }}</p>
          <p class="col-2 mb-0 f-normal">보기</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Records',
  components: {

  },
  data: function () {
    return {
      // dummy data
      records: [
        {
          id: 1,
          counselor: 'James',
          date: '2022-01-31',
          time: '15:00 ~ 17:00',
          point: 200,
        },
        {
          id: 2,
          counselor: 'Claire',
          date: '2022-01-31',
          time: '15:00 ~ 17:00',
          point: 200,
        },
        {
          id: 3,
          counselor: 'Jake',
          date: '2022-01-31',
          time: '15:00 ~ 17:00',
          point: 200,
        },
      ]
    }
  }
}
</script>

<style>

</style>
