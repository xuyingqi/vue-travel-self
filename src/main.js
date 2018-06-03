import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300毫秒延迟
import fastclick from 'fastclick'

import 'common/styles/reset.css'
import 'common/styles/border.css'
import 'common/styles/iconfont.css'
Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
