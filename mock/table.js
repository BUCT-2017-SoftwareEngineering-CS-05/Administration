import Mock from 'mockjs'

const data = Mock.mock({
  'items|100': [{
    userid: '@integer(00000,10000)',
    nickname: '@sentence(3, 5)',
    coright: '@integer(0,1)',
    userpwd: '@integer(00000,10000)'
  }]
})

const data1 = Mock.mock({
  'items|100': [{
    userid: '@id',
    nickname: '@sentence(1, 2)',
    coright: '@integer(0,1)',
    userpwd: '@integer(00000,10000)'
  }]
})

export default [
  {
    url: '/vue-element-admin/user/list',
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
    url: '/vue-element-admin/user/list?page=1&pageSize=20',
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
    url: '/vue-element-admin/user/changepwd',
    type: 'post',
    response: config => {
      return {
        code: 0,
        msg: '密码修改成功！'
      }
    }
  },
  {
    url: '/vue-element-admin/user/delete',
    type: 'get',
    response: config => {
      return {
        code: 0,
        msg: '删除成功'
      }
    }
  },
  {
    url: '/vue-element-admin/admin/list',
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
    url: '/vue-element-admin/admin/delete',
    type: 'get',
    response: config => {
      return {
        code: 0,
        msg: '删除成功'
      }
    }
  }
]
