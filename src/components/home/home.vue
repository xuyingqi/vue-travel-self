<template>
  <div>
    <header></header>
    <swiper></swiper>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
  import header from 'components/header/header'
  import swiper from 'components/swiper/swiper'
  import icons from 'components/icons/icons'
  import recommend from 'components/recommend/recommend'
  import weekend from 'components/weekend/weekend'
  import axios from 'axios'

  export default {
    data () {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
      }
    },
    components: {
      'v-header': header,
      swiper,
      icons,
      recommend,
      weekend
    },
    mounted () {
      this.getHomeInfo()
      console.log('222')
    },
    methods: {
      getHomeInfo () {
        console.log('111')
        axios.get('/api/index.json')
          .then((res) => {
            console.log('333')
            res = res.data
            if (res.ret === true) {
              this.swiperList = res.data.swiperList
              this.iconList = res.data.iconList
              this.recommendList = res.data.recommendList
              this.weekendList = res.data.weekendList
            }
          })
      }
    }
  }
</script>

<style>

</style>
