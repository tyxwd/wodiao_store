<template>
    <div class="home_commend">
      <div v-for="item in commends" :key="item.index" class="home_commend_item">
        <a :href="item.link">
          <img :src="item.image"/>
          <div>{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomeCommend",
        props : {
          commends :{
            type : Array,
            default() {
              return [];
            }
          }
        }
    }
</script>

<style scoped>
  .home_commend {
    display: flex;
    width: 100%;

    padding-bottom: 15px;

    /*下面加条灰色的杠*/
    border-bottom: 10px solid #eee;
  }

  .home_commend_item {
    flex: 1;
    /*标签内容水平居中*/
    text-align: center;
  }

  .home_commend_item img {
    width: 90%;
    /*图片下方留白区域5像素*/
    margin-bottom: 5px;
  }

</style>
