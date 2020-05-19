import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-element-admin/admin/list',
    method: 'get',
    params
  })
}
export function changepwd(params) {
  return request({
    url: '/vue-element-admin/admin/changepwd',
    method: 'post',
    params
  })
}

export function deleteuser(params) {
  return request({
    url: '/vue-element-admin/admin/delete',
    method: 'post',
    params
  })
}

