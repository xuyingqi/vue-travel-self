<template>
    <div>
      <cityHeader></cityHeader>
      <citySearch></citySearch>
      <cityList></cityList>
      <alphabet></alphabet>
    </div>
</template>

<script type="text/ecmascript-6">
  import cityHeader from 'components/city/cityHeader/cityHeader'
  import citySearch from 'components/city/search/search'
  import cityList from 'components/city/cityList/cityList'
  import alphabet from 'components/city/Alphabet/Alphabet'
  export default {
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
