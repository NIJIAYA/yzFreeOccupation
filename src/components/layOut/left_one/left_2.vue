<template>
    <div class="leftTwo">
      <div style="width:100%;margin-bottom:4.23%;line-height:1">
        <img style="width:100%" src="../../../assets/images/left_two_img/left_two_cmqk_title.png"/>
      </div>
<!--      <div class="title_hover">-->
<!--        <div  style="margin-left:1vw;font-size:0.3rem;font-weight:700;float:left">村民情况</div>-->
<!--      </div>-->

<!--      村民情况模块-->
<!--      模块1-->
      <div class="content_leftTwo_1" style="padding: 0vw 0 0 0;">
        <div class="leftTwo_chart_box" style="width: 50%;height: 100%;float: left">
          <div class="echartsItem" id='chinesechart_cmqk1'>
          </div>
        </div>
        <div class="leftTwo_chart_box" style="width: 50%;height: 100%;float: left">
          <div class="echartsItem" id='chinesechart_cmqk2'>
          </div>
        </div>
        </div>
<!--        <img style="height: 100%" src="../../../assets/images/left_two_img/left_two_cmqk_background1.png"/>-->

<!--      模块2-->
      <div class="content_leftTwo_2">
        <div class="item_left" >
          <div style="width: 100%;float: left">
            <div style="width: 25%;float: left">
              <img style="width: 80%" src="../../../assets/images/left_two_img/left_two_cmqk_man.png"/>
            </div>
            <div class="cmqk_characters1">
              <p class="cmqk_characters1_1">男性</p>
              <img class="item_cmqk_icon1" src="../../../assets/images/left_two_img/left_two_cmqk_icon1.png" />
            </div>
            <div class="cmqk_characters2">
              <div v-if="data1.maleCount&&data1.malePercent">
                <p class="cmqk_characters2_1" ><strong><animate-number from="0"  :to="data1.maleCount" duration="2000"  ></animate-number></strong><span class="spanItem"></span></p>
                <p class="characters" style="font-size: 0.28rem;transform: scale(0.7);">/ <strong><animate-number from="0"  :to="data1.malePercent" duration="2000"  ></animate-number></strong><span class="spanItem"></span>%</p>
              </div>
              <div v-else>
                <p class="cmqk_characters2_1" ><strong>0</strong><span class="spanItem"></span></p>
                <p class="characters" style="font-size: 0.28rem;transform: scale(0.7);">/ <strong>0</strong><span class="spanItem"></span>%</p>
              </div>
            </div>
          </div>
          <div style="width: 100%;float: left">
            <div style="width: 25%;float: left">
              <img style="width: 80%" src="../../../assets/images/left_two_img/left_two_cmqk_oldman.png"/>
            </div>
            <div class="cmqk_characters1">
              <p class="cmqk_characters1_1">老人</p>
              <img class="item_cmqk_icon1" src="../../../assets/images/left_two_img/left_two_cmqk_icon1.png" />
            </div>
            <div class="cmqk_characters2" >
              <div v-if="data1.oldCount&&data1.oldPercent">
                <p class="cmqk_characters2_1" ><strong><animate-number from="0"  :to="data1.oldCount" duration="2000"  ></animate-number></strong><span class="spanItem"></span></p>
                <p class="characters" style="font-size: 0.28rem;transform: scale(0.7);">/ <strong><animate-number from="0"  :to="data1.oldPercent" duration="2000"  ></animate-number></strong><span class="spanItem"></span>%</p>
              </div>
              <div v-else>
                <p class="cmqk_characters2_1" ><strong>0</strong><span class="spanItem"></span></p>
                <p class="characters" style="font-size: 0.28rem;transform: scale(0.7);">/ <strong>0</strong><span class="spanItem"></span>%</p>
              </div>
            </div>
          </div>
        </div>
        <div class="item_right">
          <div style="width: 100%;float: left">
            <div style="width: 25%;float: left">
              <img style="width: 80%" src="../../../assets/images/left_two_img/left_two_cmqk_weman.png"/>
            </div>
            <div class="cmqk_characters1">
              <p class="cmqk_characters1_1">女性</p>
              <img class="item_cmqk_icon1" src="../../../assets/images/left_two_img/left_two_cmqk_icon1.png" />
            </div>
            <div class="cmqk_characters2">
              <div v-if="data1.femaleCount&&data1.femaleCount">
                <p class="cmqk_characters2_1" ><strong><animate-number from="0"  :to="data1.femaleCount" duration="2000"  ></animate-number></strong><span class="spanItem"></span></p>
                <p class="characters" style="font-size: 0.28rem;transform: scale(0.7);">/ <strong><animate-number from="0"  :to="data1.femalPercent" duration="2000"  ></animate-number></strong><span class="spanItem"></span>%</p>
              </div>
              <div v-else>
                <p class="cmqk_characters2_1" ><strong>0</strong><span class="spanItem"></span></p>
                <p class="characters" style="font-size: 0.28rem;transform: scale(0.7);">/ <strong>0</strong><span class="spanItem"></span>%</p>
              </div>
            </div>

          </div>
          <div style="width: 100%;float: left">
            <div style="width: 25%;float: left">
              <img style="width: 80%" src="../../../assets/images/left_two_img/left_two_cmqk_yangman.png"/>
            </div>
            <div class="cmqk_characters1">
              <p class="cmqk_characters1_1">儿童</p>
              <img class="item_cmqk_icon1" src="../../../assets/images/left_two_img/left_two_cmqk_icon1.png" />
            </div>
            <div class="cmqk_characters2">
              <div v-if="data1.childrenCount&&data1.childrenPercent">
                <p class="cmqk_characters2_1" ><strong><animate-number from="0"  :to="data1.childrenCount" duration="2000"  ></animate-number></strong><span class="spanItem"></span></p>
                <p class="characters" style="font-size: 0.28rem;transform: scale(0.7);">/ <strong><animate-number from="0"  :to="data1.childrenPercent" duration="2000"  ></animate-number></strong><span class="spanItem"></span>%</p>
              </div>
              <div v-else>
                <p class="cmqk_characters2_1" ><strong>0</strong><span class="spanItem"></span></p>
                <p class="characters" style="font-size: 0.28rem;transform: scale(0.7);">/ <strong>0</strong><span class="spanItem"></span>%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--      模块3-->
      <div class="content_leftTwo_3">
        <div style="width: 33.33%;height:100%;float: left;padding: 0 0.25vw 0 0px;">
          <div class="cmqk_background3">
            <p v-if="data1.committeeCount" style="transform: scale(0.7);font-size: 0.38rem;"><strong><animate-number from="0"  :to="data1.committeeCount" duration="2000"  ></animate-number></strong><span class="spanItem"></span></p>
            <p v-else style="transform: scale(0.7);font-size: 0.38rem;"><strong>0</strong><span class="spanItem"></span></p>
            <p style="transform: scale(0.7);">村委会</p>
          </div>
        </div>
        <div style="width: 33.33%;height:100%;float: left;padding: 0 0.125vw 0px 0.125vw;">
          <div class="cmqk_background3">
            <p v-if="data1.gridWorker" style="transform: scale(0.7); font-size: 0.38rem;"><strong><animate-number from="0"  :to="data1.gridWorker" duration="2000"  ></animate-number></strong><span class="spanItem"></span></p>
            <p v-else style="transform: scale(0.7); font-size: 0.38rem;"><strong>0</strong><span class="spanItem"></span></p>
            <p style="transform: scale(0.7);">网格员</p>
          </div>
        </div>
        <div style="width: 33.33%;height:100%;float: left;padding: 0 0vw 0px 0.25vw;">
          <div class="cmqk_background3">
            <p v-if="data1.socialWorker" style="transform: scale(0.7);font-size: 0.38rem;"><strong><animate-number from="0"  :to="data1.socialWorker" duration="2000"  ></animate-number></strong><span class="spanItem"></span></p>
            <p v-else style="transform: scale(0.7);font-size: 0.38rem;"><strong>0</strong><span class="spanItem"></span></p>
            <p style="transform: scale(0.7);">社工</p>
          </div>
        </div>
      </div>

<!--      荣誉模块-->
<!--      模块4-->
      <div style="width:100%;line-height:1;margin: 0.5vw 0 0.25vw 0;">
        <img style="width:100%" src="../../../assets/images/left_two_img/left_two_ry_title.png"/>
      </div>
      <div class="content_leftTwo_4">
        <div style="height: 50%;width: 100%;">
          <div style="width:100%">

            <div style="width: 2%;float: left">
              <img style="width: 100%" src="../../../assets/images/left_two_img/left_two_ry_icon1.png"/>
            </div>
            <div class="ry_title_c" >{{listDataTitle}}</div>
          </div>
          <div class="ry_background1" style="width: 100%;height: 75%">
            <div  style="margin-left: 0.8vw;width: 100%;height: 100%;position: relative">
              <div style="height: 100%;">
                <vue-seamless-scroll :data="listData" style="height: 100%;overflow: hidden" :class-option="defaultOption">

                  <div  style="text-align: left" v-for="(item, index) in listData" :key="index">
                    <div style="line-height: 1vw">
                      <div style="font-size:  0.225rem">{{item}}</div>
                    </div>
                  </div>

                </vue-seamless-scroll>
              </div>
            </div>

          </div>
        </div>
        <div style="height:50%;width: 100%">
          <div style="width:100%">

            <div style="width: 2%;float: left">
              <img style="width: 100%" src="../../../assets/images/left_two_img/left_two_ry__icon2.png"/>
            </div>
            <div class="ry_title_c" >其他上墙荣誉</div>
          </div>
          <div class="ry_background2" style="width: 100%;height: 75%">
            <div  style="margin-left: 0.8vw;width: 100%;height: 100%;position: relative">
              <div style="height: 100%;">
                <vue-seamless-scroll :data="listData2" style="height: 100%;overflow: hidden" :class-option="defaultOption">

                  <div  style="text-align: left" v-for="(item, index) in listData2" :key="index">
                    <div style="line-height: 1vw">
                      <div style="font-size:  0.225rem">{{item}}</div>
                    </div>
                  </div>

                </vue-seamless-scroll>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
</template>
<script>
import vueSeamlessScroll from 'vue-seamless-scroll'
import * as echarts from "echarts";  // vue2引入方式


export default {
  components: {
    vueSeamlessScroll
  },
  data(){
    return {
      listData:[
      ],
      listData2:[
      ],
      listDataTitle: "",
      data1: {},
    }
  },
  mounted(){
    this.getData1()
    this.getData2()
  },
  computed: {
    defaultOption () {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }

  },
  methods:{
    darwEcharts(){
      function fontSize(res){
        let clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res*fontSize;
      }
      var myChart_cmqk1 = echarts.init(document.getElementById('chinesechart_cmqk1'));
      var myChart_cmqk2 = echarts.init(document.getElementById('chinesechart_cmqk2'));
      var floatingPopulation = this.data1.floatingPopulation
      var permanentPopulation = this.data1.permanentPopulation
      // 绘制图表
      myChart_cmqk1.setOption({
        title: [
          {
            text: `{name|${permanentPopulation}}\n{val|常驻人口}`,
            top: 'center',
            left: 'center',
            textStyle: {
              rich: {
                name: {
                  fontSize: fontSize(0.09),
                  color:'#4CC6FF',
                  // color: new echarts.graphic.LinearGradient(0, 0, 1, 0,[
                  //     {
                  //       offset: 0,
                  //       color: '#00ddff'
                  //     },
                  //     {
                  //       offset: 1,
                  //       color: '#007db8'
                  //     }
                  // ]),
                  //     color: {
                  //     x: 0,
                  //     y: 1,
                  //     x2: 0,
                  //     y2: 0,
                  //     colorStops: [{
                  //         offset: 0, color: 'red' // 0% 处的颜色
                  //     }, {
                  //         offset: 1, color: 'blue' // 100% 处的颜色
                  //     }],
                  //     global: false // 缺省为 false

                  // },
                  padding: [10, 0]
                },
                val: {
                  fontSize:fontSize(0.05),
                  fontWeight: 'bold',
                  color: '#fff'
                }
              }
            }
          }
        ],

        // tooltip: {
        //   trigger: 'item'
        // },
        series: [
          {
            label: {
              show:false
            },
            // name:'Search Engine',
            type: 'pie',
            radius: ['70%','60%'],
            data: [
              { value: 1048, name: '常驻人口' },
              { value: 735, name: '常驻人口' },
            ],
            hoverAnimation: false,
            itemStyle:{
              normal:{
                color:(list)=>{
                  var colorList=[
                    {
                      start:'#1E325C',
                      end:'#1E325C'
                    } ,
                     {
                      start:'rgba(76, 249, 255, 1)',
                      end:'rgba(55, 112, 255, 1)'
                    }
                  ]
                  return new echarts.graphic.LinearGradient(1,0,0,0,[
                    {
                      offset:0,
                      color:colorList[list.dataIndex]['start']
                    },
                    {
                      offset:1,
                      color:colorList[list.dataIndex]['end']
                    }
                  ])
                }

               //  color:{
               //    type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [
               //        { offset: 0, color:'rgba(76, 249, 255, 1)'// 0% 处的颜色
               //  },
               //  { offset: 1, color: 'rgba(55, 112, 255, 1)' // 100% 处的颜色
               //   }], global: false // 缺省为 false
               // }

              }
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },

        ]
      });
      myChart_cmqk2.setOption({
        title: [
          {
            text: `{name|${floatingPopulation}}\n{val|流动人口}`,
            top: 'center',
            left: 'center',
            triggerEvent:false,
            textStyle: {
              rich: {
                name: {
                  fontSize: fontSize(0.09),
                  color:'#4CC6FF',
                  // color: new echarts.graphic.LinearGradient(0, 0, 1, 0,[
                  //     {
                  //       offset: 0,
                  //       color: '#00ddff'
                  //     },
                  //     {
                  //       offset: 1,
                  //       color: '#007db8'
                  //     }
                  // ]),
                  //     color: {
                  //     x: 0,
                  //     y: 1,
                  //     x2: 0,
                  //     y2: 0,
                  //     colorStops: [{
                  //         offset: 0, color: 'red' // 0% 处的颜色
                  //     }, {
                  //         offset: 1, color: 'blue' // 100% 处的颜色
                  //     }],
                  //     global: false // 缺省为 false

                  // },
                  padding: [10, 0]
                },
                val: {
                  fontSize:fontSize(0.05),
                  fontWeight: 'bold',
                  color: '#fff'
                }
              }
            }
          }
        ],

        // tooltip: {
        //   trigger: 'item'
        // },
        series: [
          {
            label: {
              show:false
            },
            // name: 'Access From',
            type: 'pie',
            radius: ['70%','60%'],
            data: [
              { value: 1048, name: '流动人口' },
              { value: 1078, name: '流动人口' },
            ],
            hoverAnimation: false,
            itemStyle:{
              normal:{
                color:(list)=>{
                  var colorList=[
                    {
                      start:'#1E325C',
                      end:'#1E325C'
                    } ,
                    {
                      start:'rgba(76, 249, 255, 1)',
                      end:'rgba(55, 112, 255, 1)'
                    }
                  ]
                  return new echarts.graphic.LinearGradient(1,0,0,0,[
                    {
                      offset:0,
                      color:colorList[list.dataIndex]['start']
                    },
                    {
                      offset:1,
                      color:colorList[list.dataIndex]['end']
                    }
                  ])
                }

                //  color:{
                //    type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [
                //        { offset: 0, color:'rgba(76, 249, 255, 1)'// 0% 处的颜色
                //  },
                //  { offset: 1, color: 'rgba(55, 112, 255, 1)' // 100% 处的颜色
                //   }], global: false // 缺省为 false
                // }

              }
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },

        ]
      });

      setTimeout(function() {
        window.onresize = function() {
          myChart_cmqk1.resize();
          myChart_cmqk2.resize();

        };
      });
    },
    async getData1(){
      let that = this;
      let res = await that.axios.get("data/people.json");
      that.data1 = res.data.data;
      that.darwEcharts();
      window.addEventListener('resize',()=>{
        that.darwEcharts();
      })
    },
    async getData2(){
      let that = this;
      let res = await that.axios.get("data/honor.json");
      that.listData=res.data.data.honorList
      that.listData2=res.data.data.otherHonorList
      that.listDataTitle = res.data.data.title
    }

  }
}


</script>

<style scoped>
.leftTwo{
    position: absolute;
    top: 10vh;
    left: 55%;
    width:45%;
    background: transparent;
    color: #ffffff;
  /* text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(76, 198, 255, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}
.title_hover{
  width: 100%;
  height: 1vw;
  line-height: 0.8vw;
  background-image: url("../../../assets/images/newImages/itemBorder.png");
  background-size: 100% 100%;
}
.ry_title1{
  width: 100%;
  height: 1vw;
  line-height: 0.8vw;
  background-image: url("../../../assets/images/newImages/itemBorder.png");
  background-size: 100% 100%;
}
.content_leftTwo_1 {
  width: 100%;
  text-align: center;
  height: 3.2vw;
}
.content_leftTwo_2 {
  width: 100%;
  text-align: center;
  height: 4vw;
}
.content_leftTwo_3 {
  width: 100%;
  text-align: center;
  height: 2vw;
}
.content_leftTwo_4 {
  width: 100%;
  text-align: center;
  height: 6.5vw;
}
.item_left{
  width: 50%; float: left
}
.item_right{
  width: 50%; float: right;
}
.item_cmqk_icon1{
  width: 150%;
  padding: 0vw 0vw 0px 0.25vw;
  float: left;
}
.characters{
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
}
.cmqk_characters1{
  width: 25%;
  float: left;
  line-height: 1.2vw;
}
.cmqk_characters1_1{
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
  transform: scale(0.7);
  font-size: 0.285rem;
  text-align: left;
}
.cmqk_characters2{
  width: 50%;float: left;line-height: 0.8vw;
}
.cmqk_characters2_1{
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bolder;
  font-size: 0.45rem;
  transform: scale(0.7);
  font-weight: bolder;
}

.cmqk_background3{
  text-align: left;
  line-height: normal;
  font-size: 0.25rem;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-image: url('../../../assets/images/left_two_img/left_two_cmqk_background2.png');
  background-repeat: no-repeat;
}

.ry_background1{
  text-align: left;
  line-height: normal;
  font-size: 0.25rem;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-image: url('../../../assets/images/left_two_img/left_two_ry_background1.png');
  background-repeat: no-repeat;
}

.ry_background2{
  text-align: left;
  line-height: normal;
  font-size: 0.25rem;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-image: url('../../../assets/images/left_two_img/left_two_ry_background2.png');
  background-repeat: no-repeat;
}
.ry_title_c{
  width: 98%;
  text-align: left;
  font-size: 0.25rem;
  display: inline-block;
  line-height: initial;
  font-weight: bolder;

  padding: 0px 0vw 0px 0.5vw;
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.ry_seamless_wk{
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.ry_characters1_1{
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 0.285rem;
  text-align: left;
}
.ry_title_t{
  font-size: 0.25rem;
  line-height: initial;
  display: inline-block;
  padding: 0px 0vw 0px 0.5vw;
}
.global-lozenge_1{
  width: 0.4vw;
  height: 0.4vw;
  background: linear-gradient(203deg, rgba(255, 93, 93, 1) 0%, rgba(217, 36, 0, 1) 100%);
  -moz-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.imgtestmen::after{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /*opacity:.4;*/
}
.echartsItem{
  width:100%;
  height: 100%;
  border-radius: 100%;
}

.leftTwo_chart_box{
  width: 100%;
  height: 100%;
  background-image: url('../../../assets/images/left_two_img/left_two_cmqk_background_alone.png');
  background-size: 40% 80%;
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>