<template>
  <ul class="list-group">
<!--  列表组  -->
    <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in list" :key="item.id">
<!--   复选框   -->
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" v-model="item.done" :id="item.id">
        <label class="form-check-label" :for="item.id" :class="item.done ? 'delete' : ''">
          {{ item.task }}
        </label>
      </div>
<!--   徽标   -->
      <span class="badge bg-success rounded-pill" v-if="item.done">完成</span>
      <span class="badge bg-warning rounded-pill" v-else>未完成</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    list: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style lang="less" scoped>
  .list-group {
    width: 400px;
  }
  .delete {
    text-decoration: line-through;
    color: gray;
    font-style: italic;
  }
</style>
