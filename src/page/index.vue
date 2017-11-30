<template>
  <div>
    <Header></Header>
    <div class="article_list">
      <ul>
        <li v-for="i in list">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <!-- router-link 是 VueRouter2 “声明式导航”的写法，在实际转换为 html 标签的时候，
          会转化为 <a></a>，里面的 to 属性，就相当于 a 的 href 属性。 -->
          <router-link :to="'/content/' + i.id">
            {{ i.title }}
          </router-link>
        </li>
      </ul>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../components/header.vue'
import Footer from '../components/footer.vue'
// 导出对象以至于能import引用
export default {
  components: { Header, Footer },
  data () {
    return {
      list: []
    }
  },
//  created这是它的一个生命周期钩子函数，就是一个vue实例被生成后调用这个函数。一个vue实例被生成后还要绑定到某个html元素上，
//  之后还要进行编译，然后再插入到document中。每一个阶段都会有一个钩子函数，方便开发者在不同阶段处理不同逻辑。
//  一般可以在created函数中调用ajax获取页面初始化所需的数据。
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topics', null, r => {
        // 着重体现了 vue 的数据双向绑定的特性????哪体现了？
        this.list = r.data
      })
    }
  }
}
</script>
