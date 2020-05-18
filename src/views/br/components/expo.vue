<template>
  <span style="padding: 0 10px">
    <el-dialog :title="title" :visible.sync="visible" :modal="false">
      <el-form
        :model="formData"
        label-position="center"
        label-width="100px"
        style="width: 600px; margin-left:150px;"
      >
        <el-form-item label="备份名称">
          <el-input v-model="formData.name" disabled />
        </el-form-item>
        <el-form-item label="备份内容">
          <el-input v-model="formData.account" style="height: 300px;" disabled />
        </el-form-item>
        <el-form-item label="其他信息">
          <el-input v-model="formData.phone" disabled />
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
      formData: {}
    }
  },
  created() {
    this.formData = Object.assign({}, this.data)
  }
}
</script>

<style lang="scss" scoped>
</style>
