<template>
  <div class="itemWrapper">
    <div class="imgWrapper">
      <img :src="data.show.img" alt="">
    </div>
    <div class="desc">
      <div class="title">{{data.title}}</div>
      <div class="content">
        <span class="price">￥{{data.price}}</span>
        <span :class="[isActive? 'active':'normal']" @click="handleColl"></span>
        <span class="cfav">{{data.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    data: ()=>{
      return{
        isActive: false
      }
    },
    props: {
      data: {
        type: Object,
        default: ()=>{}
      }
    },
    methods: {
      handleColl(){
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style scoped lang="less">
  .itemWrapper{
    /*height: 20rem;*/
    width: 45%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: .5rem .5%;
    .imgWrapper{
      /*height: 80%;*/
      img{
        width: 100%;
      }
    }
    .desc{
      margin: .5rem .1rem;
      font-size: 12px;
      color: #666;
      .title{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .content{
        text-align: center;
        .price{
          color: #ff5777;
          padding: 0 .3rem;
        }
        .active{
          width: 14px;
          height: 14px;
          background-size: 100% 100%;
          background: url('~assets/img/detail/detail_bottom.png') 0 -15px/cover no-repeat;
          display: inline-block;
        }
        .normal{
          width: 14px;
          height: 14px;
          background-size: 100% 100%;
          background: url('~assets/img/detail/detail_bottom.png') 0 2px/cover no-repeat;
          display: inline-block;//
        }
      }
    }
  }
</style>