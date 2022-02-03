<template>
  <div id="record-item" class="mb-3">
    <!-- 영역: 바디 -->
    <div class="p-3 area-record-body">
      <!-- 폼: 제목 -->
      <div class="d-flex justify-content-center mb-3">
        <p type="text" placeholder="제목" class="px-3 font-normal area-record">{{ record.title }}</p>
      </div>

      <!-- 폼: 내용 -->
      <div class="d-flex justify-content-center">
        <p placeholder="내용" class="p-3 font-normal area-record">{{ record.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecordItem',
  components: {

  },
  props: {
    record: {
      type: Object,
    }
  },
  methods: {

  }
}
</script>
