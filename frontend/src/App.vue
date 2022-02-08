<template>
  <div id="app">
    <!-- nav bar -->
    <header>
      <nav-bar/>
    </header>

    <div :class="{ 'd-flex': $store.state.isSideBar }">
      <!-- left side bar -->
      <side-bar v-if="$store.state.isSideBar" class="col-2 area-side"></side-bar>

      <!-- routing area -->
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/basics/NavBar.vue'
import SideBar from '@/components/basics/SideBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
  },
}
</script>
