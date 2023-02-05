import request from '@/utils/request'

export function queryDfsFileList (query) {
  return request({
    url: '/extension/dfs/file/list',
    method: 'get',
    params: query
  })
}

export function createDfsFile (data) {
  return request({
    url: '/extension/dfs/file/create',
    method: 'post',
    data
  })
}

export function updateDfsFile (data) {
  return request({
    url: '/extension/dfs/file/update',
    method: 'post',
    data
  })
}

export function updateDfsFileStatus (dfsFileId, status) {
  return request({
    url: '/extension/dfs/file/status/' + dfsFileId + '/' + status,
    method: 'post'
  })
}

export function batchDeleteDfsFile (data) {
  return request({
    url: '/extension/dfs/file/batch/delete',
    method: 'post',
    data
  })
}

export function deleteDfsFile (id) {
  return request({
    url: '/extension/dfs/file/delete/' + id,
    method: 'post'
  })
}

export function checkDfsFileExist (data) {
  return request({
    url: '/extension/dfs/file/check',
    method: 'post',
    data
  })
}
