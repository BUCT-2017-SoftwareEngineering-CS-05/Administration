import request from '@/utils/request'

export function getbackup(data) {
  return request({
    url: '/ManageAdmin/GetAdminLogs',
    method: 'get',
    data
  })
}

export function backup(params) {
  return request({
    url: '/Backup/Backup',
    method: 'get',
    params
  })
}
