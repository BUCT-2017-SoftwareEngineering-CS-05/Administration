import request from '@/utils/request'

export function getmuseum(data) {
  return request({
    url: '/Museum/GetMuseums',
    method: 'get',
    data
  })
}
