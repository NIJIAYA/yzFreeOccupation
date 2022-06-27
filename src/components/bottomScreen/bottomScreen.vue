<template>
    <div class="bottomArea">
      <div style="width:100%;margin-bottom:1vh;line-height:1">
        <div class="bottom_title1_center">
          <div class="bottom_title1_word">
            <span style="letter-spacing: 0.1rem;">作品展示</span>
          </div>
        </div>
      </div>

      <div class="thumb-example">
        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
          <swiper-slide class="slide-1" ><img style="height: 100%;width: 100%;" src="../../assets/images/yzFreeOccupationImages/test11111.png"/></swiper-slide>
          <swiper-slide class="slide-2" ><img style="height: 100%;width: 100%;" src="../../assets/images/yzFreeOccupationImages/test11111.png"/></swiper-slide>
          <swiper-slide class="slide-3" ><img style="height: 100%;width: 100%;" src="../../assets/images/yzFreeOccupationImages/test11111.png"/></swiper-slide>
          <swiper-slide class="slide-4" ><img style="height: 100%;width: 100%;" src="../../assets/images/yzFreeOccupationImages/test11111.png"/></swiper-slide>
          <swiper-slide class="slide-5" ><img style="height: 100%;width: 100%;" src="../../assets/images/yzFreeOccupationImages/test11111.png"/></swiper-slide>
<!--          <div class="swiper-button-next swiper-button-white" slot="button-next"></div>-->
<!--          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>-->
        </swiper>
      </div>
    </div>
</template>
<script>

import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOptionTop:{
        autoplay: {
          delay: 4000, // 切换时间间隔
          disableOnInteraction: false // 当用户滑动图片后继续自动轮播
        },
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: -110,
        slidesPerView: 1.5,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods:{

  }
}
</script>
<style scoped>
.bottomArea{
    /*position: fixed;*/
  padding: 2.5vh 1.4vw 0 1.4vw;
  bottom: 0vh;
    left: 27vw;
    width: 46VW;
    height: 30vh;
    background-image: url('../../assets/images/yzFreeOccupationImages/bottombackground.png');
    background-size: 100% 100%;
  position: absolute;
  z-index: 9;
  color: #ffffff;

}

.bottom_title1_center{
  height: 3.7vh;
  width: 100%;
  background: url("../../assets/images/yzFreeOccupationImages/lef_title1_center.png") no-repeat;
  background-size:100% 100%;
}
.bottom_title1_word{
  left: 5%;
  width: 95%;
  font-size: 0.5rem;
  font-weight: 600;
  position: relative;
  line-height: 3.7vh;
  display: inline-block;
}

.btnArea{
    display: flex;
    justify-content: space-between;
    width: 60%;
    height: 2vw;
    margin: 0 auto;
    margin-bottom: 10px;
    /* background: linear-gradient(92.67deg, rgba(0, 0, 0, 0) 0%, rgba(21, 21, 21, 0.9882) 58.08%, rgba(21, 21, 21, 1) 58.86%, rgba(1, 1, 1, 0) 98.63%, rgba(0, 0, 0, 0) 100%); */
}
.chooseItem{
   border-bottom: 2px solid rgba(76, 198, 255, 1);
   background-image: url('../../assets/images/newImages/bottomItemBack.svg');
   background-size: 100% 100%;
   background-repeat: no-repeat;
}
.btnItem{
  text-align: center;
  height: 100%;
  width: 5vw;
  line-height:2vw;
  font-size: 0.4rem;
  color: #ffffff;
}

.thumb-example{
  height: 27vh;
  /*height: 450px;*/
}
.swiper-container {
  background-color: #000;
}
.gallery-top {
  /*height: 100% !important;*/
  width: 100%;
}
.gallery-thumbs {
  height: 20% !important;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}

.swiper-slide {
  text-align: center;
  height: 86%;
  background: #CCCDCE;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
}

.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
.swiper-slide-active{
  z-index: 999 !important;
}
.swiper-slide-prev {
  background-color: #fff;
  opacity: 0.4;
}
.swiper-slide-next{
  background-color: #fff;
  opacity: 0.4;
}

/*.swiper-slide {*/
/*  height: 95%;*/
/*  text-align: center;*/
/*  font-size: 18px;*/
/*  background: #fff;*/
/*  !* Center slide text vertically *!*/
/*  display: -webkit-box;*/
/*  display: -ms-flexbox;*/
/*  display: -webkit-flex;*/
/*  display: flex;*/
/*  -webkit-box-pack: center;*/
/*  -ms-flex-pack: center;*/
/*  -webkit-justify-content: center;*/
/*  justify-content: center;*/
/*  -webkit-box-align: center;*/
/*  -ms-flex-align: center;*/
/*  -webkit-align-items: center;*/
/*  align-items: center;*/
/*  transition: 300ms;*/
/*  transform: scale(0.8);*/
/*  border-radius: 12px;*/
/*}*/
/*.swiper-slide-active,*/
/*.swiper-slide-duplicate-active {*/
/*  transform: scale(1);*/
/*}*/
</style>
