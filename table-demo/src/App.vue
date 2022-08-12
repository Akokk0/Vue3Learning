<template>
  <div>
    <h1>App 根组件</h1>
    <hr/>
    <MyTable :data="goodsList">
      <template #header>
        <th>序号</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="{row, index}">
        <td>{{ index + 1 }}</td>
        <td>{{ row.goods_name }}</td>
        <td>¥ {{ row.goods_price }}</td>
<!--    循环渲染标签信息    -->
        <td>
          <input type="text" class="form-control form-control-sm form-ipt" v-focus v-if="row.inputVisible" v-model.trim="row.inputValue" @blur="onInputConfirm(row)" @keyup.enter="onInputConfirm(row)" @keyup.esc="row.inputValue= ''">
          <button type="button" class="btn btn-primary btn-sm" v-else @click="row.inputVisible = true">+Tag</button>
          <span class="badge badge-warning ml-2" v-for="item in row.tags" :key="item">{{ item }}</span>
        </td>
        <td>
          <button type="button" class="btn btn-danger btn-sm" @click="onRemove(row.id)">删除</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "./components/my-table/MyTable.vue";

export default {
  name: 'App',
  components: {MyTable},
  data() {
    return {
      goodsList: []
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      const { data: res } = await this.$http.get('/api/goods')
      if (res.status !== 0) return console.log('获取商品列表数据失败！')
      this.goodsList = res.data
    },
    onRemove(id) {
      this.goodsList = this.goodsList.filter(item => item.id !== id)
    },
    onInputConfirm(row) {
      const val = row.inputValue
      row.inputValue = ''
      row.inputVisible = false
      if (!val || row.tags.indexOf(val) !== -1) return
      row.tags.push(val)
    }
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .form-ipt {
    width: 80px;
    display: inline;
  }
</style>
