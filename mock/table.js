import Mock from 'mockjs'

const data = Mock.mock({
  'items|100': [{
    id: '@integer(00000,10000)',
    username: '@sentence(3, 5)',
    coright: '@integer(0,1)',
    password: '@integer(00000,10000)'
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
    url: '/ManageAdmin/Getadmin',
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
  }
]
