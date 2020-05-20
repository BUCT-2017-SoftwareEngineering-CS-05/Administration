<template>
  <span style="padding: 0 10px">
    <el-dialog :title="title" :visible.sync="visible" :modal="false">
      <el-form
        :model="formData"
        label-position="center"
        label-width="100px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="ID">
          <el-input v-model="formData.userid" disabled />
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="formData.nickname" disabled />
        </el-form-item>
        <el-form-item label="密码" style="margin-left:5px;">
          <el-input v-model="formData.userpwd" />
          <el-button @click="onSubmit">
            修改
          </el-button>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="visible = false">
          关闭
        </el-button>
      </div>
    </el-dialog>
    <span @click="visible = true">
      <slot />
    </span>
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
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
      formData: {},
      submitform: { 'userid': 0, 'userpwd': '' }
    }
  },
  created() {
    this.formData = Object.assign({}, this.data)
  },
  methods: {
    onSubmit() { // 修改密码1
      this.submitform.userid = this.formData.userid
      this.submitform.userpwd = this.formData.userpwd
      this.$store.dispatch('user/ChangeAdminPwd', this.submitform)
        .then(response => {
          this.$message({
            title: '成功',
            message: response.msg || '密码修改成功！',
            type: 'success',
            duration: 2000
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
