<template>
  <form class="form-inline" @submit.prevent="onFormSubmit">

    <div class="input-group mb-2 mr-sm-2">
      <div class="input-group-prepend">
        <div class="input-group-text">任务</div>
      </div>
      <input type="text" id="form-control" class="form-control" placeholder="请输入任务信息" v-model.trim="taskName">
    </div>

    <button type="submit" class="btn btn-primary mb-2">添加新任务</button>
  </form>
</template>

<script>
export default {
  name: "TodoInput",
  emits: ['add'],
  data() {
    return {
      taskName: ''
    }
  },
  methods: {
    onFormSubmit() {
      if (!this.taskName) return alert('任务名称不能为空！')
      this.$emit('add', this.taskName)
    }
  }
}
</script>

<style lang="less" scoped>
  #form-control {
    width: 356px;
  }
</style>
