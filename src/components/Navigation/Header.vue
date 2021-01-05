<template>
  <div>
    <van-tabs line-width="60px" @click="onClick" v-model="active">
      <van-tab title="正在上映"></van-tab>
      <van-tab title="即将上映"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}
export default {
  data() {
    return {
      active: 0,
      films: ["/films/nowPlaying","/films/comingSoon"],
    };
  },
  created() {
      this.active = this.films.indexOf(this.$route.path)
  },
  methods: {
    onClick(index) {
      this.$router.push(this.films[index]);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
