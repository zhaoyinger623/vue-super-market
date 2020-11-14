<template>
  <div class="tabBarWrapper">
    <main-tab-bar-item link="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="text">主页</div>
    </main-tab-bar-item>
    <main-tab-bar-item link="/category">
      <img slot="icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="text">分类</div>
    </main-tab-bar-item>
    <main-tab-bar-item link="/cart">
      <img slot="icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="text">购物车</div>
    </main-tab-bar-item>
    <main-tab-bar-item link="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="text">我的</div>
    </main-tab-bar-item>
  </div>
</template>

<script>
  import MainTabBarItem from './MainTabBarItem'
  export default {
    name: 'MainTabBar',
    components: {MainTabBarItem},
    data(){
      return {
        tabItem: ['首页','分类','购物车','我的']
      }
    },
    props: {

    }
  }
</script>

<style scoped lang="less">
  .tabBarWrapper{
    width: 100%;
    height: 4rem;
    position: sticky;
    bottom: -.2rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-evenly;
    box-shadow: 0px 1px 20px rgb(200,200,200);
    background-color: #fff;
    .tabBarItem{
      
    }
  }
</style>
