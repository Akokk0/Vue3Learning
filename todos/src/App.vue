<template>
  <div>
    <h1>App 根组件</h1>
    <TodoInput @add="onAddNewTask"></TodoInput>

    <TodoList :list="taskList" class="mt-2"></TodoList>

    <TodoButton v-model:active="activeIndex"></TodoButton>
  </div>
</template>

<script>
// 导入 TodoList 组件
import TodoList from "./components/todo-list/TodoList.vue";
// 导入 TodoInput 组件
import TodoInput from "./components/todo-input/TodoInput.vue";
import TodoButton from "./components/todo-button/TodoButton.vue";
export default {
  name: 'App',
  components: {TodoButton, TodoInput, TodoList},
  data() {
    return {
      // 任务列表的数据
      todoList: [
        { id: 1, task: '周一早晨9点开会', done: false },
        { id: 2, task: '周一晚上8点聚餐', done: false },
        { id: 3, task: '准备周三上午的演讲稿', done: true }
      ],
      // 下一个ID的值
      nextId: 4,
      activeIndex: 0
    }
  },
  methods: {
    onAddNewTask(taskName) {
      this.todoList.push({
        id: this.nextId,
        task: taskName,
        done: false
      })
      this.nextId++
    }
  },
  computed: {
    taskList() {
      switch (this.activeIndex) {
        case 0:
          return this.todoList
        case 1:
          return this.todoList.filter(item => item.done)
        case 2:
          return this.todoList.filter(item => !item.done)
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
