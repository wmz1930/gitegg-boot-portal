// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import Antd from 'ant-design-vue/es'
import { Cascader, TreeSelect, Tree, Modal } from 'ant-design-vue'

import themePluginConfig from '../config/themePluginConfig'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use' // use lazy load components
import './permission' // permission control
import './utils/filter' // global filter
import './global.less' // global style

// permission
import hasAnyRoles from './directive/permission/hasAnyRoles/index' // hasAnyRoles
import hasAnyPerms from './directive/permission/hasAnyPerms/index' // hasAnyRoles
import lacksRoles from './directive/permission/lacksRoles/index' // hasAnyRoles
import lacksPerms from './directive/permission/lacksPerms/index' // hasAnyRoles

Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
Vue.use(Antd)
Vue.use(Cascader)
Vue.use(TreeSelect)
Vue.use(Tree)
Vue.use(Modal)
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)
Vue.use(hasAnyRoles)
Vue.use(hasAnyPerms)
Vue.use(lacksRoles)
Vue.use(lacksPerms)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  store,
  i18n,
  // init localstorage, vuex
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
