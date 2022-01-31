<template>
  <div id="records" class="col-10">
    <!-- 진행 예정 상담 -->
    <div class="mx-5 mb-5 pt-5">
      <!-- title -->
      <div class="mb-4 d-flex">
        <p class="font-title">진행 예정 상담</p>
      </div>

      <!-- content -->
      <ul class="d-flex list-group">
        <!-- header -->
        <li class="list-group-item d-flex profile-records" style="background: #FFDF70;">
          <p class="col-2 mb-0 font-subtitle">번호</p>
          <p class="col-2 mb-0 font-subtitle">상담사</p>
          <p class="col-3 mb-0 font-subtitle">상담 날짜</p>
          <p class="col-3 mb-0 font-subtitle">상담 일시</p>
          <p class="col-2 mb-0 font-subtitle">상태</p>
        </li>
        
        <li v-for="(record, index) in records" :key=index class="list-group-item d-flex profile-records">
          <p class="col-2 mb-0 font-subtitle">{{ record.id }}</p>
          <p class="col-2 mb-0 font-subtitle">{{ record.counselor }}</p>
          <p class="col-3 mb-0 font-subtitle">{{ record.date }}</p>
          <p class="col-3 mb-0 font-subtitle">{{ record.time }}</p>
          <p class="col-2 mb-0 font-subtitle">승인</p>
        </li>
      </ul>
    </div>

    <!-- 종료된 상담 -->
    <div class="mx-5 mb-5 pt-5">
      <!-- title -->
      <div class="mb-4 d-flex">
        <p class="font-title">종료된 상담</p>
      </div>

      <!-- content -->
      <ul class="d-flex list-group">
        <!-- header -->
        <li class="list-group-item d-flex profile-records" style="background: #FBC1AD;">
          <p class="col-2 mb-0 font-subtitle">번호</p>
          <p class="col-2 mb-0 font-subtitle">상담사</p>
          <p class="col-3 mb-0 font-subtitle">상담 날짜</p>
          <p class="col-3 mb-0 font-subtitle">상담 일시</p>
          <p class="col-2 mb-0 font-subtitle">기록</p>
        </li>
        
        <li v-for="(record, index) in records" :key=index class="list-group-item d-flex profile-records">
          <p class="col-2 mb-0 font-subtitle">{{ record.id }}</p>
          <p class="col-2 mb-0 font-subtitle">{{ record.counselor }}</p>
          <p class="col-3 mb-0 font-subtitle">{{ record.date }}</p>
          <p class="col-3 mb-0 font-subtitle">{{ record.time }}</p>
          <p class="col-2 mb-0 font-subtitle">보기</p>
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
          time: '15:00 ~ 17:00'
        },
        {
          id: 2,
          counselor: 'Claire',
          date: '2022-01-31',
          time: '15:00 ~ 17:00'
        },
        {
          id: 3,
          counselor: 'Jake',
          date: '2022-01-31',
          time: '15:00 ~ 17:00'
        },
      ]
    }
  }
}
</script>

<style>

</style>
