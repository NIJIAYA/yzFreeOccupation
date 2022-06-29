<template>
  <div class="headItem">
    <!-- 853 104 -->
    <div class="headItem1">
      <div class="headbox">
        <div class="databox">
          <div class="datatitle">同心荟</div>
          <div>
            <span v-if="data.ParkCount" style="font-size: 20px;color:#3cc7ef;font-weight:600"><strong><animate-number from="0"  :to="data.ParkCount" duration="2000"  ></animate-number></strong></span>
            <span v-else style="font-size: 20px;color:#3cc7ef;font-weight:600"><strong>0</strong></span>
            <span style="font-size: 16px;color:#fff">家</span>
          </div>
        </div>
      </div>
    </div>
    <div class="headItem2">
      <div class="headbox">
        <div class="databox">
          <div class="datatitle">活动</div>
          <div>
            <span v-if="data.ActivityCount" style="font-size: 20px;color:#efc121;font-weight:600"><strong><animate-number from="0"  :to="data.ActivityCount" duration="2000"  ></animate-number></strong></span>
            <span v-else style="font-size: 20px;color:#efc121;font-weight:600"><strong>0</strong></span>
            <span style="font-size: 16px;color:#fff">个</span>
          </div>
        </div>
      </div>
    </div>
    <div class="headItem3">
      <div class="headbox">
        <div class="databox">
          <div class="datatitle">作品</div>
          <div>
            <span v-if="data.workCount" style="font-size: 20px;color:#ef4821;font-weight:600"><strong><animate-number from="0"  :to="data.workCount" duration="2000"  ></animate-number></strong></span>
            <span v-else style="font-size: 20px;color:#ef4821;font-weight:600"><strong>0</strong></span>
            <span style="font-size: 16px;color:#fff">个</span>
          </div>
        </div>
      </div>
    </div>
    <div class="headItem4">
      <div class="headbox">
        <div class="databox">
          <div class="datatitle">成交数</div>
          <div>
            <span v-if="data.DemandDealCount" style="font-size: 20px;color:#e77522;font-weight:600"><strong><animate-number from="0"  :to="data.DemandDealCount" duration="2000"  ></animate-number></strong></span>
            <span v-else style="font-size: 20px;color:#e77522;font-weight:600"><strong>0</strong></span>
            <span style="font-size: 16px;color:#fff">个</span>
          </div>
        </div>
      </div>
    </div>
    <div class="headItem5">
      <div class="headbox">
        <div class="databox">
          <div class="datatitle">交易额</div>
          <div>
            <span v-if="data.TradeMoney" style="font-size: 20px;color:#25c19a;font-weight:600"><strong><animate-number from="0"  :to="data.TradeMoney.slice(0,-1)" duration="2000"  ></animate-number></strong></span>
            <span v-else style="font-size: 20px;color:#25c19a;font-weight:600"><strong>0</strong></span>
            <span style="font-size: 16px;color:#fff">万</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import url from "../../assets/js/config.js";
// import * as echarts from 'echarts';

  import url from '../../assets/js/config.js'
export default {
  data () {
    return {
      data: {}
    };
  },
  mounted () {
    this.getDetail()
  },
  methods: {
    getDetail(){
      var that = this
      that.axios.post(url.testdata).then(res =>{
        that.data = res.data.Data
      })
    }
  }
}
</script>
<style scoped>
.right_one {
  /* position: absolute;
  top: 10vh;
  right: 55%;
  width: 37%; */
  width: 506px;
  /* height: 403px; */
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
@import '~@/assets/css/headItem.css';
</style>
