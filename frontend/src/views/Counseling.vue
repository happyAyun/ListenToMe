<template>
  <div id="counseling">
    <room-header></room-header>

    <div class="d-flex">
      <div class="col-9">
        <div @click="sendMessage" v-if="$store.state.isMsg" class="float-end sty-message">emotion recognition data</div>
        <p>streaming area</p>
      </div>

      <div v-if="$store.state.isDetails===false" class="col-3">
        <memo v-if="$store.state.isMemo"></memo>
        <records v-else ></records>
      </div>
      <div v-else class="col-3">
        <record-item></record-item>
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
import RecordItem from '@/components/counseling/RecordItem.vue'

export default {
  name: 'Counseling',
  components: {
    RoomHeader,
    RoomFooter,
    Memo,
    Records,
    RecordItem,
  },
  methods: {
    sendMessage: function () {
      this.$store.dispatch('sendMessage')
    },
  }
}
</script>
