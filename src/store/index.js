import Vue from 'vue'
import Vuex from 'vuex'

// 导入模块
import user from './modules/user'
import global from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
  //数据源
  state: {
    num: 0,
    num1: 100,
    age: 23
  },
  // 同步函数
  mutations: {
    // 参1：数据源  参2：形参
    setNum(state, arg) {
      state.num += arg
    },
    add(state, arg) {
      state.num1 += arg
    }
  },
  // 异步函数
  actions: {
    // 参1:this.$store 对象 参2：形参
    asyncSetstate(context, arg) {
      setTimeout(() => {
        // 再传给 mutations
        context.commit('add', arg)
      }, 1000)
    }
  },
  // 计算属性
  getters: {
    getSetstate(state) {
      return state > 18 ? '成年' : '未成年'
    }
  },
  // 模块 key值必须为模块文件名
  modules: {
    // user:users
    user,
    global 
  }
})
