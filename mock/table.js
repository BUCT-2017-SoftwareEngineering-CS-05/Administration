import Mock from 'mockjs'

const data = Mock.mock({
  'items|100': [{
    userid: '@id',
    nickname: '@sentence(3, 5)',
    'coright|1': ['禁止评论', '可以评论'],
    userpwd: '@integer(00000,10000)'
  }]
})

export default [
  {
    url: '/vue-admin-template/table/list',
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
  }
]
