<template>
  <div>
    <h3>Lv2 组件 --- {{ color }}</h3>
    <button @click="logMyself"></button>
  </div>
</template>

<script>
export default {
  name: "Lv2",
  inject: ['color'],
  methods: {
    logMyself() {
      console.log(this)
    }
  }
}
</script>

<style lang="less" scoped>

</style>
