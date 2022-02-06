<template>
  <div id="app">
    <!-- nav bar -->
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

    <div :class="{ 'd-flex': $store.state.isSideBar }">
      <!-- left side bar -->
      <side-bar v-if="$store.state.isSideBar" class="col-2 area-side"></side-bar>

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
  },
}
</script>

<style>

</style>
