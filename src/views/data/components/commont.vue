<template>
  <span style="padding: 0 10px">
    <el-dialog title="用户评论" :visible.sync="visible" :modal="false" width="60%">
      <el-button type="primary" @click="fetchData(data)">
        获取用户评论
      </el-button>
      <el-table
        :data="list"
        style="width: 100%"
      >
        <el-table-column
          prop="userid"
          label="用户名"
          width="200"
        />
        <el-table-column
          prop="msg"
          label="用户评论"
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
import { getcommont, deletecomment } from '@/api/museum'
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
      deleteform: { 'Userid': '', 'Midex': '' },
      getform: { 'Midex': '' }
    }
  },
  methods: {
    fetchData(midex) {
      this.listLoading = true
      this.getform.Midex = midex
      getcommont(this.getform).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleDelete(row) {
      this.$confirm('是否删除该评论?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteform.Midex = row.midex
        this.deleteform.Userid = row.userid
        deletecomment(this.deleteform).then(response => {
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
