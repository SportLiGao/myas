 
<template>
  <div id="app">
     <!-- App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。其实你也可以理解为所有的路由也是App.vue的子组件。
      所以我将router标示为App.vue的子组件。 -->
      
     <!-- 在vue-router中, 我们看到它定义了两个标签<router-link> 和<router-view>来对应点击和显示部分。
     <router-link> 就是定义页面中点击的部分，<router-view> 定义显示部分，就是点击后，区配的内容显示在什么地方。
     所以 <router-link> 还有一个非常重要的属性 to，定义点击之后，要到哪里去，
     如：<router-link  to="/home">Home</router-link> -->

     <!--
       index.html中的<div id="app"></div>是指定绑定元素根路径的  
       App.vue的<div id="app"></div>则是用于具体注入绑定元素的内容
       由于Vue组件必须有个根元素，所以App.vue里面，
       根元素<div id="app"></div>与外层被注入框架index.html中的<div id="app"></div>是一致的 
       index.html中的#app指定绑定目标，而vue文件里的#app提供填充内容，两者在运行时指的是同一个DOM元素。
     -->

     <!--<router-view></router-view> 主要是构建 SPA (单页应用) 时，方便渲染你指定路由对应的组件。
     你可以 router-view 当做是一个容器，它渲染的组件是你使用 vue-router 指定的。比如： -->
     <img src="4.png" alt="插图">
    <router-view></router-view>

  </div>
</template>

<script>
// export语句用于在创建JavaScript模块时，从模块中导出函数、对象或原始值，以便其他程序可以通过 import 语句使用它们。

// { name: 'app' }是一个对象, export default { name: 'app' }是es6 module语法, 导出这个对象.
// vue组件的name属性主要用于方便debug.
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "./style/style";
</style>
