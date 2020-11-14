<template>
  <div class="block">
    <el-carousel height="200px" arrow="never">
      <el-carousel-item v-for="(item, index) in list" :key="`banner-${index}`" >
        <img :src="item.image" :alt="item.title" class="bannerImage">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Swiper",
    props: {
      list: {
        type: Array,
        default: ()=>[]
      }
    }
  }
</script>

<style lang="less">
  .bannerImage{
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>