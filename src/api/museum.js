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

export function getcollection(params) {
  return request({
    url: '/Museum/GetCollectionsByMidex',
    method: 'get',
    params
  })
}
export function getnews(params) {
  return request({
    url: '/Museum/GetNewsByMidex',
    method: 'get',
    params
  })
}

export function getcommont(params) {
  return request({
    url: '/Museum/GetCommentByMidex',
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

export function deletecollection(data) {
  return request({
    url: '/Museum/DeleteCollectionsByOid',
    method: 'post',
    data
  })
}

export function deleteeducation(data) {
  return request({
    url: '/Museum/DeleteEducationByAid',
    method: 'post',
    data
  })
}

export function deletenews(data) {
  return request({
    url: '/Museum/DeleteNewsById',
    method: 'post',
    data
  })
}

export function deletecomment(data) {
  return request({
    url: '/Museum/DeleteCommentByUseridMidex',
    method: 'post',
    data
  })
}

export function deleteexhibition(data) {
  return request({
    url: '/Museum/DeleteExhibitionByEid',
    method: 'post',
    data
  })
}
