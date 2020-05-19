<template>
  <el-row>
    <el-col :span="3" :offset="2">
      <el-card :body-style="{ padding: '10px' }">
        <img :src="data" class="image">
        <div style="padding: 14px;">
          <span>{{ title }}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style>
  .image {
    width: 100%;
    display: block;
  }
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>
