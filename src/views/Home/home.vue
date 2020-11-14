<template>
  <div class="homeWrapper" id="goods">
    <swiper :list="bannerList"/>
    <recommend :list="recommendList"/>
    <popular/>
    <tab-bar :list="tabList" @on-click="handleClick" :class="[isSticky?'sticky':'']"/>
    <good-list :list="goodsList[currentTab].list" :type="currentTab" class="goodsList" />
  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";
import Swiper from './components/Swiper'
import Recommend from './components/Recommend'
import Popular from './components/Popular'
import GoodList from './components/GoodList'
import TabBar from 'components/TabBar'

export default {
  name: 'Home',
  components: {
    Swiper, Recommend, Popular, TabBar, GoodList
  },
  data: ()=>{
    return{
      tabList: ['流行','新款','精选'],
      tabItem: ['pop', 'new', 'sell'],
      currentTab: 'pop',
      isSticky: false,
      popTop: 560,
      newTop: 560,
      sellTop: 560
    }
  },
  created(){
    this.asyncFetchList()
    this.asyncFetchData({type: 'pop', page: 1})
    this.asyncFetchData({type: 'new', page: 1})
    this.asyncFetchData({type: 'sell', page: 1})
  },
  mounted(){
    const _this = this
    window.onscroll = function(){
      //变量scrollTop是滚动条滚动时，距离顶部的距离
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      //变量windowHeight是可视区的高度
      let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
      //变量scrollHeight是滚动条的总高度
      let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
      // console.log('scrollTop', scrollTop, 'windowHeight', windowHeight, 'scrollHeight', scrollHeight)
      // console.log(scrollTop)
      if(scrollTop >= 590){
        _this.isSticky = true
        if(_this.currentTab === 'new'){
          _this.newTop = scrollTop
        }
        if(_this.currentTab === 'pop'){
          _this.popTop = scrollTop
        }
        if(_this.currentTab === 'sell'){
          _this.sellTop = scrollTop
        }
      }else{
        _this.isSticky = false
      }

      //滚动条到底部的条件
      if(scrollTop+windowHeight+2 >= scrollHeight){
        //到了这个就可以进行业务逻辑加载后台数据了
        console.log("到了底部");
        const type = _this.currentTab
        const page = _this.goodsList[_this.currentTab].page + 1
        _this.asyncFetchData({type, page})
      }
    }
  },
  watch: {


  },
  computed: {
    ...mapState('home', ['bannerList', 'recommendList', 'keywords','goodsList'])

  },
  methods: {
    ...mapActions('home', ['asyncFetchList', 'asyncFetchData']),
    handleClick(index){
      this.currentTab = this.tabItem[index]
      const goodsElement = document.getElementById('goods')
      setTimeout(()=>{
        console.log(this.popTop, this.newTop, this.sellTop)
        if(this.currentTab === 'new'){
          // goodsElement["transform"] =  'translateY(' + this.newTop + 'px)'
          // goodsElement.style.transform = 'translateY(' + this.newTop + 'px)'
          // goodsElement.scrollTop = this.newTop
          window.scrollTo(0,this.newTop);
        }
        if(this.currentTab === 'pop'){
          // goodsElement["transform"] = "translateY(" + this.popTop + "px)"
          // goodsElement.style.transform = 'translateY(' + this.popTop + 'px)'
          // goodsElement.scrollTop = this.popTop
          window.scrollTo(0,this.popTop);
        }
        if(this.currentTab === 'sell'){
          // goodsElement["transform"] = "translateY(" + this.sellTop + "px)"
          // goodsElement.style.transform = 'translateY(' + this.sellTop + 'px)'
          // goodsElement.scrollTop = this.sellTop
          window.scrollTo(0,this.sellTop);
        }
      },0)



    }
  }
}
</script>

<style lang="less" scoped>
  .homeWrapper{
    min-height: 10rem;
    .sticky{
      top: 0;
      left: 0;
      right: 0;
      position: sticky;
    }
    .goodsList{
      margin-bottom: 4rem;
    }
  }
</style>
