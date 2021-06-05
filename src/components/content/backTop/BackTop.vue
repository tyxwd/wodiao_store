<template>
    <div class="back_top">
      <img src="~assets/img/common/top.png"/>
    </div>
</template>

<script>
    export default {
        name: "BackTop"
    }
</script>

<style scoped>
  .back_top {
    position: fixed;
    right: 1.5%;
    bottom: 8%;

    z-index: 9;
    width: 60px;
    height: 60px;
  }

  .back_top img {
    width: 100%;
  }

</style>
