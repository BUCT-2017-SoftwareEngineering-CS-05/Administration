<template>
  <div>
    <expo title="备份信息" :data="row" align="center">
      <el-button
        class="filter-item"
        type="primary"
        text-align="center"
        icon="el-icon-edit"
        style="margin-bottom: 5px;margin-top: 5px;margin-left: 20px"
        @click="handleCreate"
      >
        新增备份
      </el-button>
    </expo>
    <el-table
      :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
      align="center"
    >
      <el-table-column
        label="备份名称"
        prop="name"
      />
      <el-table-column
        label="备份时间"
        prop="time"
      />
      <el-table-column
        label="备注"
        prop="str"
      />
      <el-table-column
        align="right"
      >
        <template slot="header">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"
          />
        </template>
        <template slot-scope="scope">
          <expo title="备份信息" :data="row" align="center">
            <el-button
              size="mini"
              type="primary"
            >导出</el-button>
          </expo>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>

import expo from './components/expo'

export default {
  components: { expo },
  data() {
    return {
      tableData: [{
        name: '初始',
        time: '2020/5/18',
        str: '原始数据'
      }, {
        name: '博物馆',
        time: '2020/5/20',
        str: '新增博物馆数据'
      }],
      search: ''
    }
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
