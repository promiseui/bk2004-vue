<template>
  <div>
    <h1>我是一个Vuex组件</h1>
    <button @click="dian">点我++</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions,mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    //  数据源 map方法 还有getters必须放在 computed 里
    // ...mapState(["num1"]),
    ...mapGetters(['getSetstate']),

    // 命名空间  map方法  
    ...mapState('user',['age']),
    ...mapGetters('user',['setEmail'])
  },
  created() {
    //   数据源 this 获取数据
    // console.log(this.$store.state.num);
    // console.log(this.num1);  map 获取数据源数据

    // 命名空间 this 获取state
    // console.log(this.$store.state.user.age )
    // 命名空间 map 获取state
    console.log(this.age);

    // this 获取getters数据
    // console.log(this.$store.getters.setEmail)
    console.log(this.getSetstate);   // 获取 getters  数据
    console.log(this.$store);
    // 模块中的state是state下的对象，具有唯一性 
    console.log(this.$store.state.user.username)
    // 模块 getters 名字相同 模块里命名空间 namespaced:true  []模块名/属性名
    // console.log(this.$store.getters['user/setEmail']);
    // 命名空间 map 获取 getters属性
    console.log(this.setEmail);
  },
  mounted() {},
  methods: {
    // 同步 map方法 获取 同步事件
    // ...mapMutations(["setNum"]),
    // 异步 map方法 获取异步事件
    // ...mapActions(["asyncSetstate"]),
    // dian(){
    //     this.setNum(5)
    //     this.asyncSetstate(10)
    // },
    // this方法调用
    // dian() {
    //   this.$store.commit("setNum", 5);
    //   this.$store.dispatch('asyncSetstate',10)
    // },

    // 模块
    // this 方法调用
    // dian(){
    //     this.$store.commit('setUsername','zhangsan')
    //     this.$store.dispatch('setAge',100)
    // },

    //带有命名空间  map
    // 带有命名空间 参1：空间名(文件名) 
    // ...mapMutations('user',['setUsername']),
    // ...mapActions('user',['setAge']),
    // dian(){
    //     this.setUsername('zhaoliu')
    //     this.setAge(50)
    // }

    // 带有命名空间 this
    dian(){
        // 参1：空间名/函数名   参2：形参
        this.$store.commit('user/setUsername','zhangsan')
        this.$store.dispatch('user/setAge',10)
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
