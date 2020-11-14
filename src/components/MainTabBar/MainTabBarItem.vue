<template>
  <div class="itemWrapper" @click="handleClick()">
    <div class="icon" v-if="!isActive"><slot name="icon"></slot></div>
    <div class="icon" v-else><slot name="active-icon"></slot></div>
    <div class="text"><slot name="text"></slot></div>
  </div>
</template>

<script>

export default {
  name: 'MainTabBarItem',
  data(){
    return{

    }
  },
  props: {
    link: {
      type: String,
      default: ''
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
  },
  methods: {
    handleClick(){
      this.$router.push({path: this.link})
      // this.$emit("tab-click", true)
      // this.isActive = true
      // console.log( window.location.href, this.link)
      // this.isActive = this.$route.matched[0].path === this.link ? true: false
      // this.isActive = window.location.href.indexOf(this.link) !== -1  ? true: false

    }
  }
}
</script>

<style scoped lang="less">
  .itemWrapper{
    padding: .2rem .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .text{

    }
  }
  .icon{
    width: 1.5rem;
    height: 1.5rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>