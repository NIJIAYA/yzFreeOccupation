<template>
  <div class="right_one">
    <!-- 乡村配套 -->
    <div class="">
      <img
        src="../../../assets/images/newImages/right_2back.png"
        style="width: 100%"
      />
    </div>
    <div class="chart_box">
      <div class="echartsItem" id="chinesechart"></div>
    </div>
    <div class="">
      <img
        src="../../../assets/images/newImages/rightBottom.png"
        style="width: 100%"
      />
    </div>
    <div class="rightBottom">
      <vue-seamless-scroll
        :data="listData"
        :class-option="defaultOption"
      >
        <div
          class="rightBottomItem"
          v-for="(item, index) in listData"
          :key="index"
        >
        <div class="borderArea">
            <img src="../../../assets/images/newImages/lastLeftborder.png" style="height:100%">
        </div>
          <div class="textArea">
            <div class="itemTopArea">
              <div class="itemText" >{{ (item.name&&item.name.length> 8)?item.name.slice(0,8) + '...':item.name}}</div>
              <div class="itemKinds">{{item.categoryName1}}</div>
              <div class="itemNum">{{ item.categoryValue1 }}</div>
            </div>
            <div class="itemBottomArea">
              <div class="itemText" style="background-image:url('../../../assets/images/newImages/nameBack.png')">{{ item.title }}</div>
              <div class="itemKinds">{{item.categoryName2}}</div>
              <div class="itemNum">{{ item.categoryValue2 }}</div>
            </div>
          </div>
        </div>
      </vue-seamless-scroll>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import vueSeamlessScroll from "vue-seamless-scroll"; // vue2引入方式
import scroll from "vue-seamless-scroll/src";
export default {
  components: {
    vueSeamlessScroll,
  },
  data() {
    return {
      listData: [],
    };
  },
  mounted() {
      this.getDataList();
    this.getBarList();
    window.addEventListener("resize", () => {
     this.getBarList();
    });
  },
  computed: {
    defaultOption() {
      return {
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  methods: {
         async getDataList(){
         let res = await this.axios.get('data/mainIndustry.json')
            this.listData = res.data.data.list
      },  
     async getBarList(){
         let res = await this.axios.get('data/industry.json')

         this.darwEcharts(res.data.data.totalAmount,res.data.data.chart);
      },
    darwEcharts(totalAmount = '',chart) {
      function fontSize(res) {
        let clientWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        if (!clientWidth) return;
        let fontSize = 100 * (clientWidth / 1920);
        return res * fontSize;
      }
      var myChart = echarts.init(document.getElementById("chinesechart"));
      // 绘制图表
      myChart.setOption({
        title: [
          {
            text: `{name|${totalAmount}}\n{val|整体产业}`,
            top: "center",
            left: "center",
            textStyle: {
              rich: {
                name: {
                  fontSize: fontSize(0.15),
                  color: "#4CC6FF",
                  padding: [10, 0],
                },
                val: {
                  fontSize: fontSize(0.1),
                  color: "#4CC6FF",
                },
              },
            },
          },
        ],
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            itemStyle: {
              normal: {
                color: (list) => {
                  // 注意 ！！！！！ 这里的数组一定要和实际的类目长度相等或大于，不然会缺少颜色报错
                  var colorList = [
                    {
                      colorStart: "rgba(255, 180, 63, 1)",
                      colorEnd: "rgba(255, 208, 155, 1)",
                    },
                    {
                      colorStart: "rgba(255, 77, 77, 1)",
                      colorEnd: "rgba(255, 115, 96, 1)",
                    },
                        {
                      colorStart: "rgba(76, 249, 255, 1)",
                      colorEnd: "rgba(55, 112, 255, 1)",
                    },
                    {
                      colorStart: " #FD6865",
                      colorEnd: "#f8b2b1",
                    },
                  ];
                  return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                    {
                      //左、下、右、上
                      offset: 0,
                      color: colorList[list.dataIndex]["colorStart"],
                    },
                    {
                      offset: 1,
                      color: colorList[list.dataIndex]["colorEnd"],
                    },
                  ]);
                },
              },
            },
            labelLine: {
              normal: {
                length: fontSize(0.2), // 改变标示线的长度
                lineStyle: {
                  color: "#999999", // 改变标示线的颜色
                },
              },
            },
            label: {
              //  formatter: '{name|{b}：{c}}\n{hr|}',
              formatter: "{name|{d}%  |  {b}\n{c}万元}",
              //折线图文字颜色
              color: "#fffdef",
              rich: {
                name: {
                  fontSize: fontSize(0.08),
                  borderRadius: 3,
                  color: "#999999",
                  width: fontSize(0.1),
                  height: fontSize(0.1),
                  padding: [0, 15, 0, 10],
                },
                //圆点位置大小配置
                hr: {
                  //auto自定义
                  backgroundColor: "#999999",
                  borderRadius: 8,
                  width: 3,
                  height: 3,
                  padding: [3, 3, 0, -12],
                },
                a: {
                  padding: [-12, 10, -20, 15],
                },
              },
            },
            type: "pie",
            radius: ["65%", "55%"],
            data: chart,
          },
        ],
      });
      setTimeout(function () {
        window.onresize = function () {
          myChart.resize();
        };
      });
    },
  },
};
</script>
<style scoped>
.borderArea{
    height: 80%;
    margin: 2% 0;
    width:5%;
    float: left;
}
.textArea{
    font-size: 0.2rem;
    margin:0.1vw 0; 
    float: left; 
    width:95%;  
    color: #ffffff;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, #ffffff 25%, #4cc6ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.itemNum{
  width: 25%;
  float: left;
}
.itemKinds {
  display: list-item;
  list-style-type: disc;
  width: 25%;
  float: left;
}
.itemTopArea{
     display: flex;
     height: 50%;
     width:100%;
     justify-content: space-between;
}
.itemBottomArea{
     display: flex;
     height: 50%;
     width:100%;
     justify-content: space-between;  
}
.itemArea {
  float: left;
  display: flex;
  height: 100%;
  width:100%;
  justify-content: space-between;

}
.itemText {
  width:49%;
  max-width: 50%;
  float: left;
  color: #ffffff !important;
  background-image: url('../../../assets/images/newImages/nameBack.png');
  white-space:nowrap;
  /*overflow:hidden;*/
  text-overflow:ellipsis;
  font-weight: 700;
  height: 1vw;
  font-size: 0.3rem;
  background-size: 100% 100%;
}

.rightBottom {
  width: 100%;
  height: 10vw;
  overflow: hidden;
}
.rightBottomItem {
  margin: 0.3vw 0;
  width: 100%;
  height: 2vw;
  line-height: 1vw;
  background-size: 100% 100%;
}
.right_one {
  position: absolute;
  top: 10vh;
  right: 5%;
  width: 45%;
  /* background: #000; */
  color: #ffffff;
}
.chart_box {
  width: 100%;
  height: 6.5vw;
  background-image: url("../../../assets/images/newImages/echartsBack.png");
  background-size: 40% 80%;
  background-position: 50%;
  background-repeat: no-repeat;
}
.echartsItem {
  width: 100%;
  height: 100%;
  border-radius: 100%;
}
.title_hover {
  width: 100%;
  height: 1vw;
  background-image: url("../../../assets/images/newImages/itemBorder.png");
  background-size: 100% 100%;
}
.content_country {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>