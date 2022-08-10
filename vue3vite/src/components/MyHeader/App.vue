<template>
  <div class="app-container">
    <MyHeader title="Akokko" color="#fff"></MyHeader>
    <h1>App根组件</h1>
  </div>
</template>

<script>

import MyHeader from "./MyHeader.vue";
export default {
  name: "App",
  components: {MyHeader}
}
</script>

<style scoped lang="less">
  .app-container {
    margin-top: 45px;
  }
</style>
