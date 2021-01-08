import Vue from 'vue'
import VueRouter from 'vue-router'
import films from './routes/film'
import cinema from './routes/cinema'
import center from './routes/center'
import vuex from './routes/vuex'
//城市列表
import City from '@/views/city/CityList'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/films/nowPlaying' },
  { path: '/city', component: City },
  ...films,
  cinema,
  ...center,
  vuex
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
