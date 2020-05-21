import request from '@/utils/request'

export function getbackup(data) {
  return request({
    url: '/Backup/GetAllBackups',
    method: 'get',
    data
  })
}

export function deletebackup(params) {
  return request({
    url: '/Backup/DeleteBackup',
    method: 'get',
    params
  })
}

export function restore(params) {
  return request({
    url: '/Backup/Restore',
    method: 'get',
    params
  })
}

export function backup(params) {
  return request({
    url: '/Backup/Backup',
    method: 'get',
    params
  })
}
