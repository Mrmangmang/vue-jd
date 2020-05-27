<template>
    <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler"
            class="botnav"
    >
    </cube-tab-bar>
</template>

<script>
    export default {
        data () {
            return {
                selectedLabelDefault: 'Vip',
                tabs: [{
                    label: '首页',
                    icon: 'cubeic-home'
                }, {
                    label: '分类',
                    icon: 'cubeic-tab'
                }, {
                    label: '搜索',
                    icon: 'cubeic-search'
                }, {
                    label: '购物车',
                    icon: 'cubeic-mall'
                },{
                    label: '个人',
                    icon: 'cubeic-person'
                }]
            }
        },
  methods: {
      clickHandler (label) {
          // if you clicked home tab, then print 'Home'
          console.log(label)
      },
      changeHandler (label) {
          // if you clicked different tab, this methods can be emitted
      }
  }
    }
</script>

<style lang="scss" scoped>



</style>