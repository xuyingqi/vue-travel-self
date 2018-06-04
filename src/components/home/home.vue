<template>
  <div>
    <v-header :city="city"></v-header>
    <swiper :swiperList="swiperList"></swiper>
    <icons :iconList="iconList"></icons>
    <recommend :recommendList="recommendList"></recommend>
    <weekend :weekendList="weekendList"></weekend>
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
        city: '',
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
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json')
          .then((res) => {
            res = res.data
            if (res.ret === true) {
              this.city = res.data.city
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
