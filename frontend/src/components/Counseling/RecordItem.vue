<template>
  <div id="record-item" class="mb-3 p-3 part-record">
    <!-- header: 제목 -->
    <p class="mb-0 text-center f-subtitle">{{ record.title }}</p>

    <hr class="my-2">

    <!-- body: 내용 -->
    <p class="mb-0 py-2 f-normal">{{ record.content }}</p>
  </div>
</template>

<script>
export default {
  name: 'RecordItem',

  props: {
    record: {
      type: Object,
    }
  },
}
</script>
