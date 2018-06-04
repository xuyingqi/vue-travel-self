<template>
  <div id="app">
    <v-header></v-header>
    <swiper></swiper>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
   <!-- <div class="tab">
      <router-link to="./home">首页</router-link>
      <router-link to="./list">列表</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
  </div>
</template>

<script>
  import header from 'components/header/header'
  import swiper from 'components/swiper/swiper'
  import icons from 'components/icons/icons'
  import recommend from 'components/recommend/recommend'
  import weekend from 'components/weekend/weekend'
  export default {
    components: {
      'v-header': header,
      swiper,
      icons,
      recommend,
      weekend
    }
  }
</script>

<style>
  #app {
  }
</style>
