<template>
  <div>
    <addadmin title="新增管理员信息" :data="row" align="center">
      <el-button
        class="filter-item"
        type="primary"
        text-align="center"
        icon="el-icon-edit"
        style="margin-bottom: 5px;margin-top: 5px;margin-left: 20px"
      >
        新增管理员
      </el-button>
    </addadmin>
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
            {{ scope.row.id }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="昵称" width="395">
          <template slot-scope="scope">
            {{ scope.row.username }}
          </template>
        </el-table-column>
        <el-table-column label="密码" width="210" align="center">
          <template>
            <span>{{ '******' }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="210" align="center">
          <template slot-scope="{ row }">
            <adminedit title="管理员信息" :data="row" align="center">
              <el-button
                size="mini"
              >编辑</el-button>
            </adminedit>
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
        :page.sync="listQuery.Pagenumber"
        :limit.sync="listQuery.PageSize"
        @pagination="refresh"
      />
    </div>
  </div>
</template>

<script>
import { getList, deleteadmin } from '@/api/admin'
import adminedit from './components/adminedit'
import addadmin from './components/adminedit'
import Pagination from '@/components/Pagination'

export default {
  components: { adminedit, addadmin, Pagination },
  filters: {
  },
  data() {
    return {
      list: null,
      deleteform: { 'id': 0 },
      listLoading: true,
      total: 100,
      listQuery: {}
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
        Pagenumber: 1,
        PageSize: 20
      }
      if (query) {
        query.Pagenumber && (query.Pagenumber = Number(query.Pagenumber))
        query.PageSize && (query.PageSize = Number(query.PageSize))
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
        path: '/user/admin',
        query: this.listQuery
      })
    },
    forceRefresh() {
      window.location.reload()
    },
    handleFilter() {
      this.listQuery.Pagenumber = 1
      this.refresh()
    },
    handleDelete(row) {
      this.$confirm('是否删除该管理员?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteform.id = row.userid
        deleteadmin(this.deleteform).then(response => {
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
