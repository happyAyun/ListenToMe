<template>
  <div id="App">
    <!-- <div id="nav" class="d-flex justify-content-end mt-3 pe-5">
      <router-link :to="{name: 'Home'}" class="me-3 fs-5 sty-router">홈</router-link>
      <router-link :to="{name: 'Counseling'}" class="fs-5 sty-router">상담</router-link>
    </div> -->

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

#nav a {
  color: rgba(0, 0, 0, 0.6);
}

#nav a.router-link-exact-active {
  color: black;
}
</style>
