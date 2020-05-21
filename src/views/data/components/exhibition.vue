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
        <el-table-column>
          <template slot-scope="{ row }">
            <el-button class="delete" type="danger" @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
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
import { getexhibition, deleteexhibition } from '@/api/museum'
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
      deleteform: { 'Eid': '' },
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
    },
    handleDelete(row) {
      this.$confirm('是否删除该展览信息?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteform.Eid = row.eid
        deleteexhibition(this.deleteform).then(response => {
          this.$notify({
            title: '成功',
            message: response.msg || '删除成功',
            type: 'success',
            duration: 2000
          })
          this.handleFilter()
        })
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
