<template>
  <div class="barWrapper">
    <div v-for="(item, index) in list" :key="`tab-bar-${index}`" class="barItem" @click="handleClick(index)">
      {{item}}
      <div v-if="currentIndex === index" class="line"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    data:()=> {
      return{
        currentIndex: 0
      }
    },
    props: {
      list: {
        type: Array,
        default: ()=>[]
      }
    },
    methods: {
      handleClick(index){
        this.currentIndex = index
        this.$emit('on-click', index)
      }
    }
  }
</script>

<style scoped lang="less">
  .barWrapper{
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    height: 2.8rem;
    margin-top: 1rem;
    z-index: 999;
    .barItem{
      width: 3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .line{
        height: 3px;
        width: 100%;
        background-color: #ff5777;
      }
    }
  }
</style>