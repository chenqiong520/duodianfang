// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
//element项目加载在全局中   页面中直接使用
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import BaiduMap from 'vue-baidu-map'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'

import axios from  'axios'
import  api  from  './http/api'

Vue.prototype.$http = axios
Vue.prototype.api = api


Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(BaiduMap, {
  ak: 'xGaxPyGphEI1910NaGnKjdPXnMWQbBrF'
});

// const originalPush = Router.prototype.push
// Router.prototype.push = function push (location) {
//   return originalPush.call(this, location).catch(err => err)
// }
// export default new Router({
//   routes: routes
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
