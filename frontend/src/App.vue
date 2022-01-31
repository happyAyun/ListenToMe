<template>
  <div id="app">
    <div v-if="$route.path.includes('/counselor')">
      <header>
        <counselor-nav-bar/>
      </header>
    </div>
    <div v-else>
      <header>
        <nav-bar/>
      </header>
    </div>

    <div class="d-flex">
      <!-- left side bar -->
      <side-bar class="col-2 main-side"></side-bar>

      <!-- routing area -->
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Client/NavBar.vue'
import CounselorNavBar from '@/components/Counselor/CounselorNavBar.vue'
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    CounselorNavBar,
    SideBar,
  }
}
</script>

<style>

</style>
