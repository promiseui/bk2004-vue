<template>
  <div>
    <van-index-bar :index-list="indexList">
      <template v-for="(item,index) in cityList">
        <van-index-anchor :index="item.title" :key="index">{{item.title}}</van-index-anchor>
        <van-cell v-for="el in item.data" :title="el.name" :key="el.cityId"/>
      </template>
    </van-index-bar>
  </div>
</template>

<script>
import uri from "@/config/uri";
export default {
  data() {
    return {
      // 右侧字母索引
      indexList: [],
      // 城市列表数据
      cityList: [],
      // 生成26个字母的容器
      charList: [],
    };
  },
  async created() {
    // 使底部导航消失
    this.$store.commit("global/setFooter", false);
    //  获取城市列表数据
    const res = await this.$http.get(uri.getCitiesInfo);
    if (res.status === 0) {
      // 生成26个字母
      for (let i = 65; i < 91; i++) {
        this.charList.push(String.fromCharCode(i));
      }
      this.charList.forEach((el) => {
        //得到城市首字母大写的数组
        let ret = res.data.cities.filter(
          (item) => el.toLowerCase() == item.pinyin.substr(0, 1)
        );
        if (ret.length > 0) {
          this.indexList.push(el);
          this.cityList.push({
            title: el,
            data: ret,
          });
        }
      });
    } else {
      Toast.fail("网络繁忙");
    }
    console.log(res);
  },
  beforeDestroy() {
    // 使底部导航出现
    this.$store.commit("global/setFooter", true);
  },
};
</script>

<style lang="scss" scoped>
</style>
