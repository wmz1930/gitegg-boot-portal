import request from '@/utils/request'

export function fetchList (query) {
  return request({
    url: '/extension/base/log/list',
    method: 'get',
    params: query
  })
}
