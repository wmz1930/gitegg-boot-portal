import request from '@/utils/request'

export function fetchList (query) {
  return request({
    url: '/system/role/list',
    method: 'get',
    params: query
  })
}

export function createRole (data) {
  return request({
    url: '/system/role/create',
    method: 'post',
    data
  })
}

export function updateRole (data) {
  return request({
    url: '/system/role/update',
    method: 'post',
    data
  })
}

export function updateRoleStatus (roleId, status) {
  return request({
    url: '/system/role/status/' + roleId + '/' + status,
    method: 'post'
  })
}

export function batchDeleteRole (data) {
  return request({
    url: '/system/role/batch/delete',
    method: 'post',
    data
  })
}

export function deleteRole (id) {
  return request({
    url: '/system/role/delete/' + id,
    method: 'post'
  })
}

export function queryRoleResource (roleId) {
  return request({
    url: '/system/role/resource/' + roleId,
    method: 'get'
  })
}

export function updateRoleResources (data) {
  return request({
    url: '/system/role/resource/update',
    method: 'post',
    data
  })
}

export function checkRoleExist (data) {
  return request({
    url: '/system/role/check',
    method: 'post',
    data
  })
}
