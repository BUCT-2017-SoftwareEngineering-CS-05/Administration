import Mock from 'mockjs'

const data = Mock.mock({
  'items|10': [{
    midex: '@integer(00000,10000)',
    mname: '@sentence(3, 5)'
  }]
})

export default [
  {
    url: '/Museum/GetMuseums',
    type: 'get',
    response: config => {
      const items = data
      return {
        code: 0,
        data: {
          total: items.length,
          data: items
        }
      }
    }
  }
]
