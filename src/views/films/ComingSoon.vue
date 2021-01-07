<template>
  <div class="container">
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoad" @refresh="onRefresh">
      <!-- 上拉加载 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
      
        <!-- 卡片区域 -->
        <van-card v-for="item in nowPlayingList" :key="item.filmId">
          <!-- 封面图片 -->
          <template #thumb>
            <img :src="item.poster" class="img" alt="" />
          </template>
          <!-- 电影名称 -->
          <template #title>
            <span class="nowPlayingFilm-name"> {{ item.name }} </span
            ><span class="item"> {{ item.item.name }}</span>
          </template>
          <!-- 电影介绍 -->
          <template #desc>
            <div class="desc">
              <div class="buy">购票</div>
              <div>
                观众评分<span class="grade">{{ item.grade }}</span>
              </div>
              <div>主演：{{ item.actors | name }}</div>
              <div>上映日期：{{ item.premiereAt | getMoment }}</div>
            </div>
          </template>
        </van-card>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import uri from "@/config/uri";
import moment from "moment";
export default {
  data() {
    return {
      // 数据源
      nowPlayingList: [],
      // 下拉刷新
      isLoad: true,
      // 请求页数
      pageNum: 1,
      // 上拉
      loading: false,
      // 用于标记是否还有数据没有请求完
      finished: false,
    };
  },
  filters: {
    // 演员
    name(item) {
      if (item) {
        var str = "";
        item.forEach((element) => {
          str += element.name + " ";
        });
        return (str = str.length > 14 ? str.substr(0, 14) + "..." : str);
      } else {
        return "暂无主演";
      }

      //
    },
    // 上映时间
    getMoment(time) {
      // 星期
      var arr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
      const date = arr[moment(time * 1000).format("E")];
      // 几月
      const month = moment(time * 1000).format("M");
      // 几号
      const day = moment(time * 1000).format("D");
      return `${date} ${month}月${day}号`;
    },
  },
  created() {
    this.getData();
  },
  methods: {
    //下拉刷新
    onRefresh() {
      this.getData();
    },
    // 电影列表数据请求
    async getData() {
      const res = await this.$http.get(
        uri.getComingSoonFilmList + "?pageNum=" + this.pageNum
      );
      // 请求数据成功
      if (res.status === 0) {
        if (this.pageNum <= Math.ceil(res.data.total / 10)) {
          this.nowPlayingList = [ ...this.nowPlayingList,...res.data.films];
          this.pageNum++;
        }else{
          // 没有数据(显示加载完成)
          this.finished = true
        }
      } else {
        Toast.fail("网络繁忙");
      }
      this.isLoad = false;
      this.loading=false
      console.log(res);
    },
    // 上拉刷新事件
    onLoad() {
      this.getData()
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 50px;
}
.img {
  width: 66px;
  border-radius: 0;
}
.nowPlayingFilm-name {
  max-width: calc(100% - 25px);
  color: #191a1b;
  font-size: 16px;
  height: 22px;
  line-height: 22px;
  margin-right: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
}
.item {
  font-size: 9px;
  color: #fff;
  background-color: #d2d6dc;
  height: 14px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
}
.grade {
  color: #ffb232;
  font-size: 14px;
  margin-left: 5px;
}
.desc {
  font-size: 13px;
  margin-top: 4px;
  color: #797d82;
}
.buy {
  float: right;
  line-height: 25px;
  height: 25px;
  width: 50px;
  color: #ff5f16;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid #ff5f16;
  border-radius: 4px;
}
</style>
