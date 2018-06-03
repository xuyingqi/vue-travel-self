import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'components/home/home'
import list from 'components/list/list'

Vue.use(VueRouter)
const routes = [
  {
    path: '/home',
    component: home
  },
  {
    path: '/list',
    component: list
  }
]
const router = new VueRouter({
  routes
})
export default router
