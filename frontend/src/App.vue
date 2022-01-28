<template>
  <div id="app">
    <header>
      <nav-bar/>
    </header>
    <div> 
      <router-view/>
    </div> 
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>

</style>
