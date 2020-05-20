import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/ManageAdmin/Getadmin',
    method: 'get',
    params
  })
}
export function changepwd(data) {
  return request({
    url: '/ManageAdmin/Changepwd',
    method: 'post',
    data
  })
}

export function deleteadmin(params) {
  return request({
    url: '/ManageAdmin/Delete',
    method: 'get',
    params
  })
}

