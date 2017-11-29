<template>
  <div id="app">
     <!-- 在vue-router中, 我们看到它定义了两个标签<router-link> 和<router-view>来对应点击和显示部分。
     <router-link> 就是定义页面中点击的部分，<router-view> 定义显示部分，就是点击后，区配的内容显示在什么地方。
     所以 <router-link> 还有一个非常重要的属性 to，定义点击之后，要到哪里去，
     如：<router-link  to="/home">Home</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
// export语句用于在创建JavaScript模块时，从模块中导出函数、对象或原始值，以便其他程序可以通过 import 语句使用它们。
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import "./style/style";
</style>
