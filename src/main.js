import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from './router'
import store from './data'

import * as echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.use(ElementUI)

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
