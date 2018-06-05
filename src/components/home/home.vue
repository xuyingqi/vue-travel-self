<template>
  <div>
    <v-header></v-header>
    <swiper :swiperList="swiperList"></swiper>
    <icons :iconList="iconList"></icons>
    <recommend :recommendList="recommendList"></recommend>
    <weekend :weekendList="weekendList"></weekend>
  </div>
</template>

<script>
  import header from 'components/home/header/header'
  import swiper from 'components/home/swiper/swiper'
  import icons from 'components/home/icons/icons'
  import recommend from 'components/home/recommend/recommend'
  import weekend from 'components/home/weekend/weekend'
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: [],
        lastCity: ''
      }
    },
    computed: {
      ...mapState(['city'])
    },
    mounted () {
      this.lastCity = this.city
      this.getHomeInfo()
    },
    activated () {
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
    },
    methods: {
      getHomeInfo () {
        axios.get('/api/index.json?city=' + this.lastCity)
          .then((res) => {
            res = res.data
            if (res.ret === true) {
              this.swiperList = res.data.swiperList
              this.iconList = res.data.iconList
              this.recommendList = res.data.recommendList
              this.weekendList = res.data.weekendList
            }
          })
      }
    },
    components: {
      'v-header': header,
      swiper,
      icons,
      recommend,
      weekend
    }
  }
</script>

<style>

</style>
