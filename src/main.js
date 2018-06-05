import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300毫秒延迟
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'

import 'common/styles/reset.css'
import 'common/styles/border.css'
import 'common/styles/iconfont.css'
// require styles
import 'swiper/dist/css/swiper.css'

fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
