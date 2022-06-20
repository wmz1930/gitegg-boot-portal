import request from '@/utils/request'

export function checkSmsCodePre (query) {
  return request({
    url: '/extension/sms/check/code/pre',
    method: 'get',
    params: query
  })
}

export function checkSmsCode (query) {
  return request({
    url: '/extension/sms/check/code',
    method: 'get',
    params: query
  })
}

export function sendSmsCode (data) {
  return request({
    url: '/extension/sms/code/send',
    method: 'post',
    data: data
  })
}
