<template>
  <div id="counseling">
    <room-header></room-header>

    <p>from here</p>

    <room-footer></room-footer>
  </div>
</template>

<script>
import RoomHeader from '@/components/counseling/RoomHeader.vue'
import RoomFooter from '@/components/counseling/RoomFooter.vue'

export default {
  name: 'Counseling',
  components: {
    RoomHeader,
    RoomFooter,
  },
}
</script>
