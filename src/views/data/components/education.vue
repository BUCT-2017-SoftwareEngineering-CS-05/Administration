<template>
  <span style="padding: 0 10px">
    <el-dialog title="教育活动" :visible.sync="visible" :modal="false" width="40%">
      <el-button type="primary" @click="fetchData(data)">
        获取活动
      </el-button>
      <el-table
        :data="edulist"
        style="width: 100%"
      >
        <el-table-column label="活动" width="570" show-overflow-tooltip>
          <template slot-scope="scope">
            <a :href="scope.row.url" target="_blank" class="buttonText">{{ scope.row.url }}</a>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="{ row }">
            <el-button class="delete" type="danger" @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <el-row v-for="project in edulist" :key="project.aid">
        <el-form
          :model="edulist"
          label-position="center"
          label-width="100px"
          style="margin-left:50px;"
        >
          <el-form-item label="">
            <div align="left">
              <a :href="project.url" target="_blank">{{ project.name }}</a>
            </div>
          </el-form-item>
          <el-form-item>
            <template slot-scope="{ row }">
              <el-button class="delete" type="danger" @click="handleDelete(row)">删除</el-button>
            </template>
          </el-form-item>
        </el-form>
      </el-row> -->
      <div slot="footer" class="dialog-footer" align="center">
        <el-button type="primary" @click="visible = false">
          确认
        </el-button>
      </div></el-dialog>
    <span @click="visible = true">
      <slot />
    </span>
  </span>
</template>

<script>
import { geteducation, deleteeducation } from '@/api/museum'
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    data: Number
  },
  data() {
    return {
      visible: false,
      edulist: null,
      formData: {},
      deleteform: { 'Aid': '' },
      getform: { 'Midex': '' }
    }
  },
  methods: {
    fetchData(midex) {
      this.listLoading = true
      this.getform.Midex = midex
      geteducation(this.getform).then(response => {
        this.edulist = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    },
    handleDelete(row) {
      this.$confirm('是否删除该教育活动?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(row)
        this.deleteform.Aid = row.aid
        deleteeducation(this.deleteform).then(response => {
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
