<template>
  <span style="padding: 0 10px">
    <el-dialog title="教育活动" :visible.sync="visible" :modal="false" width="40%">
      <el-button type="primary" @click="fetchData(data)">
        获取活动
      </el-button>
      <el-row v-for="project in edulist" :key="project.aid">
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
    // eslint-disable-next-line vue/require-default-prop
    data: Number
  },
  data() {
    return {
      visible: false,
      edulist: null,
      formData: {},
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .button{
    margin-left: -40%;
  }
</style>
