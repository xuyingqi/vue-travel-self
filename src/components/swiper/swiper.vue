<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id" data-swiper-autoplay="2000">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'carrousel',
    props: {
      swiperList: {
        type: Array
      }
    },
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          loop: true,
          autoplay: 3000,
          // paginationClickable: true,
          disableOnInteraction: false,
          autoplayDisableOnInteraction: false
        }
      }
    },
    computed: {
      showSwiper() {
        return this.swiperList.length
      }
     /* swiper() {
        return this.$refs.mySwiper.swiper
      } */
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
       // this.swiper.slideTo(3, 1000, false)
    }
  }
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>
