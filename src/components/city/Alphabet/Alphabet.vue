<template>
  <ul class="alphabet-list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" scoped>
  @import "~common/styles/varibles.styl"
  .alphabet-list
    position: absolute
    display: flex
    flex-direction: column
    justify-content: center
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
