<template>
  <div id="records" class="px-3 overflow-auto">
    <!-- header: title -->
    <header class="d-flex align-items-center py-3" style="height: 10vh;">
      <p class="mb-0 f-subtitle">기록</p>
    </header>

    <!-- body: 전체 기록 -->
    <section v-for="(record, index) in records" :key=index>
      <record-item :record="record"></record-item>
    </section>
  </div>
</template>

<script>
import RecordItem from '@/components/Counseling/RecordItem.vue'

export default {
  name: 'Records',

  components: {
    RecordItem
  },

  computed: {
    records: function () {
      return this.$store.state.records
    }
  }
}
</script>
