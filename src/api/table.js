import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-element-admin/user/list',
    method: 'get',
    params
  })
}
export function changepwd(data) {
  return request({
    url: '/vue-element-admin/user/changepwd',
    method: 'post',
    data
  })
}

export function deleteuser(params) {
  return request({
    url: '/vue-element-admin/user/delete',
    method: 'get',
    params
  })
}

