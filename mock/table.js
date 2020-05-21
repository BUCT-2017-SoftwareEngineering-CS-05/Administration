import Mock from 'mockjs'

const data = Mock.mock({
  'items|100': [{
    id: '@integer(00000,10000)',
    username: '@sentence(3, 5)',
    password: '@integer(00000,10000)'
  }]
})
const data1 = Mock.mock({
  'items|100': [{
    userid: '@integer(00000,10000)',
    nickname: '@sentence(3, 5)',
    coright: '@integer(0,1)',
    password: '@integer(00000,10000)'
  }]
})
const br = Mock.mock({
  'items|10': [{
    fname: '@id',
    time: '@integer(00000,10000)'
  }]
})
const mute = Mock.mock({
  'items|100': [{
    userid: '@integer(00000,10000)',
    nickname: '@sentence(3, 5)',
    coright: '@integer(1)',
    password: '@integer(00000,10000)'
  }]
})
const edu1 = [
  {
    aid: 3,
    midex: 21,
    name: '博物馆1号',
    url: 'https//www.gmc.org.cn/detail/4127.html'
  },
  {
    aid: 4,
    midex: 21,
    name: '博物馆1号',
    url: 'https//www.gmc.org.cn/detail/4127.html'
  }
]
const museum2 = [
  {
    midex: 21,
    mname: '博物馆1号',
    mbase: '介绍1'
  },
  {
    midex: 2,
    mname: '博物馆2号',
    mbase: '介绍2'
  }
]
export default [
  {
    url: '/ManageUser/GetUser',
    type: 'get',
    response: config => {
      const items = data1.items
      return {
        code: 0,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/ManageUser/GetUser',
    type: 'post',
    response: config => {
      return {
        code: 0,
        msg: '密码修改成功！'
      }
    }
  },
  {
    url: '/ManageUser/Delete',
    type: 'get',
    response: config => {
      return {
        code: 0,
        msg: '删除成功'
      }
    }
  },
  {
    url: '/ManageUser/ChangeMute',
    type: 'get',
    response: config => {
      const items = mute.items
      return {
        code: 0,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/ManageAdmin/AddAdmin',
    type: 'post',
    response: config => {
      return {
        code: 0,
        msg: '添加成功'
      }
    }
  },
  {
    url: '/ManageAdmin/GetAdmin',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 0,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/ManageAdmin/Changepwd',
    type: 'post',
    response: config => {
      return {
        code: 0,
        msg: '密码修改成功！'
      }
    }
  },
  {
    url: '/ManageAdmin/Delete',
    type: 'get',
    response: config => {
      return {
        code: 0,
        msg: '删除成功1'
      }
    }
  },
  {
    url: '/Museum/GetMuseums',
    type: 'get',
    response: config => {
      const museum1 = museum2
      return {
        code: 0,
        data: {
          data: museum1,
          total: museum1.length
        }
      }
    }
  },
  {
    url: '/Museum/GetEducationByMidex',
    type: 'get',
    response: config => {
      const edu = edu1
      return {
        code: 0,
        data: {
          data: edu,
          total: edu.length
        }
      }
    }
  },
  {
    url: '/Backup/GetAllBackups',
    type: 'get',
    response: config => {
      const br1 = br.items
      return {
        code: 0,
        data: {
          items: br1,
          total: br1.length
        }
      }
    }
  },
  {
    url: '/Backup/DeleteBackup',
    type: 'get',
    response: config => {
      return {
        code: 0,
        msg: '删除成功1'
      }
    }
  },
  {
    url: '/Backup/Restore',
    type: 'get',
    response: config => {
      return {
        code: 0,
        msg: '恢复成功'
      }
    }
  },
  {
    url: '/Backup/Backup',
    type: 'get',
    response: config => {
      return {
        code: 0,
        msg: '备份成功'
      }
    }
  }
]
