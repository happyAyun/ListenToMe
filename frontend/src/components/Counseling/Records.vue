<template>
  <div id="records" class="px-4 overflow-auto">
    <!-- 텍스트: 타이틀 -->
    <p class="ms-1 mb-4 pt-4 font-title">Records</p>

    <div v-for="(record, index) in records" :key=index>
      <record-item :record="record"></record-item>
    </div>
  </div>
</template>

<script>
import RecordItem from '@/components/Counseling/RecordItem.vue'

export default {
  name: 'Records',
  components: {
    RecordItem
  },
  data: function () {
    return {
      active: true
    }
  },
  methods: {

  },
  computed: {
    records: function () {
      return this.$store.state.memos
    }
  }
}
</script>
