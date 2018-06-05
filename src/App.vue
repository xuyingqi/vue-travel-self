<template>
  <div id="app">
    <!--<router-link to="/home">cityHeader</router-link>-->
    <!--<router-link to="/city">city</router-link>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style></style>
