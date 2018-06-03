<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <router-link to="./home">首页</router-link>
      <router-link to="./list">列表</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import header from 'components/header/header'
  export default {
    components: {
      'v-header': header
    }
  }
</script>

<style>
  #app {
  }
</style>
