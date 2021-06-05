<template>
  <swiper class="home_swiper">
    <swiper-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  //轮播图，也可以直接导入vue的写法，这是从js文件中导入对象
  // import {Swiper, SwiperItem} from "components/common/swiper";
  import Swiper from "../../../components/common/swiper/Swiper";
  import SwiperItem from "../../../components/common/swiper/SwiperItem";


    export default {
      name: "HomeSwiper",
      props: {
        banners:{
          type:Array,
          default() {
            return []
          }
        }
      },
      data(){
        return{
          isImageLoad : false
        }
      },

      components : {
        Swiper,
        SwiperItem
      },

      methods : {
        imageLoad(){
          if (!this.isImageLoad){
            this.$emit("imageLoad");
            this.isImageLoad = false;
          }
        }
      }
    }


</script>

<style scoped>
  .home_swiper {
    margin-bottom: 5px;
  }
</style>
