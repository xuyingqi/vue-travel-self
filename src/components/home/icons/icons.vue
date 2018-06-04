<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide  v-for="page in pages" :key="page.id">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    data() {
      return {
        swiperOption: {
          loop: false
        }
      }
    },
    props: {
      iconList: {
        type: Array
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "~common/styles/varibles.styl"
  @import "~common/styles/mixins.styl"
  .icons
    margin-top: 10px
    width: 100%
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        left: 0
        top: 0
        right: 0
        bottom: 38%
        padding-top: 5px
        text-align: center
        .icon-img-content
          height: 100%
      .icon-desc
        position: absolute
        width: 100%
        bottom: 10px
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
