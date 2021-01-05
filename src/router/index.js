import Vue from 'vue'
import VueRouter from 'vue-router'
import films from './routes/film'
import cinema from './routes/cinema'
import center from './routes/center'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/films/nowPlaying' },
  ...films,
  cinema,
  center
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
