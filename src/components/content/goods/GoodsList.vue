<template>
  <div class="goods_list">
    <goods-list-item v-for="item in goods" :key="item.index" :good="item" class="item"></goods-list-item>
  </div>

</template>

<script>
  import GoodsListItem from "./GoodsListItem";
    export default {
      name: "GoodsList",
      components: {GoodsListItem},
      props : {
        goods : {
          type : Array,
          default(){
            return [];
          }
        }
      }
    }
</script>

<style scoped>
  .goods_list {
    display: flex;
    /*根据每个宽度决定一行塞多少个*/
    flex-wrap: wrap;
    padding: 5px;

    /*图片周围白边等宽，中间的是边上的两倍*/
    justify-content: space-around;
  }

  .goods_list .item {
    width: 48%;
  }

</style>
