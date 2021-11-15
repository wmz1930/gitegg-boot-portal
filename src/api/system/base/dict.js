import request from '@/utils/request'

export function fetchList (data) {
  return request({
    url: '/extension/base/dict/list',
    method: 'get',
    params: data
  })
}

export function queryDictList (data) {
  return request({
    url: '/extension/base/dict/list/all',
    method: 'get',
    params: data
  })
}

export function createDict (data) {
  return request({
    url: '/extension/base/dict/create',
    method: 'post',
    data
  })
}

export function updateDict (data) {
  return request({
    url: '/extension/base/dict/update',
    method: 'post',
    data
  })
}

export function updateDictStatus (dictId, status) {
  return request({
    url: '/extension/base/dict/status/' + dictId + '/' + status,
    method: 'post'
  })
}

export function deleteDict (id) {
  return request({
    url: '/extension/base/dict/delete/' + id,
    method: 'post'
  })
}

export function batchDeleteDict (data) {
  return request({
    url: '/extension/base/dict/batch/delete',
    method: 'post',
    data
  })
}

export function listDict (dictCode) {
  return request({
    url: '/extension/base/dict/query/' + dictCode,
    method: 'post'
  })
}

export function batchListDict (data) {
  return request({
    url: '/extension/base/dict/batch/query',
    method: 'post',
    data
  })
}

export function checkDictExist (data) {
  return request({
    url: '/extension/base/dict/check',
    method: 'post',
    params: data
  })
}
