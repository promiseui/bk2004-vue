<template>
  <div class="container">
    <!-- 下拉刷新 -->
    <van-pull-refresh v-model="isLoad" @refresh="onRefresh">
      
      <!-- 加载中 -->
      <van-loading class="loading" type="spinner" v-if="isLoading" size="24px"
        >加载中...</van-loading
      >

      <!-- 卡片区域 -->
      <van-card v-for="item in nowPlayingList" :key="item.filmId" @click="toDetail(item.filmId)">
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
            <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
          </div>
        </template>
      </van-card>
    </van-pull-refresh>
  </div>
</template>

<script>
import uri from "@/config/uri";

export default {
  data() {
    return {
      // 数据源
      nowPlayingList: [],
      // 加载中
      isLoading: true,
      // 下拉刷新
      isLoad: true,
      pageNum: 1,
    };
  },
  filters: {
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
    },
  },
  created() {
    this.getData();
  },
  methods: {
    onRefresh() {
       this.getData()
    },
    // 获取电影数据
    async getData() {
      const res = await this.$http.get(
        uri.getNowPlayngFilm + "?pageNum=" + this.pageNum
      );
      // 请求数据成功
      if (res.status === 0) {
        if (this.pageNum <= Math.ceil(res.data.total / 10)) {
          this.nowPlayingList = [...res.data.films, ...this.nowPlayingList];
          this.pageNum ++;
        }
      }else{
        Toast.fail('网络繁忙')
      }
      this.isLoading = false;
      this.isLoad = false;
      console.log(this.nowPlayingList);
    },
    // 跳转到详情页
    toDetail(id){
      this.$router.push(`/film/${id}`)
      // console.log(this.$route);
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-bottom: 50px;
}
.loading {
  text-align: center;
  margin-top: 10px;
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
