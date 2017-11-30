<template>
  <div>
    <!-- 不要使用 html 本身就支持的标签名称来自定义我们的组件，这容易导致混乱，最好，
    是像内容页里面这样，使用自定义的标签名。 -->
    <myHeader></myHeader>
    <h2 v-text="dat.title"></h2>
    <p>作者：{{dat.author.loginname}}　　发表于：{{$utils.goodTime(dat.create_at)}}</p>
    <hr>
    <!-- 同样是渲染内容， v-html 和 v-text 有什么区别呢？其实区别非常简单，
    v-text 会把所有的内容当成字符串给直接输出出来。而 v-html 会把字符串给转换为 html 标记语言给渲染出来。 -->
    <article v-html="dat.content"></article>
    <h3>网友回复：</h3>
    <ul>
      <li v-for="i in dat.replies">
        <p>评论者：{{i.author.loginname}}　　评论于：{{$utils.goodTime(i.create_at)}}</p>
        <article v-html="i.content"></article>
      </li>
    </ul>
    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from '../components/header.vue'
import myFooter from '../components/footer.vue'
export default {
  components: { myHeader, myFooter },
  data () {
    return {
      // params传值是通过 :[参数值] 如path: "/home/game/:num"
      id: this.$route.params.id,
      dat: {}
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api.get('topic/' + this.id, null, r => {
        this.dat = r.data
        console.log(this.$route)
      })
    }
  }
}
</script>
