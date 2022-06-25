<template>
  <div id="app">
    <transition :enter-active-class="enterClass" :leave-active-class="leaveClass">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  //微信自定义分享兼容代码
  import fn from "./assets/js/requireConfig";
  //接口hash
  import url from "./assets/js/config";
  export default {
    name: "App",
    data() {
      return {
        enterClass: "",
        leaveClass: ""
      };
    },
    watch: {
      //使用watch 监听$router的变化
      $route(to, from) {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
        if (to.meta.index > from.meta.index) {
          //设置动画名称
          this.enterClass = "animated fadeInRight";
          this.leaveClass = "animated fadeOut";
        }
        if (to.meta.index < from.meta.index) {
          this.enterClass = "animated fadeIn";
          this.leaveClass = "animated fadeOutRight";
        }
        if (to.meta.index == from.meta.index) {
          this.enterClass = "";
          this.leaveClass = "";
        }
      }
    }
  };
</script>

<style src="./assets/css/animate.min.css"></style>
<style>
</style>