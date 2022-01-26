<template>
  <div id="counseling">
    <room-header></room-header>

    <div class="d-flex">
      <div class="col-9">
        <p>streaming area</p>
      </div>

      <div class="col-3">
        <memo></memo>
      </div>
    </div>

    <room-footer></room-footer>
  </div>
</template>

<script>
import RoomHeader from '@/components/counseling/RoomHeader.vue'
import RoomFooter from '@/components/counseling/RoomFooter.vue'
import Memo from '@/components/counseling/Memo.vue'

export default {
  name: 'Counseling',
  components: {
    RoomHeader,
    RoomFooter,
    Memo,
  },
}
</script>
