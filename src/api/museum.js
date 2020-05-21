import request from '@/utils/request'

export function getmuseum() {
  return request({
    url: 'Museum/GetMuseums',
    method: 'get'
  })
}
