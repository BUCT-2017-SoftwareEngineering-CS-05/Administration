<template>
  <div>
    <el-button
      class="filter-item"
      type="primary"
      text-align="center"
      icon="el-icon-edit"
      style="margin-bottom: 5px;margin-top: 5px;margin-left: 20px"
      @click="backup"
    >
      备份当前数据
    </el-button>
    <div class="app-container">
      <el-table
        v-loading="listLoading"
        :data="list"
        element-loading-text="Loading"
        border
        fit
        highlight-current-row
      >
        <el-table-column align="center" label="备份名称" width="195">
          <template slot-scope="scope">
            {{ scope.row.fname }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="备份时间" width="395">
          <template slot-scope="scope">
            {{ scope.row.time }}
          </template>
        </el-table-column>
        <el-table-column label="操作" width="210" align="center">
          <template slot-scope="{ row }">
            <el-button
              size="mini"
              type="primary"
              @click="restore(row)"
            >恢复</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getbackup, deletebackup, restore, backup } from '@/api/br'

export default {
  components: { },
  data() {
    return {
      list: null,
      deleteform: { 'fname': '' },
      listLoading: true,
      total: 100
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getbackup().then(response => {
        this.list = response.data.items
        this.total = response.data.total
        console.log(this.list)
        this.listLoading = false
      })
    },
    handleDelete(row) {
      this.$confirm('是否删除该备份?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteform.fname = row.fname
        deletebackup(this.deleteform).then(response => {
          this.$message({
            title: '成功',
            message: response.msg || '删除成功',
            type: 'success',
            duration: 2000
          })
        })
      })
    },
    backup() {
      this.$confirm('是否备份当前数据?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        backup().then(response => {
          this.$message({
            title: '成功',
            message: response.msg || '恢复成功',
            type: 'success',
            duration: 2000
          })
        })
      })
    },
    restore(row) {
      this.$confirm('是否恢复该备份?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteform.fname = row.fname
        restore(this.deleteform).then(response => {
          this.$message({
            title: '成功',
            message: response.msg || '恢复成功',
            type: 'success',
            duration: 2000
          })
        })
      })
    }
  }
}
</script>
