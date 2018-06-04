<template>
  <div class="header">
    <router-link to="/home">
      <span class="icon-arrow_back"></span>
    </router-link>
    城市选择
  </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  }
</script>

<style lang="stylus" scoped>
  @import '~common/styles/varibles.styl'
  .header
    position: relative
    overflow: hidden
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .icon-arrow_back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      line-height: $headerHeight
      text-align: center
      font-size: .4rem
      color: #fff
</style>
