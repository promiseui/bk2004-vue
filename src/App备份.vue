<template>
  <div id="app">
    <!-- 方式一 改变视图变化，使组件重新渲染 -->
    <!-- <Footer v-show="$store.state.global.is_show"></Footer > -->
    <!-- 方式二 通过计算属性-->
    <Footer v-show="is_show"></Footer>
    <router-view />
  </div>
</template>
 <script>
import Footer from "@/components/Navigation/Footer";
export default {
  data() {
    return {
      //  is_show : true
    };
  },
  computed: {
    is_show(){
      return this.$store.state.global.is_show
    }
  },
  components: {
    Footer,
  },
  //  根组件生命周期只走一次，不会被销毁
  created() {
    //  中央事件总线
    /*  this.$eventBus.$on('show_footer',flag=>{
       this.is_show = flag
     }) */
  },
};
</script>
<style lang="scss">
</style>
