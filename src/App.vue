<template>
  <div id="app">
    <!-- <Footer v-show="$store.state.global.is_show"></Footer > -->
    <Footer v-show="is_show"></Footer>
    <router-view />
  </div>
</template>
 <script>
import Footer from "@/components/Navigation/Footer";
export default {
  data() {
    return {
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
  created() {
     
  },
};
</script>
<style lang="scss">
</style>
