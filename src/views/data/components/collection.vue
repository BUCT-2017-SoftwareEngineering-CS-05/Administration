<template>
  <span style="padding: 0 10px">
    <el-dialog title="藏品信息" :visible.sync="visible" :modal="false" width="80%">
      <el-button type="primary" @click="fetchData(data)">
        获取藏品信息
      </el-button>
      <el-table
        :data="list"
        style="width: 100%"
      >
        <el-table-column
          prop="oname"
          label="藏品"
          width="200"
        />
        <el-table-column
          prop="eintro"
          label="介绍"
          width="1000"
        />
      </el-table>
      <pagination
        v-show="total >= 0"
        :total="total"
        :page.sync="listQuery.PageNumber"
        :limit.sync="listQuery.PageSize"
        @pagination="refresh"
      />
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
import { getcollection } from '@/api/museum'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: Number
  },
  data() {
    return {
      visible: false,
      list: null,
      formData: {},
      listLoading: true,
      total: 100,
      listQuery: { 'Midex': '', 'PageNumber': 1, 'PageSize': 1 }
    }
  },
  methods: {
    fetchData(midex) {
      this.listLoading = true
      this.listQuery.Midex = midex
      getcollection(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    parseQuery() {
      // 收集查询条件
      const query = Object.assign({}, this.$route.query)
      let listQuery = {
        PageNumber: 1,
        PageSize: 1
      }
      if (query) {
        query.PageNumber && (query.PageNumber = Number(query.PageNumber))
        query.PageSize && (query.PageSize = Number(query.PageSize))
        listQuery = {
          ...listQuery,
          ...query
        }
        console.log(query)
      }
      this.listQuery.PageSize = listQuery.PageSize
      this.listQuery.PageNumber = listQuery.PageNumber
    },
    refresh() {
      this.$router.push({
        path: '/data/index',
        query: this.listQuery
      })
    },
    forceRefresh() {
      window.location.reload()
    },
    handleFilter() {
      this.listQuery.PageNumber = 1
      this.refresh()
    }
  }
}
</script>

<style lang="scss" scoped>
  .button{
    margin-left: -40%;
  }
</style>
