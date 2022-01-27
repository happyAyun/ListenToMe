<template>
  <div id="records" class="px-4 sty-side-others">
    <p class="ms-1 mb-4 pt-4 fs-4 sty-font">Records</p>

    <record-item class="mb-3 sty-records"></record-item>
    <record-item class="mb-3 sty-records"></record-item>
    <record-item class="mb-3 sty-records"></record-item>
    <record-item class="mb-3 sty-records"></record-item>
    <record-item class="mb-3 sty-records"></record-item>
  </div>
</template>

<script>
import RecordItem from '@/components/counseling/RecordItem.vue'

export default {
  name: 'Records',
  components: {
    RecordItem,
  },

}
</script>
