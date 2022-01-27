<template>
  <div id="counseling">
    <room-header></room-header>

    <div class="d-flex">
      <div class="col-9">
        <div @click="sendMessage" v-if="$store.state.isMsg" class="float-end sty-message">emotion recognition data</div>
        <p>streaming area</p>
      </div>

      <div v-if="$store.state.isMemo" class="col-3">
        <memo></memo>
      </div>
      <div v-else class="col-3">
        <records></records>
      </div>
    </div>

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
    Records
  },
  methods: {
    sendMessage: function () {
      this.$store.dispatch('sendMessage')
    },
  }
}
</script>
