<template>
  <div id="counseling">
    <!-- 영역: 헤더 -->
    <room-header></room-header>

    <!-- 영역: 바디 -->
    <div class="d-flex">
      <!-- 영역: 스트리밍 -->
      <div class="col-9">
        <!-- 모달(토클링): 감정 분석 -->
        <div @click="toggleInfo" v-if="$store.state.isInfo" class="float-end font-normal modal-info">emotion recognition data</div>

        <!-- 영역: 영상 -->
        <p>streaming area</p>
      </div>

      <!-- 영역: 사이드바 -->
      <div class="col-3">
        <!-- 영역: 메모 -->
        <memo v-if="$store.state.isMemo"></memo>

        <!-- 영역: 기록 -->
        <records v-else class="overflow-auto"></records>
      </div>
    </div>

    <!-- 영역: 푸터 -->
    <room-footer></room-footer>
  </div>
</template>

<script>
import RoomHeader from '@/components/counseling/RoomHeader.vue'
import RoomFooter from '@/components/counseling/RoomFooter.vue'
import Memo from '@/components/counseling/Memo.vue'
import Records from '@/components/counseling/Records.vue'

export default {
  name: 'Counseling',
  components: {
    RoomHeader,
    RoomFooter,
    Memo,
    Records,
  },
  methods: {
    toggleInfo: function () {
      this.$store.dispatch('toggleInfo')
    },
  }
}
</script>
