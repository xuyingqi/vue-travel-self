<template>
    <div>
      <v-header></v-header>
      <banner></banner>
      <div class="content"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  // import axios from 'axios'
  import banner from 'components/detail/banner/banner'
  import header from 'components/detail/header/header'
  export default {
    methods: {
      // axios.get().then
    },
    components: {
      banner,
      'v-header': header
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height: 1000px
</style>
