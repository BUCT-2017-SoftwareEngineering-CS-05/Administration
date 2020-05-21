<template>
  <span style="padding: 0 10px">
    <el-dialog title="基本介绍" :visible.sync="visible" :modal="false" width="30%">
      <el-form
        :model="formData"
        label-position="center"
        label-width="100px"
        style="margin-left:50px;"
      >
        <el-form-item label="博物馆序号:">
          <div align="left">{{ formData.midex }}</div>
        </el-form-item>
        <el-form-item label="博物馆名称:">
          <div align="left">{{ formData.mname }}</div>
        </el-form-item>
        <el-form-item label="基本信息:">
          <div align="left">{{ formData.mbase }}</div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" align="center">
        <el-button type="primary" @click="visible = false">
          确认
        </el-button>
      </div>
    </el-dialog>
    <span @click="visible = true">
      <slot />
    </span>
  </span>
</template>

<script>
import { changepwd } from '@/api/table'
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
      formData: {},
      submitform: { 'userid': '', 'userpwd': '' }
    }
  },
  created() {
    this.formData = Object.assign({}, this.data)
    console.log(this.formData)
  },
  methods: {
    onSubmit() { // 修改密码1
      changepwd(this.submitform).then(response => {
        this.$notify({
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
  .button{
    margin-left: -40%;
  }
</style>
