<template>
  <div class="goodsWrapper">
    <goods-list-item v-for="(item, index) in list" :key="`goods-item-${index}`" :data="item"></goods-list-item>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodList",
    components: {GoodsListItem},
    props: {
      list: {
        type: Array,
        default: ()=>[]
      },
      type: {
        type: String,
        default: 'pop'
      }
    },
    data: ()=>{
      return{

      }
    },
    mounted(){

    },
    updated(){
      // console.log('--------')
      // const _this = this
      // window.onscroll = function(){
      //   //变量scrollTop是滚动条滚动时，距离顶部的距离
      //   let scrollToTop = document.documentElement.scrollTop||document.body.scrollTop;
      //   console.log('====',scrollToTop)
      //   if(_this.type === 'new'){
      //     _this.newTop = scrollToTop
      //   }
      //   if(_this.type === 'pop'){
      //     _this.popTop = scrollToTop
      //   }
      //   if(_this.type === 'sell'){
      //     _this.sellTop = scrollToTop
      //   }
      // }
      // setTimeout(()=>{
      //   const goodsElement = document.getElementById('#goods')
      //   if(this.type === 'new'){
      //     goodsElement["transform"] =  'translateY(' + this.newTop + 'px)'
      //   }
      //   if(this.type === 'pop'){
      //     console.log('..................', this.popTop)
      //     goodsElement["transform"] = "translateY(" + this.popTop + "px)"
      //   }
      //   if(this.type === 'sell'){
      //     goodsElement["transform"] = "translateY(" + this.sellTop + "px)"
      //   }
      // }, 1000)




    }
  }
</script>

<style scoped lang="less">
  .goodsWrapper{
    display: flex;
    justify-content: space-evenly;
    flex-wrap:wrap
  }

</style>