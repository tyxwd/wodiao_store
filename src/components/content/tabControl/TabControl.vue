<template>
    <div class="tab_control">
      <div v-for="(item, index) in titles"
           class="tab_control_item"
           :key="index"
           :class="{active:index ===currentIndex}"
           @click=itemClick(index)>
        <span>
          {{item}}
        </span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props : {
          titles : {
            type : Array,
            default(){
              return ['流行', '新款', '精选'];
            }
          }
        },
      data(){
          return {currentIndex : 0}
      },
      methods : {
          itemClick(index){
            this.currentIndex = index;

            //字组件往外传参数，“tabClick”是函数名，在外面调用
            this.$emit("tabClick", index)
          }
      }
    }
</script>

<style scoped>
  .tab_control {
    display: flex;
    text-align: center;
    line-height: 40px;
    background-color: #fff;
    /*可能是显示在上层*/
    z-index: 9;
  }

  .tab_control_item {
    flex: 1;
  }

  .tab_control_item span {
    padding: 5px;
  }

  .active {
    color: var(--color-high-text);
  }

  .tab_control_item.active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
