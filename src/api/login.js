import request from '@/utils/request'

const userApi = {
  Login: '/oauth/token',
  Logout: '/oauth/logout',
  CaptchaType: '/oauth/captcha/type',
  ImageCaptcha: '/oauth/captcha/image',
  ForgePassword: '/auth/forge-password',
  Register: '/auth/register',
  twoStepCode: '/auth/2step-code',
  SendSms: '/oauth/sms/captcha/send',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/system/auth/user/info',
  UserMenu: '/user/nav'
}

export default userApi

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return request({
    url: userApi.Login,
    method: 'post',
    skipAuthRefresh: true,
    data: parameter
  })
}

export function logout (parameter) {
  return request({
    url: userApi.Logout,
    method: 'post',
    skipAuthRefresh: true,
    data: parameter
  })
}

export function getCaptchaType () {
  return request({
    url: userApi.CaptchaType,
    method: 'get'
  })
}

export function getImageCaptcha () {
  return request({
    url: userApi.ImageCaptcha,
    method: 'get'
  })
}

export function getSmsCaptcha (parameter) {
  return request({
    url: userApi.SendSms,
    method: 'post',
    data: parameter
  })
}

export function getInfo () {
  return request({
    url: userApi.UserInfo,
    method: 'get'
  })
}

export function getCurrentUserNav () {
  return request({
    url: userApi.UserMenu,
    method: 'get'
  })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step (parameter) {
  return request({
    url: userApi.twoStepCode,
    method: 'post',
    data: parameter
  })
}
