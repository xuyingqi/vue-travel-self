<template>
  <scroll class="city-list">
    <div>
     <div class="area">
       <div class="title">当前城市</div>
       <div class="button-list">
         <div class="button-wrapper">
           <div class="button">北京</div>
         </div>
       </div>
     </div>
     <div class="area">
       <div class="title">热门城市</div>
       <div class="button-list">
         <div class="button-wrapper"
              v-for="hotCity in hotCities"
              :key="hotCity.id"
         >
           <div class="button">{{hotCity.name}}</div>
         </div>
     </div>
     </div>
     <div class="area">
       <div v-for="(group, key) in cities" :key="key">
         <div class="title">{{key}}</div>
         <div class="item-list" v-for="item in group" :key="item.id">
           <div class="item border-1px">{{item.name}}</div>
         </div>
       </div>
    </div>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import scroll from 'components/city/scroll/scroll'
  export default {
    props: {
      cities: {
        type: Object
      },
      hotCities: {
        type: Array
      }
    },
    components: {
      scroll
    }
  }
</script>

<style lang="stylus" scoped>
  @import '~common/styles/varibles.styl'
  @import '~common/styles/mixins.styl'
  .city-list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
        border-1px(#ccc)
</style>
