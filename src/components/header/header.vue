<template>
    <div class="header">
      <div class="header-left"><span class="icon-arrow_back"></span></div>
      <div class="header-input"><span class="icon-search"></span>输入城市/景点/游玩主题</div>
      <div class="header-right">北京<span class="icon-arrow_bottom"></span>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" scoped>
  @import "~common/styles/varibles.styl"
  .header
    display: flex
    height: 43px
    line-height: 44px
    background: $bgColor
    color: #fff
    .header-left
      margin-left: 5px
      margin-right: 10px
      width: 32px
      font-size: 22px
    .header-input
      flex: 1
      line-height: 31px
      margin: 6px 15px 6px 0
      padding-left: 10px
      background: $white
      border-radius: 5px
      color: #ccc
      .icon-search
        margin-right: 5px
    .header-right
      width: 62px
      .icon-arrow_bottom
        padding-left: 3px
        font-size: 8px
</style>
