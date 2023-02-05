import request from '@/utils/request'

export function fetchResourceList (data) {
  return request({
    url: '/system/resource/tree',
    method: 'get',
    params: data
  })
}

export function createResource (data) {
  return request({
    url: '/system/resource/create',
    method: 'post',
    data
  })
}

export function updateResource (data) {
  return request({
    url: '/system/resource/update',
    method: 'post',
    data
  })
}

export function updateResourceStatus (resourceId, status) {
  return request({
    url: '/system/resource/status/' + resourceId + '/' + status,
    method: 'post'
  })
}

export function deleteResource (id) {
  return request({
    url: '/system/resource/delete/' + id,
    method: 'post'
  })
}

export function checkResourceExist (data) {
  return request({
    url: '/system/resource/check',
    method: 'post',
    data
  })
}
