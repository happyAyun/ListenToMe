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
    <div> 
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/Client/NavBar.vue'
import CounselorNavBar from '@/components/Counselor/CounselorNavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    CounselorNavBar
  }
}
</script>

<style>

</style>
