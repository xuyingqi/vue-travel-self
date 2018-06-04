import Vue from 'vue'
import VueRouter from 'vue-router'
import home from 'components/home/home'
import city from 'components/city/city'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/city',
    component: city
  }
]
const router = new VueRouter({
  routes
})
export default router
