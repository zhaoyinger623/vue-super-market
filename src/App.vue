<template>
  <div>
    <el-table
        v-if="isTouch"
        v-loading="isTouch"
        element-loading-text="拼命加载中..."
        element-loading-spinner="el-icon-loading"
        element-loading-background="#ff8198"
        :style="{width: '100%', height: top + 'px', position: 'absolute'}">
        class="backGround"
    </el-table>
    <div @touchstart="touchStart($event)" @touchmove="touchMove($event)" @touchend="touchEnd($event)" :style="{transform: 'translateY(' + top + 'px)'}">
      <router-view></router-view>
      <main-tab-bar />
    </div>
  </div>

</template>

<script>
import MainTabBar from './components/MainTabBar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar,

  },
  data(){
    return {
      isTouch: false,
      top: 0,
      startTop: 0
    }
  },
  methods: {
    touchStart(e){
      // console.log('开始触摸', e)
      this.startTop = e.targetTouches[0].pageY
    },
    touchMove(e){
      // console.log('开始拖动', e)
      this.scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop // safari 获取scrollTop用window.pageYOffset
      if (e.targetTouches[0].pageY > this.startTop) {
        // 下拉
        this.isTouch = true
        if (this.scrollTop === 0) {
          // 拉动的距离
          let diff = e.targetTouches[0].pageY - this.startTop
          this.top = diff
          // console.log('====', this.top)
        }
      }
    },
    touchEnd(e){
      // console.log('松手', e)
      setTimeout(()=>{
        this.isTouch = false
        this.top = 0
      }, 5000)

    }
  }
}
</script>

<style lang="less">
  @import "assets/css/base.css";
  .el-table__empty-block{
    display: none;
  }
  .el-icon-loading , .el-loading-text{
    color: white !important;
    font-size: 16px;
  }
</style>
