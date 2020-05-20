import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/ManageUser/GetUser',
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

