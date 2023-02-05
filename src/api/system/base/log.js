import request from '@/utils/request'

export function fetchList (query) {
  return request({
    url: '/base/log/list',
    method: 'get',
    params: query
  })
}
