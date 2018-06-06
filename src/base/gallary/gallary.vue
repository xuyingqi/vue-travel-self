<template>
  <div class="container" @click="handleGallaryClick" ref="container">
    <div class="wrapper">
      <swiper class="my-swiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      imgs: {
        type: Array,
        default () {
          return []
        }
      }
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationType: 'fraction',
          observer: true,
          observeParents: true
        }
      }
    },
    methods: {
      handleGallaryClick () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .
  container > > >
  .swiper-container
    overflow: inherit

  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      position: relative
      height: 0
      width: 100%
      padding-bottom: 100%
      .my-swiper
        position: absolute
        top: 0
        bottom: 0
        .gallary-img
          width: 100%
          height: 100%
        .swiper-pagination
          position: fixed
          width: 100px
          left: 50%
          margin-left: -50px
          bottom: 1.5rem
          color: #fff
</style>
