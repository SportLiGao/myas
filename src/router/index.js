import Vue from 'vue'
// 导入路由组件
import Router from 'vue-router'
// 在src/router/index.js中加入Index Content组件的路由：
// 先引入路由
import Index from '@/page/index'
import Content from '@/page/content'
// 使用路由
Vue.use(Router)
// export语句用于在创建JavaScript模块时，从模块中导出函数、对象或原始值，以便其他程序可以通过 import 语句使用它们。
export default new Router({
  // routes 数组
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }
  ]
})
