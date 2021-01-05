<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Navigation/Header";
export default {
  data() {
    return {};
  },
  components: { Header },
  created() {},
};
</script>

<style lang="scss" scoped>
 
</style>
