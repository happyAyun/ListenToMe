<template>
  <div id="records" class="px-4 sty-side-others">
    <p class="ms-1 mb-4 pt-4 fs-4 sty-font">Records</p>

    <div @click="showDetails" class="mb-3 sty-records"></div>
    <div class="mb-3 sty-records"></div>
    <div class="mb-3 sty-records"></div>
    <div class="mb-3 sty-records"></div>
    <div class="mb-3 sty-records"></div>
  </div>
</template>

<script>
export default {
  name: 'Records',
  components: {

  },
  methods: {
    showDetails: function () {
      this.$store.dispatch('showDetails')
    }
  }

}
</script>
