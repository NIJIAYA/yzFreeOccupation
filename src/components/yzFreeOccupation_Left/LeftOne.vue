<template>
  <div class="right_one">

<!--    //人群数，登记人数，理事人数-->
      <div style="width:100%;margin-bottom:3vh;line-height:1">
        <div class="left_item1_center">
          <div class="left_item1_word1">
            <span >人群总数</span>
            <span style="right: 2%;position: absolute;"><span style="font-size: 0.6rem;color: #3cc7ef;font-weight: 600;" v-if="data.PeoplelCount">
              <strong><animate-number from="0"  :to="data.PeoplelCount" :duration="data.Seconds"  ></animate-number></strong>
            </span>人</span>
          </div>
        </div>
        <div class="left_item1_left">
          <div class="left_item1_word2">
            <span >登记人数</span>
            <span style="right: 5%;position: absolute;"><span style="font-size: 0.55rem;color: #3cc7ef;font-weight: 600;" v-if="data.SignedUserCount">
              <strong><animate-number from="0"  :to="data.SignedUserCount" :duration="data.Seconds"  ></animate-number></strong></span>人</span>
          </div>
        </div>
        <div class="left_item1_right">
          <div class="left_item1_word2">
            <span >理事人数</span>
            <span style="right: 5%;position: absolute;"><span style="font-size: 0.55rem;color: #3cc7ef;font-weight: 600;" v-if="data.MemberCount">
              <strong><animate-number from="0"  :to="data.MemberCount" :duration="data.Seconds"  ></animate-number></strong></span>人</span>
          </div>
        </div>
      </div>



<!--    //理事风采-->
    <div style="width:100%;margin-bottom:1vh;line-height:1">
      <div class="left_title1_center">
        <div class="left_title1_word">
          <span style="letter-spacing: 0.1rem;">理事风采</span>
<!--          <span style="position: absolute;right: 2%;color: #3cc7ef;font-size: 0.25rem;font-size: 0.4rem;">详细信息 <img src="../../assets/images/yzFreeOccupationImages/lef_title1_icon.png"></span>-->
<!--          <span style="right: 5%;position: absolute;"><span style="font-size: 0.55rem;color: #3cc7ef;font-weight: 600;">1234</span>人</span>-->
        </div>
      </div>
    </div>
<!--    //理事人员 + item-->

    <div style="width:100%;margin-bottom:0.5vh;line-height:1">
      <div class="left_title2_center">
          <div style="position: absolute"><img src="../../assets/images/yzFreeOccupationImages/lef_title2_icon.png"></div>
          <div class="left_title2_word">理事人员</div>
      </div>
    </div>

    <swiper style="width:100%;margin-bottom:2vh;line-height:1;width: 100%;height: 18vh;overflow: hidden" class="swiper gallery-top swiper-no-swiping" :options="swiperOptionTop" ref="swiperTop" v-if="listData.length">
      <swiper-slide v-for="(item,index) in listData" :key="index">
        <div class="backgroundImg3_div" style="padding: 0px 1% 0 0;" v-if="item.children[0]">
          <div class="backgroundImg3">
            <div class="backgroundImg3_top">
              <div style="width: 100%;padding: 5% 0">
                <div style="width: 7.2vh;height: 7.2vh;position: relative;right: -22%;">
                  <img style="width:100%;height:100%;border-radius:50%;" :src="item.children[0].image?item.children[0].image:require('../../assets/images/yzFreeOccupationImages/point04.png')"/>
                </div>
              </div>
            </div>
            <div class="backgroundImg3_on">
              <div style="color: #fff;font-size: 0.4rem;padding: 0 5%">
                {{item.children[0].user}}
              </div>
              <div style="color:#35b1da;font-size: 0.3rem;padding: 2% 5%">
                {{item.children[0].memo.length>10?item.children[0].memo.slice(0,10) + '...':item.children[0].memo}}
              </div>
              <div style="color:#35b1da;font-size: 0.3rem;padding: 0% 5%">
                {{item.children[0].type.length>10?item.children[0].type.slice(0,10)+ '...':item.children[0].type}}
              </div>
            </div>
            <div class="backgroundImg3_in" @click.stop="showimg(item.children[0])">
              详细信息 >
            </div>
          </div>
        </div>
        <div class="backgroundImg3_div" style="padding: 0px 1% 0 1%;" v-if="item.children[1]">
          <div class="backgroundImg3">
            <div class="backgroundImg3_top">
              <div style="width: 100%;padding: 5% 0">
                <div style="width: 7.2vh;height: 7.2vh;position: relative;right: -22%;">
                  <img style="width:100%;height:100%;border-radius:50%;" :src="item.children[1].image?item.children[1].image:require('../../assets/images/yzFreeOccupationImages/point04.png')"/>
                </div>
              </div>
            </div>
            <div class="backgroundImg3_on">
              <div style="color: #fff;font-size: 0.4rem;padding: 0 5%">
                {{item.children[1].user}}
              </div>
              <div style="color:#35b1da;font-size: 0.3rem;padding: 2% 5%">
                {{item.children[1].memo.length>10?item.children[1].memo.slice(0,10) + '...':item.children[1].memo}}
              </div>
              <div style="color:#35b1da;font-size: 0.3rem;padding: 0% 5%">
                {{item.children[1].type.length>10?item.children[1].type.slice(0,10)+ '...':item.children[1].type}}
              </div>
            </div>

            <div class="backgroundImg3_in" @click.stop="showimg(item.children[1])">
              详细信息 >
            </div>
          </div>
        </div>
        <div class="backgroundImg3_div" style="padding: 0px 0 0 1%;" v-if="item.children[2]">
          <div class="backgroundImg3">
            <div class="backgroundImg3_top">
              <div style="width: 100%;padding: 5% 0">
                <div style="width: 7.2vh;height: 7.2vh;position: relative;right: -22%;">
                  <img style="width:100%;height:100%;border-radius:50%;" :src="item.children[2].image?item.children[2].image:require('../../assets/images/yzFreeOccupationImages/point04.png')"/>
                </div>
              </div>
            </div>
            <div class="backgroundImg3_on">
              <div style="color: #fff;font-size: 0.4rem;padding: 0 5%">
                {{item.children[2].user}}
              </div>
              <div style="color:#35b1da;font-size: 0.3rem;padding: 2% 5%">
                {{item.children[2].memo.length>10?item.children[2].memo.slice(0,10) + '...':item.children[2].memo}}
              </div>
              <div style="color:#35b1da;font-size: 0.3rem;padding: 0% 5%">
                {{item.children[2].type.length>10?item.children[2].type.slice(0,10)+ '...':item.children[2].type}}
              </div>
            </div>

            <div class="backgroundImg3_in" @click.stop="showimg(item.children[2])">
              详细信息 >
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
<!--    <div style="width:100%;margin-bottom:2vh;line-height:1;width: 100%;height: 18vh;overflow: hidden" v-for="(item,index) in listData" :key="index">-->

<!--      <div class="backgroundImg3_div" style="padding: 0px 1% 0 0;" v-if="item.children[0]">-->
<!--        <div class="backgroundImg3">-->
<!--          <div class="backgroundImg3_top">-->
<!--            <div style="width: 100%;padding: 5% 0">-->
<!--              <div style="width: 7.2vh;height: 7.2vh;position: relative;right: -22%;">-->
<!--                  <img style="width:100%;height:100%;border-radius:50%;" :src="item.children[0].image?item.children[0].image:require('../../assets/images/yzFreeOccupationImages/point04.png')"/>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="backgroundImg3_on">-->
<!--            <div style="color: #fff;font-size: 0.4rem;padding: 0 5%">-->
<!--              {{item.children[0].user}}-->
<!--            </div>-->
<!--            <div style="color:#35b1da;font-size: 0.3rem;padding: 2% 5%">-->
<!--              {{item.children[0].memo.length>10?item.children[0].memo.slice(0,10) + '...':item.children[0].memo}}-->
<!--            </div>-->
<!--            <div style="color:#35b1da;font-size: 0.3rem;padding: 0% 5%">-->
<!--              {{item.children[0].type.length>10?item.children[0].type.slice(0,10)+ '...':item.children[0].type}}-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="backgroundImg3_in">-->
<!--            详细信息 >-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="backgroundImg3_div" style="padding: 0px 1% 0 1%;" v-if="item.children[1]">-->
<!--        <div class="backgroundImg3">-->
<!--          <div class="backgroundImg3_top">-->
<!--            <div style="width: 100%;padding: 5% 0">-->
<!--              <div style="width: 7.2vh;height: 7.2vh;position: relative;right: -22%;">-->
<!--                <img style="width:100%;height:100%;border-radius:50%;" :src="item.children[1].image?item.children[1].image:require('../../assets/images/yzFreeOccupationImages/point04.png')"/>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="backgroundImg3_on">-->
<!--            <div style="color: #fff;font-size: 0.4rem;padding: 0 5%">-->
<!--              {{item.children[1].user}}-->
<!--            </div>-->
<!--            <div style="color:#35b1da;font-size: 0.3rem;padding: 2% 5%">-->
<!--              {{item.children[1].memo.length>10?item.children[1].memo.slice(0,10) + '...':item.children[1].memo}}-->
<!--            </div>-->
<!--            <div style="color:#35b1da;font-size: 0.3rem;padding: 0% 5%">-->
<!--              {{item.children[1].type.length>10?item.children[1].type.slice(0,10)+ '...':item.children[1].type}}-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="backgroundImg3_in">-->
<!--            详细信息 >-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="backgroundImg3_div" style="padding: 0px 0 0 1%;" v-if="item.children[2]">-->
<!--        <div class="backgroundImg3">-->
<!--          <div class="backgroundImg3_top">-->
<!--            <div style="width: 100%;padding: 5% 0">-->
<!--              <div style="width: 7.2vh;height: 7.2vh;position: relative;right: -22%;">-->
<!--                <img style="width:100%;height:100%;border-radius:50%;" :src="item.children[2].image?item.children[2].image:require('../../assets/images/yzFreeOccupationImages/point04.png')"/>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="backgroundImg3_on">-->
<!--            <div style="color: #fff;font-size: 0.4rem;padding: 0 5%">-->
<!--              {{item.children[2].user}}-->
<!--            </div>-->
<!--            <div style="color:#35b1da;font-size: 0.3rem;padding: 2% 5%">-->
<!--              {{item.children[2].memo.length>10?item.children[2].memo.slice(0,10) + '...':item.children[2].memo}}-->
<!--            </div>-->
<!--            <div style="color:#35b1da;font-size: 0.3rem;padding: 0% 5%">-->
<!--              {{item.children[2].type.length>10?item.children[2].type.slice(0,10)+ '...':item.children[2].type}}-->
<!--            </div>-->
<!--          </div>-->

<!--          <div class="backgroundImg3_in">-->
<!--            详细信息 >-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->

      <div style="width:100%;margin-bottom:4vh;line-height:1;width: 100%;height: 12vh;overflow: hidden" v-if="false">
        <vue-seamless-scroll
            :data="listData"
            :class-option="defaultOption"
        >
        <div class="left_item2_center" v-for="(item,index) in listData" :key="index" @click="showimg">
          <div class="left_item2_word2">
            <div style="margin-right: 3.6%;display:inline-block;">{{index + 1}}</div>
            <div style="position: absolute;display:inline-block;">
              <img style="margin: 20%;height: 2.5vh;width: 100%;border-radius:50%;" :src="item.image?item.image:require('../../assets/images/yzFreeOccupationImages/point04.png')"/>
            </div>
            <div style="display:inline-block;margin-left: 12%;font-size: 0.35rem;">
              {{item.user}}
            </div>
            <div style="display:inline-block;position: absolute;height: 1.5vh;margin-left: 0.2vw;">

              <div class="left_item2_word2_type" :style="{color:item.color,borderColor:item.color}">
                {{item.type}}
              </div>
            </div>

            <div style="width: 45%;right: 5%;position: absolute;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
              {{item.memo}}
            </div>
          </div>
        </div>
        </vue-seamless-scroll>
      </div>




<!--    //理事代表作品-->
    <div style="width:100%;margin-bottom:0.5vh;line-height:1">
      <div class="left_title2_center">
        <div style="position: absolute"><img src="../../assets/images/yzFreeOccupationImages/lef_title2_icon.png"></div>
        <div class="left_title2_word">理事代表作品</div>
      </div>
    </div>
    <div style="width:100%;margin-bottom:2vh;line-height:1">
      <div class="left_item3_box1">
        <div class="left_item3_back1">
          <div style="position: absolute;margin-top: 16%;text-align: center;width: 18.33%;">
            <div style="font-size: 0.4rem;">文学作品</div>
            <div>
              <span class="left_item3_word" style="color: #3cc7ef" v-if="data.wenxue">
              <strong><animate-number from="0"  :to="data.wenxue" :duration="data.Seconds"  ></animate-number></strong>
            </span>部</div>
          </div>
        </div>
      </div>
      <div class="left_item3_box2">
        <div class="left_item3_back2">
          <div style="position: absolute;margin-top: 16%;text-align: center;width: 18.33%;">
            <div style="font-size: 0.4rem;">音乐作品</div>
            <div>
              <span class="left_item3_word" style="color: #efc121" v-if="data.yinyue">
              <strong><animate-number from="0"  :to="data.yinyue" :duration="data.Seconds"  ></animate-number></strong>
              </span>部</div>
          </div>
        </div>
      </div>
      <div class="left_item3_box3">
        <div class="left_item3_back3">
          <div style="position: absolute;margin-top: 16%;text-align: center;width: 18.33%;">
            <div style="font-size: 0.4rem;">非遗作品</div>
            <div>
              <span class="left_item3_word" style="color: #ef4821" v-if="data.feiyi">
              <strong><animate-number from="0"  :to="data.feiyi" :duration="data.Seconds"  ></animate-number></strong>
              </span>部</div>
          </div>
        </div>
      </div>
    </div>

<!--    //人物画像-->
    <div style="width:100%;margin-bottom:2vh;line-height:1">
      <div class="left_title2_center">
        <div style="position: absolute"><img src="../../assets/images/yzFreeOccupationImages/lef_title2_icon.png"></div>
        <div class="left_title2_word">{{type=='1'?'人物画像':'学历统计'}}</div>

        <div v-show="type=='2'" style="position: absolute;right: 0" ><img src="../../assets/images/yzFreeOccupationImages/left_title3_button2.png"></div>
        <div v-show="type=='1'" style="position: absolute;cursor: pointer;right: 0" @click="changechars('1')"><img src="../../assets/images/yzFreeOccupationImages/left_title3_button1_1.png"></div>

        <div v-show="type=='2'" style="position: absolute;cursor: pointer;right: 8%" @click="changechars('2')"><img src="../../assets/images/yzFreeOccupationImages/left_title3_button1.png"></div>
        <div v-show="type=='1'" style="position: absolute;right: 8%" ><img src="../../assets/images/yzFreeOccupationImages/left_title3_button2_2.png"></div>


      </div>
    </div>
    <div style="width:100%;line-height:1">
      <div style="width: 100%;height: 20vh">
<!--        <echarts ref="chart1" :options="option" :auto-resize="true"></echarts>-->
        <div class="echartsItem" id='chinesechart_cmqk1'>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
// import ECharts from 'vue-echarts'
import vueSeamlessScroll from 'vue-seamless-scroll'
// import * as echarts from "echarts";
import scroll from "vue-seamless-scroll/src";
import url from "../../assets/js/config";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  components: {
    vueSeamlessScroll,
    swiper,
    swiperSlide
  },
  data(){
    return {
      swiperOptionTop:{
        autoplay: {
          delay: 6000, // 切换时间间隔
          disableOnInteraction: false // 当用户滑动图片后继续自动轮播
        },
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next", // 绑定上一个按钮
          prevEl: ".swiper-button-prev", // 绑定下一个按钮
        },
        noSwiping: true,
      },
      data:{},
      type:'1',
      listData:[
        // {name:'柴昀喆',hardimg:'sdasdsadas',type:'作曲家',txt:'青年作曲家，伶Remix国风电音厂牌头号制作者，开辟了历史的先河',color:'#3cc7ef',backColor:'#295785'},
        // {name:'吴日东',hardimg:'sdasdsadas',type:'摄影师',txt:'青年作曲家，伶Remix国风电音厂牌头号制作者，开辟了历史的先河',color:'#eabf26',backColor:'#4e565c'},
        // {name:'苍天白鹤',hardimg:'sdasdsadas',type:'策划师',txt:'青年作曲家，伶Remix国风电音厂牌头号制作者，开辟了历史的先河',color:'#ef4821',backColor:'#4d3e5a'},
      ],
      listData2Name:[],
      // listData2:[
      //     19,39,59,19
      // ],

      // defaultOption() {
      //   return {
      //     step: 0, // 数值越大速度滚动越快
      //     limitMoveNum: 0, // 开始无缝滚动的数据量 this.dataList.length
      //     hoverStop: true, // 是否开启鼠标悬停stop
      //     direction: 1, // 0向下 1向上 2向左 3向右
      //     openWatch: true, // 开启数据实时监控刷新dom
      //     singleHeight: 1, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
      //     singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
      //     waitTime: 10000, // 单步运动停止的时间(默认值1000ms)
      //   };
      // },

      defaultOption: {
        step: 0.3, // 数值越大速度滚动越快
        limitMoveNum: 0, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      },
      listData2:[],
      listDataTitle: "",
      data1: {},
      option:{},
      echeight:15,
    }
  },
  created() {

  },
  mounted(){
    this.getWeather();
    // this.getData1()
    // this.getData2()
  },
  computed: {

  },
  methods:{
    getWeather(){
      this.axios.post(url.testdata).then(res =>{
        console.log(res)
        this.data = res.data.Data
        this.data.Seconds = Number(res.data.Seconds)*1000
        //理事列表
        // this.listData = this.data.memberList
        console.log(this.data.memberList,'meberert')
        var i = 0
        var testdata = []
        this.data.memberList.forEach((item,index)=>{
          console.log(i)
          testdata.push(item)
          if (i == 2){
            this.listData.push({children:testdata})
            testdata = []
            i = 0
          }else {
            if (Number(index+1)==this.data.memberList.length){
              this.listData.push({children:testdata})
            }
            i++
          }
          console.log(this.data.memberList.length,index+1)
        })
        console.log(this.listData,'memberdata')
        this.data.wenxue = this.data.memberWorkList.文学作品
        this.data.yinyue = this.data.memberWorkList.音乐作品
        this.data.feiyi = this.data.memberWorkList.非遗作品
        this.listData2Name = ["写做人员","文艺创作人员","知识型市场\n服务人员","技能型市场\n服务人员"]
        this.listData2.push({value:Number(this.data.MemberPortrait.写作人员)})
        this.listData2.push({value:Number(this.data.MemberPortrait.文艺创作人员)})
        this.listData2.push({value:Number(this.data.MemberPortrait.技能型市场服务人员)})
        this.listData2.push({value:Number(this.data.MemberPortrait.知识型市场服务人员)})

        this.darwEcharts();

        console.log(this.data.MemberDegree)
      })
    },
    changechars(value){
      this.listData2 = []
      if (value == '1'){
        this.type = '2'
        this.listData2Name = ["博士","本科","硕士"]
        this.listData2 =[];
        this.listData2.push(Number(this.data.MemberDegree.博士))
        this.listData2.push(Number(this.data.MemberDegree.本科))
        this.listData2.push(Number(this.data.MemberDegree.硕士))
        this.darwEcharts();
      }else {
        this.type = '1'
        this.listData2Name = ["写做人员","文艺创作人员","知识型市场\n服务人员","技能型市场\n服务人员"]
        this.listData2 =[];
        this.listData2.push(Number(this.data.MemberPortrait.写作人员))
        this.listData2.push(Number(this.data.MemberPortrait.文艺创作人员))
        this.listData2.push(Number(this.data.MemberPortrait.技能型市场服务人员))
        this.listData2.push(Number(this.data.MemberPortrait.知识型市场服务人员))
        this.darwEcharts();
      }
    },
    showimg(item){
      this.$emit("listenToChangebtnleft",item);
    },
    darwEcharts(){
      function fontSize(res){
        let clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res*fontSize;
      }
      var myChart_cmqk1 = this.$echarts.init(document.getElementById('chinesechart_cmqk1'));
      this.option = {
        grid: {
          // show:true,
          left: "6%",
          top: "11%",
          right: "6%",
          bottom: "20%"
        },
        tooltip: {
          // trigger: "axis",
          formatter: "{b} : {c}",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        // backgroundColor: "#010E3A",
        xAxis: {
          type: "category",
          axisLine: {
            lineStyle: {
              color: "#0199AD",
              width: "1",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: true,
            color: "#fff",
            // fontSize: "0.3rem",

          },
          data: this.listData2Name,
        },
        yAxis: {
          show: true,
          name: "占比",
          // min: 0,
          // max: 600,
          nameTextStyle: {
            color: "#fff",
            fontSize: 1,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.12)"
            }
          },
          axisLabel: {
            show: true,
            color: "#fff",
            // fontSize: "0.3rem",
          },
          axisLine: {
            lineStyle: {
              color: "#0199AD",
              width: "3",
            },
          },

        },
        series: [
          {
            name: "leftA",
            type: "bar",
            barWidth: this.echeight,
            itemStyle: {
              normal: {
                // color: "#136B96",
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#37BBF8" },
                  { offset: 1, color: "rgb(55,187,248,0.1)" }
                ]),
                barBorderRadius: [0, 0, 0, 0],
                opacity: "1",
              },
            },
            data: this.listData2,
          },
          {
            name: "rightA",
            tooltip: {
              show: false,
            },
            type: "bar",
            barWidth: this.echeight,
            itemStyle: {
              normal: {
                // color: "#16C0C9",
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#37BBF8" },
                  { offset: 1, color: "rgb(55,187,248,0.1)" }
                ]),
                barBorderRadius: [0, 0, 0, 0],
                opacity: "1",
                borderWidth: 1,
                borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#37BBF8" },
                  { offset: 1, color: "rgb(55,187,248,0.1)" }
                ]),
              },
            },
            data: this.listData2,
            barGap: 0,
          },
          {
            name: "topA",
            tooltip: {
              show: false,
            },
            type: "pictorialBar",
            itemStyle: {
              normal: {
                color: "#37BBF8",
                // color: echarts.graphic.LinearGradient(0, 0, 0, 1, [
                //   { offset: 0, color: "#2d84c7" },
                //   { offset: 1, color: "rgb(55,187,248,0.1)" }
                // ]),
                borderWidth: 2,
                // borderColor: "#00183F",
                borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#37BBF8" },
                  { offset: 1, color: "rgb(55,187,248,0.1)" }
                ]),
                opacity: "1",
                shadowColor: "rgb(0,0,0,0.1)",
                shadowOffsetX: "0.5",
                shadowOffsetY: "0.5",
              },
            },
            label: {
              show: false,
              // color: "#04F9FD",
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#37BBF8" },
                { offset: 1, color: "rgb(55,187,248,0.1)" }
              ]),
              offset: [0, 0],
              position: "top",
              fontSize: "0.25rem",
              fontWeight: "normal",
            },
            symbol: "diamond",
            symbolRotate: 0,
            symbolSize: ["30", "15"],
            symbolOffset: ["0", "-9"],
            symbolPosition: "end",
            data: this.listData2,
            z: 3,
          },
        ],
      };
      myChart_cmqk1.clear()
      myChart_cmqk1.setOption({
        ...this.option
      })

    }
  }
}
</script>

<style scoped>
.swiper-button-next {
  /*background: url(../assets/img/btn-you.png) no-repeat;*/
  /*background-position: 7px 8px;*/
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  right: -1vw;
  top: 31vh;
  color: #fff;
  background-color: #152f7e;
}
.swiper-button-prev {
  /*background: url(../assets/img/btn-zuo.png) no-repeat;*/
  /*background-position: 19px 8px;*/
  width: 2vw;
  height: 2vw;
  border-radius: 50%;
  left: -1vw;
  top: 31vh;
  color: #fff;
  background-color: #152f7e;
}
.backgroundImg3_div{
  display: inline-block;
  height: 18vh;
  /*padding: 0 10% 0 5%;*/
  width: 33.33%;
}
.backgroundImg3{
  height: 100%;
  width: 100%;
  background: url("../../assets/images/yzFreeOccupationImages/item_member_background.png") no-repeat;
  background-size:100% 100%;
}
.backgroundImg3_in{
  width: 100%;height: 15%;background: #17368a;text-align: center;line-height: 2.5vh;cursor:pointer;
}

.backgroundImg3_on{
  width: 100%;height: 35%;text-align: center;
}
.backgroundImg3_top{
  width: 100%;height: 50%;
}

.left_item1_center{
  height: 4.5vh;
  width: 100%;
  background: url("../../assets/images/yzFreeOccupationImages/lef_item1_center.png") no-repeat;
  background-size:100% 100%;
}
.left_item1_left{
  display: inline-block;
  height: 4.5vh;
  width: 48%;
  margin-top: 2vh;
  background: url("../../assets/images/yzFreeOccupationImages/lef_item1_left.png") no-repeat;
  background-size:100% 100%;
}
.left_item1_right{
  display: inline-block;
  height: 4.5vh;
  width: 48%;
  margin-left: 4%;
  margin-top: 2vh;
  background: url("../../assets/images/yzFreeOccupationImages/lef_item1_right.png") no-repeat;
  background-size:100% 100%;
}
.left_item1_word1{
  width: 87.5%;left: 12.5%;font-size: 0.35rem;position: relative;line-height: 4.5vh;display: inline-block;
}
.left_item1_word2{
  width: 74%;left: 26%;font-size: 0.35rem;position: relative;line-height: 4.5vh;display: inline-block;
}


.left_title1_center{
  height: 3.7vh;
  width: 100%;
  background: url("../../assets/images/yzFreeOccupationImages/lef_title1_center.png") no-repeat;
  background-size:100% 100%;
}
.left_title1_word{
  left: 8%;
  width: 92%;
  font-size: 0.5rem;
  font-weight: 600;
  position: relative;
  line-height: 3.7vh;
  display: inline-block;
}

.left_title2_center{
  height:2.4vh;width: 100%;
}
.left_title2_word{
  letter-spacing: 0.1rem;line-height: 2.4vh;display: inline-block;position: absolute;left: 7%;width: 93%;font-size: 0.35rem;font-weight: 600;
}

.left_item2_center{
  margin-bottom: 1vh;
  height: 3.7vh;
  width: 100%;
  background: url("../../assets/images/yzFreeOccupationImages/left_item2_center.png") no-repeat;
  background-size:100% 100%;
}
.left_item2_word2{
  width: 100%;
  font-size: 0.25rem;
  line-height: 3.7vh;
  padding: 0 3.6%;
  display: inline-block;
}
.left_item2_word2_type{
  position: absolute;
  height: 2vh;
  line-height: 1.7vh;
  padding: 0 0.1rem;
  top: 60%;
  display:inline-block;font-size: 0.25rem;margin-left: 2%;
  border-radius:1vh;
  border-style:solid; border-width:1px; border-color:#000;
}

.left_item3_box1{
  display: inline-block;
  height: 9.7vh;
  padding: 0 10% 0 5%;
  width: 33.33%;
}
.left_item3_box2{
  display: inline-block;
  height: 9.7vh;
  width: 33.33%;
  padding: 0 7.5%;
}
.left_item3_box3{
  display: inline-block;
  height: 9.7vh;
  padding: 0 5% 0 10%;
  width: 33.33%;
}
.left_item3_back1{
  height: 100%;
  width: 100%;
  background: url("../../assets/images/yzFreeOccupationImages/left_item3_back1.png") no-repeat;
  background-size:100% 100%;
}
.left_item3_back2{
  height: 100%;
  width: 100%;
  background: url("../../assets/images/yzFreeOccupationImages/left_item3_back2.png") no-repeat;
  background-size:100% 100%;
}
.left_item3_back3{
  height: 100%;
  width: 100%;
  background: url("../../assets/images/yzFreeOccupationImages/left_item3_back3.png") no-repeat;
  background-size:100% 100%;
}

.left_item3_word{
  font-size: 0.6rem;font-weight: 600;
}

.block_wrap1{
  /*width: 100%;*/
  /*height: 10vh;*/
  /*position: relative;*/
  /*margin: 0 0 4.75%*/
}

.echartsItem{
  width:100%;
  height: 20vh;
  border-radius: 100%;
}

.right_one{
  position: relative;
  white-space: nowrap;
  /* background: #000; */
  color: #ffffff;
  /* background: linear-gradient(
    92.67deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(21, 21, 21, 0.9882) 58.08%,
    rgba(21, 21, 21, 1) 58.86%,
    rgba(1, 1, 1, 0) 98.63%,
    rgba(0, 0, 0, 0) 100%
  ); */
}
</style>
