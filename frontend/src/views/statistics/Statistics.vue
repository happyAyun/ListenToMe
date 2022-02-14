<template>
<div>
  <div class="col-10 d-flex justify-content-center align-items-center" :style="{marginLeft: '100px'}"><gender></gender> <age></age></div>
  <div><month></month></div>
</div>
  
  
</template>

<script>
import Gender from '@/components/statistics/Gender.vue'
import Age from '@/components/statistics/Age.vue'
import Month from '@/components/statistics/Month.vue'

export default {
  name:'Statistics',
  components: {
    Gender,
    Age,
    Month,
  },
}
</script>