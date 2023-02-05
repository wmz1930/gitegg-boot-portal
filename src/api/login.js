import request from '@/utils/request'

const userApi = {
  Login: '/oauth/token',
  Logout: '/oauth/logout',
  CaptchaType: '/oauth/captcha/type',
  ImageCaptcha: '/oauth/captcha/image',
  ForgePassword: '/auth/forge-password',
  twoStepCode: '/auth/2step-code',
  SendSms: '/oauth/sms/captcha/send',
  SendSmsErr: '/account/sms_err',
  // get my info
  UserInfo: '/system/account/user/info',
  UserMenu: '/user/nav',
  // Social login
  SocialLoginUrl: '/oauth/social/login/',
  SocialLoginCallback: '/oauth/social/',
  // Social bind
  SocialBindMobile: '/oauth/social/bind/mobile',
  SocialBindAccount: '/oauth/social/bind/account',
  // sms
  SmsSend: '/extension/sms/code/send',
  SmsCheckPre: '/extension/sms/check/code/pre',
  SmsCheck: '/extension/sms/check/code',
  // account
  SmsRegisterSend: '/system/account/register/sms/send',
  Register: '/system/account/register',
  CheckUserExist: '/system/account/register/check'
  // change password
  PwdSmsSend: '/system/account/pwd/sms/send',
  SmsChangePassword: '/system/account/pwd/update'
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
    authenticationScheme: 'Basic',
    method: 'post',
    headers: { 'Authorization': `Basic ${process.env.VUE_APP_CLIENT_SECRET}` },
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

export function getSocialLoginUrl (socialType) {
  return request({
    url: userApi.SocialLoginUrl + socialType,
    method: 'get'
  })
}

export function socialLoginCallback (socialType, parameter) {
  return request({
    url: userApi.SocialLoginCallback + socialType + '/callback',
    method: 'get',
    params: parameter
  })
}

export function sendSmsCode (parameter) {
  return request({
    url: userApi.SmsSend,
    method: 'post',
    data: parameter
  })
}

export function checkSmsCode (parameter) {
  return request({
    url: userApi.SmsCheckPre,
    method: 'get',
    params: parameter
  })
}

export function smsRegisterSend (parameter) {
  return request({
    url: userApi.SmsRegisterSend,
    method: 'post',
    data: parameter
  })
}

export function checkUserExist (parameter) {
  return request({
    url: userApi.CheckUserExist,
    method: 'post',
    data: parameter
  })
}

export function userRegister (parameter) {
  return request({
    url: userApi.Register,
    method: 'post',
    data: parameter
  })
}

export function userBindMobile (parameter) {
  return request({
    url: userApi.SocialBindMobile,
    method: 'post',
    data: parameter
  })
}

export function userBindAccount (parameter) {
  return request({
    url: userApi.SocialBindAccount,
    method: 'post',
    data: parameter
  })
}

// ·¢ËÍÐÞ¸ÄÃÜÂë¶ÌÐÅ
export function smsPwdSend (parameter) {
  return request({
    url: userApi.PwdSmsSend,
    method: 'post',
    data: parameter
  })
}

// Ö´ÐÐÐÞ¸ÄÃÜÂë²Ù×÷
export function smsChangePassword (parameter) {
  return request({
    url: userApi.SmsChangePassword,
    method: 'post',
    data: parameter
  })
}
