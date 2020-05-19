<template>
  <div>
    <div class="demo-fit">
      <card v-for="item in dataimg" :key="item" :offset="item > 0 ? 2 : 0" :title="item.txt" :data="item.src" />
    </div>
    <div class="pagination">
      <el-pagination
        :total="totalCount"
        hide-on-single-page="true"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[10,20,30,40]"
        :current-page="cur_page"
        :page-size="pageNum"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>

</template>

<style>
  .pagination {
    height: 100%
  }
  .bottom {
    margin-top: 10px;
    line-height: 5px;
  }

  .button {
    padding: 5px;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>

<script>

import card from './components/card'

export default {
  name: 'AboutUs',
  components: { card },
  data() {
    return {
      dataimg: [{
        src: 'https://static.easyicon.net/preview/126/1266049.gif',
        txt: '1号博物馆'
      },
      {
        src: 'https://static.easyicon.net/preview/126/1266049.gif',
        txt: '2号博物馆'
      },
      {
        src: 'https://static.easyicon.net/preview/126/1266049.gif',
        txt: '3号博物馆'
      }
      ],
      cur_page: 1,
      pageNum: 1,
      totalCount: 1
    }
  },
  methods: {
    handleSizeChange(val) {
      this.pageNum = val // 获取page-sizes里的每页显示几条数据的值，赋给我们自定义的每页显示数量的变量pageNum
      this.getPackData() // 展示页面信息
    },
    handleCurrentChange(val) {
      this.cur_page = val
      this.getPackData() // 确定当前页面后刷新页面
    },
    totalPageNum() {
      this.$axios.get('/api/pagePackMade.do').then(res => {
        this.totalCount = res.data[0].count // 总信息条数从数据库获取;
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
