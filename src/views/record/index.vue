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
        <el-table-column align="center" label="操作序号" width="175">
          <template slot-scope="scope">
            {{ scope.id }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="管理员" width="250">
          <template slot-scope="scope">
            {{ scope.username }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="300">
          <template slot-scope="scope">
            {{ scope.operation }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="时间" width="275">
          <template slot-scope="scope">
            {{ scope.time }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getbackup, backup } from '@/api/record'

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
          this.fetchData()
        })
      })
    }
  }
}
</script>
