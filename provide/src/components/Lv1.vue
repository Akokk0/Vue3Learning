<template>
  <div>
    <h3>Lv1 组件</h3>
    <hr/>
    <Lv2></Lv2>
  </div>
</template>

<script>
import Lv2 from "./Lv2.vue";

export default {
  name: "Lv1",
  components: {Lv2}
}
</script>

<style lang="less" scoped>

</style>
