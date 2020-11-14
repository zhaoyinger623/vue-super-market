<template>
  <div class="recommendWrapper">
    <div v-for="(item, index) in list" :key="`recommend-${index}`" class="recommendCard">
      <div class="imgWrappr">
        <img :src="item.image" alt="item.title">
      </div>
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Recommend",
    props: {
      list: {
        type: Array,
        default: ()=>[]
      }
    }
  }
</script>

<style  lang="less" scoped>
  .recommendWrapper{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    border-bottom: .7rem solid #eee;
    .recommendCard{
      width: 20%;
      margin: .6rem 2.5%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .imgWrappr{
        width: 100%;
        border-radius: 50%;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }

  }

</style>