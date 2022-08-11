<template>
  <div>
    <h1>App 根组件</h1>
    <button @click="color = 'pink'"></button>
    <hr/>
    <Lv1></Lv1>
  </div>
</template>

<script>
import Lv1 from "./components/Lv1.vue";
import { computed } from "vue";

export default {
  name: 'App',
  components: {Lv1},
  data() {
    return {
      color: 'red'
    }
  },
  provide() {
    return {
      color: computed(() => this.color)
    }
  }
}
</script>
