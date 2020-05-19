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
          {{ scope.$index }}
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
          <el-tag :type="scope.row.coright | corightFilter">{{ scope.row.coright }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="210" align="center">
        <template slot-scope="scope">
          <adminedit title="用户信息" :data="row" align="center">
            <el-button
              size="mini"
            >编辑</el-button>
          </adminedit>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
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
import { getList } from '@/api/table'
import adminedit from './components/adminedit'
import Pagination from '@/components/Pagination'

export default {
  components: { adminedit, Pagination },
  filters: {
    corightFilter(status) {
      const statusMap = {
        可以评论: 'success',
        禁止评论: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 100,
      listQuery: {}
    }
  },
  created() {
    this.fetchData()
    this.parseQuery()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
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
      }
      this.listQuery = listQuery
    },
    refresh() {
      this.$router.push({
        path: '/user/user',
        query: this.listQuery
      })
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
