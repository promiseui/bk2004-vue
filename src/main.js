import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant'
import axios from '@/api/http'

// 中央事件总线
Vue.prototype.$eventBus = new Vue()
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
