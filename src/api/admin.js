import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-element-admin/admin/list',
    method: 'get',
    params
  })
}
export function changepwd(data) {
  return request({
    url: '/ManageAdmin/Changepwd/',
    method: 'post',
    data
  })
}

export function deleteuser(params) {
  return request({
    url: '/vue-element-admin/admin/delete',
    method: 'get',
    params
  })
}

