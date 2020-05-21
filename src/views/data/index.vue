<template>
  <div>
    <el-row>
      <el-col v-for="project in list" :key="project.midex" :span="2.5" :offset="1">
        <el-card :body-style="{ padding: '0px', height:'360px'}" shadow="hover" style="width: 260px;height: 500px;margin-bottom: 30px;">
          <div style="padding: 6px;height: 310px;">
            <div>
              <div style="position: relative;top: 15px;text-align: center;"><font size="6">{{ project.mname }}</font></div>
            </div>
            <div style="">
              <img src="https://static.easyicon.net/preview/126/1266049.gif" class="image">
            </div>
            <div class="bottom">
              <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item :title="project.mname" :name="project.midex">
                  <inform :data="project" align="center">
                    <el-button class="info" type="text">基本介绍</el-button>
                  </inform>
                  <!-- <exhibition>
                    <el-button class="info" type="text">展览信息</el-button>
                  </exhibition> -->
                  <education :midex="project.midex" align="center">
                    <el-button class="info" type="text">教育活动</el-button>
                  </education>
                  <!-- <commont>
                    <el-button class="info" type="text">用户评论</el-button>
                  </commont>
                  <collection>
                    <el-button class="info" type="text">经典藏品</el-button>
                  </collection>
                  <news>
                    <el-button class="info" type="text">相关新闻</el-button>
                  </news> -->
                </el-collapse-item>
              </el-collapse></div>
            <el-button class="delete" type="danger">删除</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<style>
  .info {
    padding: 6px;
    margin-left: 0px;
    margin-right: 60px;
  }
  .delete {
    margin-top: 20px;
    padding: 6px;
    margin-left: 40%;
  }
  .bottom {
    margin-top: 20px;
    line-height: 12px;
    margin-left: 5%;
  }
  .image {
    margin-top: 10px;
    width: 80%;
    display: block;
  }
  html,body{
    margin:0px;
    height:100%;
}
</style>
<script>
import { getmuseum } from '@/api/museum'
import inform from './components/inform'
// import collection from './components/collection'
// import commont from './components/commont'
import education from './components/education'
// import exhibition from './components/exhibition'
// import news from './components/news'
export default {
  components: { inform, education },
  data: function() {
    return {
      activeNames: ['1'],
      list: null,
      total: null
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    handleChange(val) {
    },
    fetchData() {
      this.listLoading = true
      getmuseum().then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }
}
</script>
