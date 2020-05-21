import request from '@/utils/request'

export function getmuseum(data) {
  return request({
    url: '/Museum/GetMuseums',
    method: 'get',
    data
  })
}

export function geteducation(params) {
  return request({
    url: '/Museum/GetEducationByMidex',
    method: 'get',
    params
  })
}

export function getexhibition(params) {
  return request({
    url: '/Museum/GetExhibitionByMidex',
    method: 'get',
    params
  })
}
export function deletemuseum(data) {
  return request({
    url: '/Museum/DeleteMuseumByMidex',
    method: 'post',
    data
  })
}
