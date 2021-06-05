<template>
  <div class="nav_bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="mid"><slot name="mid"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav_bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    /*导航栏颜色，但不建议在这里设置*/
    /*background-color: aqua;*/
    text-align: center;
    /*导航栏下加阴影*/
    box-shadow:0 2px 2px gainsboro;
  }

  .left, .right{
    width: 60px;

  }

  .mid{
    flex: 1;
  }
</style>
