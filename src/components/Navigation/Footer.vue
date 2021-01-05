<template>
  <div>
    <van-tabbar v-model="active" @change="changeItem" active-color="#ff5f16">
      <van-tabbar-item>
        <van-icon
          class-prefix="iconfont icon-dianying"
          slot="icon"
          size="1.4rem"
        /><span>电影</span></van-tabbar-item
      >
      <van-tabbar-item>
        <van-icon
          class-prefix="iconfont icon-yingyuan"
          slot="icon"
          size="1.4rem"
        /><span>影院</span></van-tabbar-item
      >
      <van-tabbar-item>
        <van-icon
          class-prefix="iconfont icon-wode"
          slot="icon"
          size="1.4rem"
        /><span>我的</span></van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import "@/assets/font_icon/iconfont.css";
export default {
  data() {
    return {
      active: 0,
      urls: ["/films/nowPlaying", "/cinemas", "/center"],
    };
  },
  created() {
    this.active = this.urls.indexOf(this.$route.path);
  },
  methods: {
    changeItem(index) {
      this.$router.push(this.urls[index])
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
