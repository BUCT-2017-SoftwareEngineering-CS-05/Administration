<template>
  <span style="padding: 0 10px">
    <el-dialog :title="title" :visible.sync="visible" :modal="false">
      <el-form
        :model="formData"
        label-position="center"
        label-width="100px"
        style="width: 400px; margin-left:250px;"
      >
        <el-form-item label="账号">
          <el-input v-model="submitform.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="submitform.password" />
        </el-form-item>
        <el-form-item label="roles">
          <el-input v-model="submitform.roles" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" align="center" @click="confirm">
          确认提交
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
      submitform: { 'username': '', 'password': '', 'roles': 0 }
    }
  },
  methods: {
    confirm() { // 新增提交
      this.submitform.roles = Number(this.submitform.roles)
      console.log(this.submitform)
      this.$store.dispatch('user/AddAdmin', this.submitform)
        .then(response => {
          this.$message({
            title: '成功',
            message: response.msg || '成功添加新管理员！',
            type: 'success',
            duration: 2000
          })
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-button{
  text-align: center;
}
</style>
