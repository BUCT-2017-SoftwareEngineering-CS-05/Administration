<template>
  <span style="padding: 0 10px">
    <el-dialog title="展馆信息" :visible.sync="visible" :modal="false" width="60%">
      <el-button type="primary" @click="fetchData(data)">
        获取展厅信息
      </el-button>
      <el-table
        :data="list"
        style="width: 100%"
      >
        <el-table-column
          prop="ename"
          label="展厅"
          width="200"
        />
        <el-table-column
          prop="eintro"
          label="介绍"
          width="800"
        />
      </el-table>
      <div slot="footer" class="dialog-footer" align="center">
        <el-button type="primary" @click="visible = false">
          返回
        </el-button>
      </div>
    </el-dialog>
    <span @click="visible = true">
      <slot />
    </span>
  </span>
</template>

<script>
import { getexhibition } from '@/api/museum'
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: Number
  },
  data() {
    return {
      visible: false,
      list: null,
      formData: {},
      getform: { 'Midex': '' }
    }
  },
  methods: {
    fetchData(midex) {
      this.listLoading = true
      this.getform.Midex = midex
      getexhibition(this.getform).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .button{
    margin-left: -40%;
  }
</style>
