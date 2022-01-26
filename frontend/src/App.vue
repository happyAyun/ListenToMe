<template>
  <div id="App" class="container">
    <div class="d-flex justify-content-end mt-3">
      <router-link :to="{name: 'Home'}" class="me-3 fs-5 sty-router">홈</router-link>
      <router-link :to="{name: 'Counseling'}" class="fs-5 sty-router">상담</router-link>
    </div>

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
a.router-link-exact-active {
  color: black;
}
</style>
