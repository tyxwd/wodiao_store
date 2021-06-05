<template>
  <div id="app">
    <!--页面创建完成后，转到其他页面，返回后不销毁-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/mainTabbar/MainTabBar";
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>

