<template>
  <span style="padding: 0 10px">
    <el-dialog title="教育活动" :visible.sync="visible" :modal="false" width="60%">
      <el-button type="primary" @click="fetchData()">
        获取活动
      </el-button>
      <el-row v-for="project in edulist" :key="project">
        <el-form
          :model="edulist"
          label-position="center"
          label-width="100px"
          style="margin-left:50px;"
        >
          <el-form-item :label="project.aid+':'">
            <div align="left">
              <a :href="project.url" target="_blank">{{ project.name }}</a>
            </div>
          </el-form-item>
        </el-form>
      </el-row>
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
import { geteducation } from '@/api/museum'
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      visible: false,
      edulist: null,
      mid: 0
    }
  },
  created() {
    this.mid = Object.assign({}, this.midex)
    console.log(this.mid + 1)
  },
  methods: {
    fetchData() {
      this.listLoading = true
      geteducation(this.mid).then(response => {
        this.edulist = response.data.data
        this.total = response.data.total
        this.listLoading = false
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
