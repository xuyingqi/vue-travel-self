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
  import SwiperSlide from '../../../node_modules/vue-awesome-swiper/src/slide.vue'

  export default {
    components: {SwiperSlide},
    data () {
      return {
        swiperOption: {
        },
        iconList: [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
          desc: '景点门票'
        }, {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
          desc: '滑雪季'
        }, {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
          desc: '泡温泉'
        }, {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          desc: '动植园'
        }, {
          id: '0006',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
          desc: '滑雪季'
        }, {
          id: '0007',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
          desc: '泡温泉'
        }, {
          id: '0008',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          desc: '动植园'
        }, {
          id: '0009',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
          desc: '一日游'
        }, {
          id: '0010',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
          desc: '泡温泉'
        }, {
          id: '0011',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
          desc: '泡温泉'
        }, {
          id: '0012',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          desc: '动植园'
        }]
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
        bottom: 25%
        padding-top: 5px
        text-align: center
        .icon-img-content
          height: 100%
      .icon-desc
        position: absolute
        width: 100%
        bottom: 5px
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
