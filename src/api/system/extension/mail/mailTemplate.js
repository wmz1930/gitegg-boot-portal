import request from '@/utils/request'

export function queryMailTemplateList (query) {
  return request({
    url: '/extension/mail/template/list',
    method: 'get',
    params: query
  })
}

export function queryMailTemplateListAll (query) {
  return request({
    url: '/extension/mail/template/list/all',
    method: 'get',
    params: query
  })
}

export function createMailTemplate (data) {
  return request({
    url: '/extension/mail/template/create',
    method: 'post',
    data
  })
}

export function updateMailTemplate (data) {
  return request({
    url: '/extension/mail/template/update',
    method: 'post',
    data
  })
}

export function updateMailTemplateStatus (mailTemplateId, status) {
  return request({
    url: '/extension/mail/template/status/' + mailTemplateId + '/' + status,
    method: 'post'
  })
}

export function batchDeleteMailTemplate (data) {
  return request({
    url: '/extension/mail/template/batch/delete',
    method: 'post',
    data
  })
}

export function deleteMailTemplate (id) {
  return request({
    url: '/extension/mail/template/delete/' + id,
    method: 'post'
  })
}

export function checkMailTemplateExist (data) {
  return request({
    url: '/extension/mail/template/check',
    method: 'post',
    params: data
  })
}

export function downloadMailTemplateList (query) {
  return request({
    url: '/extension/mail/template/download',
    method: 'get',
    responseType: 'blob',
    params: query
  })
}

export function uploadMailTemplate (formData) {
  return request({
    url: '/extension/mail/template/upload',
    method: 'post',
    data: formData
  })
}

export function downloadMailTemplateTemplate (query) {
  return request({
    url: '/extension/mail/template/download/template',
    method: 'get',
    responseType: 'blob',
    params: query
  })
}
