<template>
  <div class="right_one">
    <!-- 473*272 -->
    <div class="block_wrap1">
      <div style="width:100%;margin-bottom:3.23%;line-height:1">
        <img style="width:100%" src="../../assets/images/country_title011.png"/>
      </div>
      <div class="line">
        <div class="bg">
          <div class="gradual" v-if="data1.hospitalCount">
            <animate-number from="0"  :to="data1.hospitalCount" duration="2000"  ></animate-number>
          </div>
          <div class="gradual" v-else>0</div>
          <div class="font">卫生院</div>
        </div>
        <div style="margin: 0 4.35%" class="bg">
          <div class="gradual" v-if="data1.kindergartenCount">
            <animate-number from="0"  :to="data1.kindergartenCount" duration="2000"  ></animate-number>
          </div>
          <div class="gradual" v-else>0</div>
          <div class="font">幼儿园</div>
        </div>
        <div class="bg">
          <div class="gradual" v-if="data1.primarySchoolCount">
            <animate-number from="0"  :to="data1.primarySchoolCount" duration="2000"  ></animate-number>
          </div>
          <div class="gradual" v-else>0</div>
          <div class="font">小学</div>
        </div>
      </div>
      <div class="line">
        <div class="bg">
          <div class="gradual" v-if="data1.metroStationCount">
            <animate-number from="0"  :to="data1.metroStationCount" duration="2000"  ></animate-number>
          </div>
          <div class="gradual" v-else>0</div>
          <div class="font">地铁站</div>
        </div>
        <div style="margin: 0 4.34%" class="bg">
          <div class="gradual" v-if="data1.busStopCount">
            <animate-number from="0"  :to="data1.busStopCount" duration="2000"  ></animate-number>
          </div>
          <div class="gradual" v-else>0</div>
          <div class="font">公交站</div>
        </div>
        <div class="bg">
          <div class="gradual" v-if="data1.parkingLotCount">
            <animate-number from="0"  :to="data1.parkingLotCount" duration="2000"  ></animate-number>
          </div>
          <div class="gradual" v-else>0</div>
          <div class="font">停车场</div>
        </div>
      </div>
    </div>
    <div class="block_wrap2">
      <div style="width:100%;margin-bottom:2.96%;line-height:1">
        <img style="width:100%" src="../../assets/images/module11_facility02_title.png"/>
      </div>
      <div class="content" style="margin-bottom:2.39%;">
        <div class="item">
          <div style="width:29.6%">
            <img style="width:100%" src="../../assets/images/module11_facility02_icon1.png"/>
          </div>
          <div style="margin-left: 12.29%">
            <div class="gradual2">
              <span class="gradual2" style="font-size:0.4rem" v-if="data2.inUseAppCount">
                <animate-number from="0"  :to="data2.inUseAppCount" duration="2000"  ></animate-number>
              </span>
              <span class="gradual2" style="font-size:0.4rem" v-else>0</span>
              <span class="gradual2" style="font-size:0.2rem">个</span>
            </div>
            <div class="font">已上线</div>
          </div>
        </div>
        <div class="item">
          <div style="width:29.6%">
            <img style="width:100%" src="../../assets/images/module11_facility02_icon2.png"/>
          </div>
          <div style="margin-left: 12.29%">
            <div class="gradual2">
              <span class="gradual2" style="font-size:0.4rem" v-if="data2.developingAppCount">
                <animate-number from="0"  :to="data2.developingAppCount" duration="2000"  ></animate-number>
              </span>
              <span class="gradual2" style="font-size:0.4rem" v-else>0</span>
              <span class="gradual2" style="font-size:0.2rem">个</span>
            </div>
            <div class="font">建设中</div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="item">
          <div style="width:29.6%">
            <img style="width:100%" src="../../assets/images/module11_facility02_icon3.png"/>
          </div>
          <div style="margin-left: 12.29%">
            <div class="gradual2">
              <span class="gradual2" style="font-size:0.4rem" v-if="data2.regUserCount">
                <animate-number from="0"  :to="data2.regUserCount" duration="2000"  ></animate-number>
              </span>
              <span class="gradual2" style="font-size:0.4rem" v-else>0</span>
              <span class="gradual2" style="font-size:0.2rem">个</span>
            </div>
            <div class="font">累计注册用户</div>
          </div>
        </div>
        <div class="item">
          <div style="width:29.6%">
            <img style="width:100%" src="../../assets/images/module11_facility02_icon4.png"/>
          </div>
          <div style="margin-left: 12.29%">
            <div class="gradual2">
              <span class="gradual2" style="font-size:0.4rem" v-if="data2.onlineUserCount">
                <animate-number from="0"  :to="data2.onlineUserCount" duration="2000"  ></animate-number>
              </span>
              <span class="gradual2" style="font-size:0.4rem" v-else>0</span>
              <span class="gradual2" style="font-size:0.2rem">个</span>
            </div>
            <div class="font">当前在线用户</div>
          </div>
        </div>
      </div>
    </div>
    <div class="block_wrap3">
      <div style="width:100%;margin-bottom:2.44%;line-height:1">
        <img style="width:100%" src="../../assets/images/module11_facility03_title.png"/>
      </div>
      <div class="content">
        <div style="display:flex;width:33%">
          <div style="width:32.67%">
            <img style="width:100%" src="../../assets/images/module11_facility03_icon1.png"/>
          </div>
          <div style="margin-left: 5.66%;">
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-if="data3.carCount">
              <animate-number from="0"  :to="data3.carCount" duration="2000"  ></animate-number>
            </div>
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-else>0</div>
            <div style="font-size:0.156rem;color:#fff;line-height:1.33">车辆总数</div>
          </div>
        </div>
        <div style="display:flex;width:33%">
          <div style="width:32.67%">
            <img style="width:100%" src="../../assets/images/module11_facility03_icon2.png"/>
          </div>
          <div style="margin-left: 5.66%;">
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-if="data3.parkingSpaceCount">
              <animate-number from="0"  :to="data3.parkingSpaceCount" duration="2000"  ></animate-number>
            </div>
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-else>0</div>
            <div style="font-size:0.156rem;color:#fff;line-height:1.33">车位总数</div>
          </div>
        </div>
        <div style="display:flex;width:33%">
          <div style="width:32.67%">
            <img style="width:100%" src="../../assets/images/module11_facility03_icon3.png"/>
          </div>
          <div style="margin-left: 5.66%;">
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-if="data3.shareParkingSpaceCount">
              <animate-number from="0"  :to="data3.shareParkingSpaceCount" duration="2000"  ></animate-number>
            </div>
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-else>0</div>
            <div style="font-size:0.156rem;color:#fff;line-height:1.33">共享车位</div>
          </div>
        </div>
      </div>
      <div class="content">
        <div style="display:flex;width:33%">
          <div style="width:32.67%">
            <img style="width:100%" src="../../assets/images/module11_facility03_icon4.png"/>
          </div>
          <div style="margin-left: 5.66%;">
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-if="data3.chargingParkingSpaceCount">
              <animate-number from="0"  :to="data3.chargingParkingSpaceCount" duration="2000"  ></animate-number>
            </div>
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-else>0</div>
            <div style="font-size:0.156rem;color:#fff;line-height:1.33">充电桩总数</div>
          </div>
        </div>
        <div style="display:flex;width:33%">
          <div style="width:32.67%">
            <img style="width:100%" src="../../assets/images/module11_facility03_icon5.png"/>
          </div>
          <div style="margin-left: 5.66%;">
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-if="data3.onlineDeviceCount">
              <animate-number from="0"  :to="data3.onlineDeviceCount" duration="2000"  ></animate-number>
            </div>
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-else>0</div>
            <div style="font-size:0.156rem;color:#fff;line-height:1.33">在线率</div>
          </div>
        </div>
        <div style="display:flex;width:33%">
          <div style="width:32.67%">
            <img style="width:100%" src="../../assets/images/module11_facility03_icon6.png"/>
          </div>
          <div style="margin-left: 5.66%;">
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-if="data3.brokenDeviceCount">
              <animate-number from="0"  :to="data3.brokenDeviceCount" duration="2000"  ></animate-number>
            </div>
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-else>0</div>
            <div style="font-size:0.156rem;color:#fff;line-height:1.33">损坏设备</div>
          </div>
        </div>
      </div>
      <div class="content" style="margin-bottom:0">
        <div style="display:flex;width:33%">
          <div style="width:32.67%">
            <img style="width:100%" src="../../assets/images/module11_facility03_icon7.png"/>
          </div>
          <div style="margin-left: 5.66%;">
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-if="data3.iotDeviceCount">
              <animate-number from="0"  :to="data3.iotDeviceCount" duration="2000"  ></animate-number>
            </div>
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-else>0</div>
            <div style="font-size:0.156rem;color:#fff;line-height:1.33">物联设备</div>
          </div>
        </div>
        <div style="display:flex;width:33%">
          <div style="width:32.67%">
            <img style="width:100%" src="../../assets/images/module11_facility03_icon8.png"/>
          </div>
          <div style="margin-left: 5.66%;">
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-if="data3.cameraCount">
              <animate-number from="0"  :to="data3.cameraCount" duration="2000"  ></animate-number>
            </div>
            <div style="font-size:0.26rem;color:#fff;line-height:1.17" v-else>0</div>
            <div style="font-size:0.156rem;color:#fff;line-height:1.33">摄像头总数</div>
          </div>
        </div>
        <div style="display:flex;width:33%">
          <div style="width:32.67%">
            <img style="width:100%" src="../../assets/images/module11_facility03_icon9.png"/>
          </div>
          <div style="margin-left: 5.66%;">
            <div style="font-size:0.26rem;color:#fff;line-height:1.17">----</div>
            <div style="font-size:0.156rem;color:#fff;line-height:1.33">更多</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import url from "../../assets/js/config.js";
  // import * as echarts from 'echarts';
  export default {
    data() {
      return {
        data1: {},
        data2: {},
        data3: {}
      };
    },
    mounted() {
      this.getData1()
      this.getData2()
      this.getData3()
    },
    methods: {
      async getData1(){
        let that = this;
        let res = await that.axios.get("data/supporting.json");
        that.data1 = res.data.data;
      },
      async getData2(){
        let that = this;
        let res = await that.axios.get("data/app.json");
        that.data2 = res.data.data;
      },
      async getData3(){
        let that = this;
        let res = await that.axios.get("data/iot.json");
        that.data3 = res.data.data;
      }
    }
  }

</script>
<style scoped>
  .right_one{
  position: absolute;
  top: 10vh;
  right: 55%;
  width: 37%;
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
  @import '~@/assets/css/module0011.css';

</style>