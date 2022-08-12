<template>
  <div>
    <h1>Hello Vue.js</h1>
    <input type="text" v-focus>
  </div>
</template>

<script>
export default {
  name: 'App',
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>
