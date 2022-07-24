<template>
  <div id="centerDiv" class="mapcontainer">
    <div
      v-for="(item,index) in localList" :key="item.x"
      style="width: 120px;position: absolute;z-index: 199;cursor: pointer;"
      :style="'top: '+item.y+'vh;left: '+item.x+'vw;'"
      @click="focus(item,index)"
    >
      <div style="text-align: center;color:#fff;font-size:20px">{{item.name}}</div>
      <div class="xiao">
        <img style="width:100%" src="../assets/images/yzFreeOccupationImages/point01.png"/>
      </div>
      <div style="width:58px;margin: 0 auto">
        <img style="width:100%" src="../assets/images/yzFreeOccupationImages/point02.png"/>
      </div>
    </div>


      <div
          v-for="(item,index) in memberList" :key="index"
          style="width: 120px;position: absolute;z-index: 200;cursor: pointer;transition: 2s;"
          :style="{top: item.y+'vh',left: item.x + 'vw',opacity: opacityVlue?'1':'0'}"
          @click="focus(item,index)"
      >
        <transition name="Fade">
        <div class="memberpoint">
          <img style="width:100%;height:100%" :src="item.image?item.image:require('../assets/images/yzFreeOccupationImages/point04.png')"/>
        </div>
        </transition>
        <span style="padding:0 7px;background:#0c2954;border:1px solid #50e5ff;border-radius:30px;margin:-13px auto 0;color:#fff;display: table;">{{item.user}}</span>

      </div>



<!--    弹窗[//]-->
    <div class="articlePop" v-if="rightshow">
      <div class="closeIcon" style="cursor: pointer;" @click="rightshow=false">
        <img style="width:100%;height:100%" src="../assets/images/yzFreeOccupationImages/closeIcon.png"/>
      </div>
      <div style="line-height:1;margin-bottom: 3.33vh">
        <div style="width: 0.416vw;float: left;line-height: 1.25vw;margin-right: 0.625vw;">
          <img
              style="width:100%"
              src="../assets/images/right01_listleftIcon.png"
          />
        </div>
        <span style="font-size:1.25vw">{{newsdetaildata.NTitle}}</span>
      </div>

      <div style="width:100%;overflow: hidden">
        <div style="width:calc(100% + 17px);overflow-y:scroll;max-height: calc(63vh - 12px)">
        <div style="text-indent:0;width:100%;margin: 1.76vh 0;">
          <img style="max-width:100%" :src="newsdetaildata.NImage"/>
        </div>
        <div style="font-size: 1.041vw;line-height:1.2;width: 100%" v-html="newsdetaildata.NContent">

        </div>
        <div style="line-height:1;margin-top:2.777vh" v-if="newsdetaildata.NPrice">
          <div style="float:left;width: 1.04vw;height:1.04vw;margin-right:0.36vw">
            <img style="width:100%" src="../assets/images/yzFreeOccupationImages/fundIcon.png"/>
          </div>
          <span style="font-size:1.04vw;color:#40c6ff">{{newsdetaildata.NPrice}}</span>
        </div>
        </div>
      </div>
    </div>
<!--    圖片彈窗-->
    <div class="articlePop" v-if="imageshow">
      <div class="closeIcon" style="cursor: pointer;" @click="imageshow=false">
        <img style="width:100%;height:100%" src="../assets/images/yzFreeOccupationImages/closeIcon.png"/>
      </div>
      <div style="line-height:1;margin-bottom: 3.33vh">

          <div style="width: 0.416vw;float: left;line-height: 1.25vw;margin-right: 0.625vw;">
            <img
                style="width:100%"
                src="../assets/images/right01_listleftIcon.png"
            />
          </div>
        <span style="font-size:1.25vw">{{BottomScreenData.title}}</span>
      </div>
      <div>
        <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
          <swiper-slide v-for="(item,index) in imgList" :key="index">
            <div style="text-indent:0;width:100%;margin: 1.76vh 0;height: 58vh;padding: 0 2vw">
              <img style="width:100%;height: 100%" :src="item"/>
            </div>
          </swiper-slide>
<!--          <div class="swiper-pagination" slot="pagination"></div>-->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        </div>

      </div>
<!--    人物弹窗-->
    <div class="memberPop" v-if="leftshow">
      <div class="closeIcon" style="top:5.2vh;right:1.5625vw;cursor: pointer;" @click="leftshow=false">
        <img style="width:100%;height:100%" src="../assets/images/yzFreeOccupationImages/closeIcon.png"/>
      </div>
      <div style="line-height:1;width:5.5vw;margin-top:1.2vh;font-size:1.04vw">{{focusmember.user?focusmember.user:''}}</div>
      <div style="line-height:1.4;margin:1.5625vw 0;font-size: 0.833vw;width:100%;overflow: hidden;body::-webkit-scrollbar {display: none;}">
        <div style="width:calc(100% + 17px);overflow-y:scroll;max-height: 32.3vh;padding-right: 1vw;">
        {{focusmember.memo?focusmember.memo:''}}
        </div>
      </div>
    </div>
<!--    交易弹窗-->
    <div class="dealPop" v-if="topshow">
      <div class="closeIcon" @click="topshow=false" style="cursor: pointer;">
        <img style="width:100%;height:100%" src="../assets/images/yzFreeOccupationImages/closeIcon.png"/>
      </div>
      <div style="margin: 0 auto;display: table;line-height:3.7vh">
        <span style="display:inline-block;width:11.8vw"><img style="width:100%;" src="../assets/images/yzFreeOccupationImages/dealTitleLeft.png"/></span>
        <span style="font-size:0.8rem;margin: 0 3.125vw;">{{type}}</span>
        <span style="display:inline-block;width:11.8vw"><img style="width:100%;" src="../assets/images/yzFreeOccupationImages/dealTitleRight.png"/></span>
      </div>
      <div style="width:28vw;margin: 4.5vh auto 0">
        <img style="width:100%;" :src="data.sqcoder"/>
      </div>
    </div>
<!--    视频-->
    <div class="articlePop" v-if="videoshow">
      <div class="closeIcon" @click="videoshow=false" style="cursor: pointer;">
        <img style="width:100%;height:100%" src="../assets/images/yzFreeOccupationImages/closeIcon.png"/>
      </div>
      <div style="line-height:1;margin-bottom: 3.33vh">
        <div style="width: 0.416vw;float: left;line-height: 1.25vw;margin-right: 0.625vw;">
          <img
              style="width:100%"
              src="../assets/images/right01_listleftIcon.png"
          />
        </div>
        <span style="font-size:1.25vw">{{BottomScreenData.title}}</span>
      </div>
      <div>
        <div style="text-indent:0;width:100%;margin: 1.76vh 0;height: 58vh;padding: 0 2vw">
          <video webkit-playsinline playsinline
                 controls style="width:100%;height: 100%" :src="videodata" type="video/mp4"></video>
<!--          <img style="width:100%" src="../assets/images/yzFreeOccupationImages/videoshow.png"/>-->
        </div>
      </div>
    </div>


    <div class="topBack"></div>

    <TopScreen ref="TopScreen" @listenToChangebtntop="actiontest_top"></TopScreen>
    <div style="width: 100vw;top: 11.6vh;height: 86.4vh;position: absolute">
      <headItem></headItem>
      <BottomScreen ref="BottomScreen" @listenToChangebtnBottomScreen="actiontest_BottomScreen"></BottomScreen>


      <LeftIndex ref="LeftIndex" @listenToChangebtnleft="actiontest_left"></LeftIndex>
          <RightIndex ref="RightIndex" @listenToChangebtnright="actiontest_right"></RightIndex>
    </div>

  </div>
</template>

<script>
  const ee = 0.00669342162296594323;
  const a = 6378245.0;
  import LeftIndex from './layOut/LeftIndex.vue'
  import RightIndex from './layOut/rightIndex.vue'
  import TopScreen from './topScreen/index.vue'
  import BottomScreen from './bottomScreen/bottomScreen.vue'
  import headItem from './headItem/index.vue'
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  import "swiper/dist/css/swiper.css";

  // import RightOne from './module0011/index.vue'
  import url from '../assets/js/config.js'
  import moment from 'moment'
  export default {
    name: 'Index',
    components: {
      swiper,
      swiperSlide,
      TopScreen,
      headItem,
      BottomScreen,
      // RightOne,
      LeftIndex,
      RightIndex
    },
    data() {
      const basePathUrl = window.basePathUrl || ''
      return {
        swiperOptionTop:{
          loop: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          // 显示分页
          pagination: {
            el: ".swiper-pagination",
            clickable: true //允许分页点击跳转
          },
          // 设置点击箭头
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }
        },
        opacityVlue:false,
        imgdatalist:[
          {number:1,name:'1232'},{number:2,name:'1232'},{number:3,name:'1232'},{number:4,name:'1232'},{number:5,name:'1232'},
        ],
        map: null,
        configUrl: basePathUrl + 'config/config.json',
        graphicLayer: null,
        wallhiclayer: null,
        change: true,
        topshow:false,
        leftshow:false,
        BottomScreenshow:false,
        rightshow:false,
        rightshow2:false,
        imageshow:false,
        videoshow:false,

        weather: '', //天气
        times: '',
        connectionList: [],
        show: false,
        active: true, //记录总览跟小区是否选择
        memberList:[
        ],
        memberList1:[
          {x:48.229,y:26.018,name:''},
          {x:38.854,y:33.148,name:''},
          {x:41.718,y:45.648,name:''},
          {x:38.177,y:57.129,name:''},
          {x:35.175,y:25.124,name:''},
          {x:62.177,y:37.129,name:''},

          {x:44.229,y:27.018,name:''},
          {x:37.854,y:33.148,name:''},
          {x:40.718,y:45.648,name:''},
          {x:38.177,y:57.121,name:''},
          {x:35.177,y:25.129,name:''},
          {x:60.177,y:38.129,name:''},

          {x:42.229,y:26.018,name:''},
          {x:64.854,y:33.148,name:''},
          {x:43.718,y:45.648,name:''},
          {x:39.177,y:57.129,name:''},
          {x:46.177,y:38.149,name:''},
          {x:61.177,y:37.128,name:''},
        ],
        memberList2:[
          {x:48.229,y:26.018,name:''},
          {x:38.854,y:33.148,name:''},
          {x:41.718,y:45.648,name:''},
          {x:38.177,y:57.129,name:''},
          {x:35.177,y:25.129,name:''},
          {x:62.177,y:37.129,name:''},
        ],
        memberList3:[
          {x:48.229,y:26.018,name:''},
          {x:38.854,y:33.148,name:''},
          {x:41.718,y:45.648,name:''},
          {x:38.177,y:57.129,name:''},
          {x:35.177,y:25.129,name:''},
          {x:62.177,y:37.129,name:''},
        ],
        memberListtest:[],
        localList:[
        ],
        localList1:[
          {x:29.948,y:31.666},
          {x:33.750,y:53.703},
          {x:48.437,y:47.963},
          {x:54.270,y:33.426},
          {x:60.312,y:47.407},
          {x:60.208,y:22.296}
        ],
        type:'5',
        data:[],
        BottomScreenData:{},
        imgList:[],
        videodata:'',
        newsdetaildata:{},
        dara1:[],
        focusmember:{}
      }
    },
    mounted() {
      var j = 6
      this.getDetail()

      setInterval(()=>{

        this.opacityVlue = false
        setTimeout(()=>{
          j = j + 6
          if (j>18){
            j = 6
          }
          this.memberList = []

          for (let i = j - 6; i < j; i++) {
            this.memberList.push({
              ...this.memberListtest[i],
            })
          }
          setTimeout(()=>{
            this.opacityVlue = true
          },2000)
        },2000)


        // this.memberList = this.memberListtest
      },30000)
      // this.getWeather()
    },
    methods: {
      focus(item,index){

        if (this.focusmember.index&&this.focusmember.index === index) {
          this.leftshow=!this.leftshow
        }else{
          this.leftshow=true
          this.focusmember = {
            ...item,
            index:index
          }
        }
      },
      getDetail(){
        this.axios.post(url.testdata).then(res =>{
          this.data1 = res.data.Data
          this.data = res.data.Data
          this.data.Seconds = Number(res.data.Seconds)*1000
          for (let i = 0; i < 18; i++) {
            console.log(this.data1.MapMemberList,1112321312);
            this.memberListtest.push({
              ...this.memberList1[i],
              ...this.data1.MapMemberList[i]
            })
          }
          for (let t = 0; t < 6; t++) {
            this.memberList.push({
              ...this.memberListtest[t],
            })
          }
          setTimeout(()=>{
            this.opacityVlue = true
          },2000)
          for (let i = 0; i < 6; i++) {
            this.localList.push({
              ...this.localList1[i],
              user:this.data1.MapParkList[i].name,
              ...this.data1.MapParkList[i]
            })
          }
        })
      },
      actiontest_left(){
        console.log('左模块')
        // this.leftshow = true
      },
      actiontest_BottomScreen(value){
        console.log('底部模块',value)
        this.BottomScreenData = value
        if (this.BottomScreenData.video){
          this.videodata = value.video
          this.videoshow = true
        }else if (this.BottomScreenData.imageList.length>0) {
          this.imgList = value.imageList
          this.imageshow = true
        }
        this.BottomScreenshow = true
      },
      // actiontest_right(value){
      //   console.log(value)
      //   console.log('右模块')
      //   if (value=='1'){
      //     this.rightshow = true
      //   }else if(value=='2'){
      //     this.rightshow2 = true
      //   }
      // },
      actiontest_right(value){
        console.log('右模块',value)
        console.log('右模块')
        this.axios.post((value.tabfocus1=='1'||value.type=='2'?url.newsdetail:(value.tabfocus1=='2'?url.demanddetail:url.resourcedetail)) + '?id=' + value.id,{},{
          headers: { "Content-Type": "application/json;charset=utf-8" }
        }).then(res =>{
          console.log(res.data.Data)
          this.rightshow = true
          this.newsdetaildata = res.data.Data
          // this.weatherType = res.data.data.text;
          // this.weatherWendu = res.data.data.temp;
        })
        if (value=='1'){
        }else if(value=='2'){
          this.rightshow2 = true
        }
      },
      actiontest_top(value){
        console.log('上模块',value)
        this.showQrCode(value)
      },
      showQrCode(type){
        let that = this
        // that.type = '5'
        that.type = type;
        that.topshow = true;
        console.log(that.data,'2312342132132')
        if (type=='1'){
          that.type = '交易二维码'
          that.data.sqcoder = that.data.TradeQrCode;
        }else if (type=='2'){
          that.type = '自雇共鄞小程序二维码'
          that.data.sqcoder = that.data.MiniAppQrCode;
        }else if(type=='3'){
          that.type = '数字统战直播间二维码'
          that.data.sqcoder = that.data.LiveQrCode;
        }
        console.log(that.data.sqcoder)
      }
    }
  }
</script>

<style>
  @import '~@/assets/css/global.css';
  /* @import '~@/assets/css/topScreen.css'; */
/* .topBack{
  position: relative;
  width: 100%;
  height: 20vh;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9137) 8.69%, rgba(16, 16, 16, 0.2196) 77.91%, rgba(16, 16, 16, 0) 100%);
} */


  .dealPop{
    position: absolute;
    top: 14.5vh;
    left: 22.4vw;
    color: #fff;
    padding: 5vh 3.5vw 8vh 3.5vw;
    background: url(../assets/images/yzFreeOccupationImages/dealPop.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 55vw;
    height: 75.46vh;
    z-index: 99999;
  }
  .memberPop{
    position: absolute;
    top: 27.5vh;
    left: 54.4vw;
    color: #fff;
    padding: 3vh 1.5vw 3vh 2.5vw;
    background: url(../assets/images/yzFreeOccupationImages/indexPop.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 16.875vw;
    height: 45vh;
    z-index: 99999;
  }

  .articlePop{
    position: absolute;
    top: 12vh;
    left: 13.7vw;
    color: #fff;
    padding: 5vh 3.5vw 8vh 3.5vw;
    background: url(../assets/images/yzFreeOccupationImages/articlePop.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 71.6vw;
    height: 80vh;
    z-index: 99999;
  }
  .closeIcon{
    background: #000;
    width: 1vw;
    height: 1vw;
    position: absolute;
    right: 50px;
    top: 32px;
    cursor: pointer;
  }

  .mapcontainer {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: url("../assets/images/yzFreeOccupationImages/mapBack.png");

  }
  .marsBlackPanel{
    background-image: url('../assets/images/newImages/modalBack.png');
    /* background: linear-gradient(180deg, rgba(32, 55, 69, 1) 0%, rgba(34, 39, 45, 0.302) 100%); */
    width: 13vw;
    background-size: 100% 100%;
    position: relative;
    border-radius: 10px 0 10px 0;
    top: -200px;
    left:20px;
    padding: 20px;
  }
  .marsBlackPanel-text{
   color: #ffffff;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, rgba(76, 198, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    width:100%;
    overflow: hidden;
    font-size:0.4rem;
    font-weight: 700;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .marsBlackPanel-text button{
    background: transparent;
    border: 1px solid rgba(123, 160, 255, 1);
    color: #fff;
    padding: 5px 20px;
    font-size: 0.3rem;
    height: 80%;
  }
  .marsBlackPanel-book{
    display: flex;
    justify-content: space-between;
  }
  .book-item{
    padding: 3% 1%;
    margin:1%;
    width: 50%;
    text-align: center;
    background-image: url('../assets/images/newImages/itemback.png');
    background-size: 100% 100%;
    font-size: 0.3rem;
    /* color: linear-gradient(180deg, rgba(76, 198, 255, 1) 0%, rgba(255, 255, 255, 1) 100%); */
  }
  .book-num{
    line-height: 1;
    font-weight: 900;
  color: #ffffff;
  font-size: 0.5rem;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  .book-text{
        font-weight: 900;
   color: #ffffff;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  .marsBlackPanel-content{
    width: 96%;
    margin: 0 auto;
    color:#fff;
    display: flex;
    justify-content: space-between;
    font-size:0.3rem;
  }
  .closeButton{
    position: fixed;
    right: -10px;
    top: -180px;
    color:#999999;
    font-size: 0.4rem;
  }
  .xiao{
      width: 24px;
      height: 32px;
      margin: 0 auto;
      transform: translate(0%,50%);
      animation: left-top-right-bottom 2s ease infinite;
  }
  @keyframes left-top-right-bottom{
      50%{
          transform: translate(0%,0%);
      }
      100%{
          transform: translate(0%,50%);
      }
  }
  .memberpoint{
    width: 84px;
    height: 84px;
    padding: 20px;
    margin:0 auto 0;
    background: url(../assets/images/yzFreeOccupationImages/point03.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>
