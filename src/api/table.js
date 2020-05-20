import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/ManageUser/GetUsers',
    method: 'get',
    params
  })
}
export function changepwd(data) {
  return request({
    url: '/ManageUser/Changepwd',
    method: 'post',
    data
  })
}

export function deleteuser(params) {
  return request({
    url: '/ManageUser/Delete',
    method: 'get',
    params
  })
}

export function changemute(params) {
  return request({
    url: '/ManageUser/ChangeMute',
    method: 'get',
    params
  })
}
