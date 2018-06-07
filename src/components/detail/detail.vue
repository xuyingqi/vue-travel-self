<template>
  <div>
    <v-header></v-header>
    <banner></banner>
    <list :list="list"></list>
  </div>
</template>

<script type="text/ecmascript-6">
  // import axios from 'axios'
  import banner from 'components/detail/banner/banner'
  import header from 'components/detail/header/header'
  import list from 'components/detail/list/list'

  export default {
    data() {
      return {
        list: [
          {
            title: '成人票',
            children: [{
              title: '成人三馆联票',
              children: [
                {
                  title: '成人三馆联票-某一连锁店销售'
                }
              ]
            }]
          }, {
            title: '学生票'
          }, {
            title: '儿童票'
          }, {
            title: '特惠票'
          }
        ]
      }
    },
    methods: {
    },
    components: {
      banner,
      'v-header': header,
      list
    }
  }
</script>

<style lang="stylus" scoped>
</style>
