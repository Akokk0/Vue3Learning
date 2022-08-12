<template>
  <div>
    <h1>vue-router 的基本使用</h1>
    <router-link to="/home">Home</router-link>&nbsp;
    <router-link to="/movie">Movie</router-link>&nbsp;
    <router-link to="/about">About</router-link>
    <hr/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>

</style>
