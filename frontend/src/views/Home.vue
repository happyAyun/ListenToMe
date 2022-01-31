<template>
  <div id="home">
    <div class="d-flex">
      <!-- left side bar -->
      <side-bar class="col-2 main-side"></side-bar>

      <!-- content area -->
      <main-content class="col-10"></main-content>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/home/SideBar.vue'
import MainContent from '@/components/home/MainContent.vue'

export default {
  name: 'Home',
  components: {
    SideBar,
    MainContent,
  },
}
</script>

<style>

</style>
