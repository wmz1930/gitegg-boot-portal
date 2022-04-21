import request from '@/utils/request'

export function queryDfsList (query) {
  return request({
    url: '/extension/dfs/list',
    method: 'get',
    params: query
  })
}

export function createDfs (data) {
  return request({
    url: '/extension/dfs/create',
    method: 'post',
    data
  })
}

export function updateDfs (data) {
  return request({
    url: '/extension/dfs/update',
    method: 'post',
    data
  })
}

export function updateDfsStatus (dfsId, dfsStatus) {
  return request({
    url: '/extension/dfs/status/' + dfsId + '/' + dfsStatus,
    method: 'post'
  })
}

export function updateDfsDefault (dfsId) {
  return request({
    url: '/extension/dfs/default/' + dfsId,
    method: 'post'
  })
}

export function batchDeleteDfs (data) {
  return request({
    url: '/extension/dfs/batch/delete',
    method: 'post',
    data
  })
}

export function deleteDfs (id) {
  return request({
    url: '/extension/dfs/delete/' + id,
    method: 'post'
  })
}

export function checkDfsExist (data) {
  return request({
    url: '/extension/dfs/check',
    method: 'post',
    params: data
  })
}

export function queryDefaultDfs () {
  return request({
    url: '/extension/dfs/query/default',
    method: 'get'
  })
}
