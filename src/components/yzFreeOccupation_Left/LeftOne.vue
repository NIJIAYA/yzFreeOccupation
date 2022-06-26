<template>
  <div class="right_one">

<!--    //人群数，登记人数，理事人数-->
      <div style="width:100%;margin-bottom:5vh;line-height:1">
        <div class="left_item1_center">
          <div class="left_item1_word1">
            <span >人群总数</span>
            <span style="right: 2%;position: absolute;"><span style="font-size: 0.6rem;color: #3cc7ef;font-weight: 600;">12345</span>人</span>
          </div>
        </div>
        <div class="left_item1_left">
          <div class="left_item1_word2">
            <span >登记人数</span>
            <span style="right: 5%;position: absolute;"><span style="font-size: 0.55rem;color: #3cc7ef;font-weight: 600;">1234</span>人</span>
          </div>
        </div>
        <div class="left_item1_right">
          <div class="left_item1_word2">
            <span >理事人数</span>
            <span style="right: 5%;position: absolute;"><span style="font-size: 0.55rem;color: #3cc7ef;font-weight: 600;">41</span>人</span>
          </div>
        </div>
      </div>

<!--    //理事风采-->
    <div style="width:100%;margin-bottom:1vh;line-height:1">
      <div class="left_title1_center">
        <div class="left_title1_word">
          <span style="letter-spacing: 0.1rem;">理事风采</span>
          <span style="position: absolute;right: 2%;color: #3cc7ef;font-size: 0.25rem;font-size: 0.4rem;">详细信息 <img src="../../assets/images/yzFreeOccupationImages/lef_title1_icon.png"></span>
<!--          <span style="right: 5%;position: absolute;"><span style="font-size: 0.55rem;color: #3cc7ef;font-weight: 600;">1234</span>人</span>-->
        </div>
      </div>
    </div>
<!--    //理事人员 + item-->
    <div style="width:100%;margin-bottom:2vh;line-height:1">
      <div class="left_title2_center">
          <div style="position: absolute"><img src="../../assets/images/yzFreeOccupationImages/lef_title2_icon.png"></div>
          <div class="left_title2_word">理事人员</div>
      </div>
    </div>
    <div style="width:100%;margin-bottom:4vh;line-height:1">
      <div class="left_item2_center" v-for="(item,index) in listData" :key="index">
        <div class="left_item2_word2">
          <div style="margin-right: 3.6%;display:inline-block;">{{index + 1}}</div>
          <div style="position: absolute;display:inline-block;">
            <img style="margin: 20%;" src="../../assets/images/yzFreeOccupationImages/left_item2_heardimg.png"/>
          </div>
          <div style="display:inline-block;margin-left: 12%;font-size: 0.35rem;">
            {{item.name}}
          </div>
          <div style="display:inline-block;position: absolute;height: 1.5vh;margin-left: 0.2vw;">

            <div class="left_item2_word2_type" :style="{color:item.color,borderColor:item.color,background:item.backColor}">
              {{item.type}}
            </div>
          </div>

          <div style="width: 45%;right: 5%;position: absolute;display:inline-block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
            {{item.txt}}
          </div>
        </div>
      </div>
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
            <div><span class="left_item3_word" style="color: #3cc7ef">22</span>部</div>
          </div>
        </div>
      </div>
      <div class="left_item3_box2">
        <div class="left_item3_back2">
          <div style="position: absolute;margin-top: 16%;text-align: center;width: 18.33%;">
            <div style="font-size: 0.4rem;">音乐作品</div>
            <div><span class="left_item3_word" style="color: #efc121">22</span>部</div>
          </div>
        </div>
      </div>
      <div class="left_item3_box3">
        <div class="left_item3_back3">
          <div style="position: absolute;margin-top: 16%;text-align: center;width: 18.33%;">
            <div style="font-size: 0.4rem;">非遗作品</div>
            <div><span class="left_item3_word" style="color: #ef4821">22</span>部</div>
          </div>
        </div>
      </div>
    </div>

<!--    //人物画像-->
    <div style="width:100%;margin-bottom:2vh;line-height:1">
      <div class="left_title2_center">
        <div style="position: absolute"><img src="../../assets/images/yzFreeOccupationImages/lef_title2_icon.png"></div>
        <div class="left_title2_word">人物画像</div>
        <div style="position: absolute;right: 0"><img src="../../assets/images/yzFreeOccupationImages/left_title3_icon.png"></div>
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
import * as echarts from "echarts";

export default {
  components: {
    vueSeamlessScroll
  },
  data(){
    return {
      listData:[
        {name:'柴昀喆',hardimg:'sdasdsadas',type:'作曲家',txt:'青年作曲家，伶Remix国风电音厂牌头号制作者，开辟了历史的先河',color:'#3cc7ef',backColor:'#295785'},
        {name:'吴日东',hardimg:'sdasdsadas',type:'摄影师',txt:'青年作曲家，伶Remix国风电音厂牌头号制作者，开辟了历史的先河',color:'#eabf26',backColor:'#4e565c'},
        {name:'苍天白鹤',hardimg:'sdasdsadas',type:'策划师',txt:'青年作曲家，伶Remix国风电音厂牌头号制作者，开辟了历史的先河',color:'#ef4821',backColor:'#4d3e5a'},
      ],
      listData2:[
          19,39,59,19
      ],
      listDataTitle: "",
      data1: {},
      option:{},
      echeight:15,
    }
  },
  mounted(){
    this.darwEcharts();
    // this.getData1()
    // this.getData2()
  },
  computed: {

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
      this.option = {
        grid: {
          // show:true,
          left: "6%",
          top: "11%",
          right: "6%",
          bottom: "20%"
        },
        backgroundColor: "#010E3A",
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
            fontSize: "0.3rem",

          },
          data: ["写做人员", "文艺创作人员", "知识型市场\n服务人员", "技能型市场\n服务人员"],
        },
        yAxis: {
          show: true,
          name: "占比",
          min: 0,
          max: 100,
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
            fontSize: "0.3rem",
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
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
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
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#37BBF8" },
                  { offset: 1, color: "rgb(55,187,248,0.1)" }
                ]),
                barBorderRadius: [0, 0, 0, 0],
                opacity: "1",
                borderWidth: 1,
                borderColor: "#00183F",
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
                borderColor: "#00183F",
                opacity: "1",
                shadowColor: "rgb(0,0,0,0.1)",
                shadowOffsetX: "0.5",
                shadowOffsetY: "0.5",
              },
            },
            label: {
              show: true,
              // color: "#04F9FD",
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#37BBF8" },
                { offset: 1, color: "rgb(55,187,248,0.1)" }
              ]),
              offset: [-10, 0],
              position: "top",
              fontSize: "0.25rem",
              fontWeight: "normal",
            },
            symbol: "diamond",
            symbolRotate: 0,
            symbolSize: ["30", "20"],
            symbolOffset: ["0", "-10"],
            symbolPosition: "end",
            data: this.listData2,
            z: 3,
          },
        ],
      };
      myChart_cmqk1.setOption({
        ...this.option
      })

    }
  }
}
</script>

<style scoped>
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
