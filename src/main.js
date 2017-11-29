import Vue from 'vue'
// 把App.vue文件（组件）导入主文件main.js
import App from './App'
// router 是一个机制，相当于一个管理者，它来管理路由。因为routes 只是定义了一组路由，
// 它放在哪里是静止的，当真正来了请求，怎么办？ 就是当用户点击home 按钮的时候，怎么办？这时router 就起作用了，
// 它到routes 中去查找，去找到对应的 home 内容，所以页面中就显示了 home 内容。
// 为什么不写import router from './router/index'？疑问
import router from './router'

// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 以id为app的div为容器
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
