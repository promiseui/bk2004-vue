<template>
  <div class="detail">
    <!-- 图片 -->
    <div>
      <img v-lazy="list.poster" alt="" width="100%" />
    </div>
    <!-- 基本介绍  -->
    <div v-if="list.filmType">
      <div>
        {{ list.name }}<span>{{ list.filmType.name }}</span
        ><span>{{ list.grade }}</span>
      </div>
      <div>{{ list.category }}</div>
      <div>{{ list.premiereAt | retime }}上映</div>
      <div>{{ list.nation }} | {{ list.runtime }}分钟</div>
    </div>
    <!-- 影片内容 -->
    <div>{{ list.synopsis }}</div>
    <div>
      <div>演职人员：</div>
      <Actors :key="list.actors.length">
        <div
          class="swiper-slide"
          v-for="(item, index) in list.actors"
          :key="index"
          style="width: 85px"
        >
          <img :src="item.avatarAddress" alt="" style="width: 85px" />
        </div>
      </Actors>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
// 导入映射系列方法
import { mapMutations } from "vuex";
// 演员轮播图
import Actors from "./Actors";
// 图片懒加载
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  loading: "https://2url.cc/1OwrB",
});
// 时间整理
import moment from "moment";
import uri from "@/config/uri";

export default {
  data() {
    return {
      // 请求得到的数据
      list: { actors: [] },
    };
  },
  components: { Actors },
  filters: {
    retime(time) {
      return moment(time * 1000).format("YYYY-MM-DD");
    },
  },
  methods: {
    ...mapMutations("global", ["setFooter"]),
  },
  async created() {
    const res = await this.$http.get(uri.getFilmInfo, {
      params: this.$route.params,
    });
    if (res.status == 0) {
      // 请求数据成功
      this.list = res.data.film;
    } else {
      Toast.fail("res.msg");
    }
    console.log(res);
    this.setFooter(false);
  },
  beforeDestroy() {
     
    this.setFooter(true);
  },
};
</script>

<style lang="scss" scoped>
.detail {
  margin-bottom: 50px;
}
</style>
