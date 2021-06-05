<template>
  <div id="home">
    <nav-bar  class="home_bar">
      <div slot="mid">Wodiao之家</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']"
                 @tabClick="tabClick"
                 ref="copy_tab_control"
                 class="copy_tab_control" v-show="is_tab_control_fixed"></tab-control>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="getYPosition"
            :pull-up-load="true"
            @pullingUp="upLoad">
      <home-swiper :banners="banners" @imageLoad="get_tab_control_offsettop"></home-swiper>
      <home-commend :commends="recommends"></home-commend>
      <home-feature/>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="real_tab_control"></tab-control>
      <goods-list :goods="news"></goods-list>
    </scroll>

    <!--监听组件的点击要添加.native属性-->
    <back-top @click.native="backClick" v-show="is_show_back_top"/>

  </div>
</template>

<script>
  //顶部标签
  import NavBar from "../../components/common/navbar/NavBar";
  //轮播图 HomeSwiper
  import HomeSwiper from "./childComps/HomeSwiper";
  //主页推荐 HomeCommend
  import HomeCommend from "./childComps/HomeCommend";
  //每周流行 HomeFeature
  import HomeFeature from "./childComps/HomeFeature";
  //控制选择栏
  import TabControl from "../../components/content/tabControl/TabControl";
  //主体内容
  import GoodsList from "../../components/content/goods/GoodsList";
  //滑动显示自己封装插件
  import Scroll from "../../components/common/scroll/Scroll";
  //返回顶部标签
  import BackTop from "../../components/content/backTop/BackTop";



  //ajax请求函数主页面
  import {getHomeMultidata} from "../../network/home";



  export default {
    name: "Home",
    components:{
      GoodsList :GoodsList,
      NavBar : NavBar,
      HomeSwiper : HomeSwiper,
      HomeCommend : HomeCommend,
      HomeFeature : HomeFeature,
      TabControl : TabControl,
      Scroll : Scroll,
      BackTop : BackTop
    },
    data(){
      return{
        banners : [],
        recommends :[],
        news :[],
        is_show_back_top : false,
        tab_control_offsettop : 0,
        is_tab_control_fixed : false,
        go_before_scroll_y : 0,
      }
    },
    //主页创建完成后，立即发送请求，获取首页数据
    created() {
      //1.请求数据
      getHomeMultidata().then(res =>{
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        }
      );
      this.getNews();
    },

    mounted() {
      //监听图片加载，组件一解析成html代码就得监听
      this.$bus.$on('imageLoad', ()=>{
        //每有图片加载完成后，就对scroll进行刷新
        this.$refs.scroll.scroll.refresh();
      })
    },
    //写数据请求方法，方便调用
    methods :{
      /**
       * 事件监听相关方法
       */
      tabClick(index){
        //这些if判断只是为了造假数据，不用管
        if (index === 0){
          this.news.reverse();
        }else if (index === 1){
          let i = 1;
          console.log(i)

        }else {
          this.news = this.recommends;
        }
        this.$refs.copy_tab_control.currentIndex = index
        this.$refs.real_tab_control.currentIndex = index
      },

      //返回顶部
      backClick(){
        // 第一个scroll获取ref为scroll的标签
        //第二个scroll获取该标签中名为scroll的组件
        this.$refs.scroll.scroll.scrollTo(0,0,500)  //500ms内返回顶部
      },

      //获取实时位置
      getYPosition(position){ //position从子组件传过来的
        this.is_show_back_top = -position.y > 200;   //当位置大于200px时，显示返回顶部按钮，控制其v-show属性
        //越往下滚，y值越为负值；


        //决定tab_control是否吸顶，大于offsettop，就上去了，得吸顶
        this.is_tab_control_fixed = -position.y > this.tab_control_offsettop;
      },

      //上拉加载更多
      upLoad(){
        this.addNews();

        //添加完数据后，结束当前的上拉加载更多，并准备进行下一次
        this.$refs.scroll.scroll.finishPullUp();
      },

      //获得在swiper图片加载完成后，tab_control的offsettop的值，到上层元素的位置值，
      get_tab_control_offsettop(){
        this.tab_control_offsettop = this.$refs.real_tab_control.$el.offsetTop;
      },

      //active()页面要被激活，
      active(){
        this.$refs.scroll.scroll.scrollTo(0,this.go_before_scroll_y,0);
        this.$refs.scroll.scroll.refresh();
      },

      //deactive()页面要变成非激活，
      deactive(){
        this.go_before_scroll_y = this.$refs.scroll.scroll.getScrollY;  //getScrollY获取滚动的y值，并保存
      },


      /**
       * 网络请求相关方法
       */
      getNews(){
        getHomeMultidata().then(res =>{
          this.news = res.data.banner.list;
        })
      },
      addNews(){
        getHomeMultidata().then(res =>{
          this.news.push(...res.data.banner.list);
        })
      }
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }

  .home_bar{
    background-color: var(--color-tint);
    /*字体颜色*/
    color: #f6f6f6;

    /*下面两自己调的*/
    font-family: "Adobe Hebrew";
    font-size: 20px;

    /*固定Home_bar在最顶部*/
    position: fixed;
    left: 0;
    right: 0;
    top: 0;

    /*可能是显示在上层*/
    z-index: 9;
  }

  .copy_tab_control{
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
