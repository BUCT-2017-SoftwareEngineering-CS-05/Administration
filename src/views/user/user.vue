<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="195">
        <template slot-scope="scope">
          {{ scope.row.userid }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="昵称" width="395">
        <template slot-scope="scope">
          {{ scope.row.nickname }}
        </template>
      </el-table-column>
      <el-table-column label="密码" width="210" align="center">
        <template>
          <span>{{ '******' }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="coright-col" label="评论状态" width="210" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.coright | corightFilter">{{ review[scope.row.coright] }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="210" align="center">
        <template slot-scope="{ row }">
          <useredit title="用户信息" :data="row" align="center">
            <el-button
              size="mini"
            >编辑</el-button>
          </useredit>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination
      v-show="total >= 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.pageSize"
      @pagination="refresh"
    />
  </div>
</template>

<script>
import { getList, deleteuser } from '@/api/table'
import useredit from './components/useredit'
import Pagination from '@/components/Pagination'

export default {
  components: { useredit, Pagination },
  filters: {
    corightFilter(status) {
      const statusMap = {
        1: 'success',
        0: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      deleteform: { 'userid': '' },
      listLoading: true,
      total: 100,
      listQuery: {},
      review: ['禁止评论', '可以评论']
    }
  },
  created() {
    this.parseQuery()
  },
  mounted() {
    this.fetchData()
  },
  beforeRouteUpdate(to, from, next) {
    if (to.query !== from.query) {
      this.fetchData()
    }
    next()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        console.log(this.listQuery)
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    parseQuery() {
      // 收集查询条件
      const query = Object.assign({}, this.$route.query)
      let listQuery = {
        page: 1,
        pageSize: 20
      }
      if (query) {
        query.page && (query.page = Number(query.page))
        query.pageSize && (query.pageSize = Number(query.pageSize))
        listQuery = {
          ...listQuery,
          ...query
        }
        console.log(query)
      }
      this.listQuery = listQuery
    },
    refresh() {
      this.$router.push({
        path: '/user/user',
        query: this.listQuery
      })
    },
    forceRefresh() {
      window.location.reload()
    },
    handleFilter() {
      this.listQuery.page = 1
      this.refresh()
    },
    handleDelete(row) {
      this.$confirm('是否删除该用户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteform.userid = row.userid
        deleteuser(this.deleteform).then(response => {
          this.$notify({
            title: '成功',
            message: response.msg || '删除成功',
            type: 'success',
            duration: 2000
          })
          this.fetchData()
          this.handleFilter()
        })
      })
    }
  }
}
</script>
