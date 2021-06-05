<template>
    <div class="goods_list_item">
      <a :href="good.link">
        <img :src="good.image" @load="imageLoad"/>
      </a>
      <div class="title">{{good.title}}</div>
      <p class="bug">{{good.acm}}</p>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props: {
          good : {

          }
        },
        methods : {
          //每张图片加载完成之后，向事件总线发射“图片加载完成”
          imageLoad(){
            this.$bus.$emit('imageLoad');
          }
        }
    }
</script>

<style scoped>
  .goods_list_item{
    padding-bottom: 40px;
    position: relative;
  }


  .goods_list_item img {
    width: 100%;
    /*图片圆角*/
    border-radius: 5px;
  }

  .title {
    font-size: 14px;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .bug{
    /*p标签多余文字隐藏成……*/
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

</style>
