<template>
  <div>
    <cityHeader></cityHeader>
    <citySearch></citySearch>
    <cityList :cities="cities" :hotCities="hotCities"></cityList>
    <alphabet :cities="cities"></alphabet>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import cityHeader from 'components/city/cityHeader/cityHeader'
  import citySearch from 'components/city/search/search'
  import cityList from 'components/city/cityList/cityList'
  import alphabet from 'components/city/Alphabet/Alphabet'

  export default {
    data() {
      return {
        cities: {},
        hotCities: []
      }
    },
    mounted () {
      this.getCityInfo()
    },
    methods: {
      getCityInfo () {
        axios.get('/api/city.json')
          .then((res) => {
            res = res.data
            if (res.ret && res.data) {
              this.cities = res.data.cities
              console.log(this.cities.key)
              this.hotCities = res.data.hotCities
            }
          })
      }
    },
    components: {
      cityHeader,
      citySearch,
      cityList,
      alphabet
    }
  }
</script>

<style lang="stylus" scoped>

</style>
