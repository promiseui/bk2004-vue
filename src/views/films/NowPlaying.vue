<template>
  <div>
    <div>
      <van-loading class="loading" type="spinner" v-if="isLoading" size="24px"
        >加载中...</van-loading
      >
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
            <div>
              观众评分<span class="grade">{{ item.grade }}</span>
            </div>
            <div>主演：{{ item.actors | name }}</div>
            <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
          </div>
        </template>
        <template #tags>
          <van-tag plain type="danger" class="buy">购票</van-tag>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
import uri from "@/config/uri";
export default {
  data() {
    return {
      nowPlayingList: [],
      isLoading: true,
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
  async created() {
    const res = await this.$http.get(uri.getNowPlayngFilm);
    if (res.status === 0) {
      this.nowPlayingList = res.data.films;
    }
    this.isLoading = false;
    console.log(res);
  },
};
</script>

<style lang="scss" scoped>
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
  text-align: center;
  width: 29px;
  height: 25px;
  border: 1px solid #ff5f16;
  margin-top: -45px;
  border-radius: 4px;
  float: right;
}
</style>
