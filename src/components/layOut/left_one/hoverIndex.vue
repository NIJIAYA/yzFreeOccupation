<template>
  <div class="hoverItem">
    <div class="title_hover">
      <div style="width:100%">
        <img src="../../../assets/images/newImages/title_one.png" style="width:100%">
      </div>
    </div>
    <div class="content_hover">
      <div class="content_item">
        <div style="width:35%;">
          <img
            src="../../../assets/images/newImages/hover_1.svg"
            style="height: 70%;margin:15% 0"
          />
        </div>
        <div style="width: 65%;">
          <div style="font-size: 0.4rem;font-weight: 900;">
            <div v-if="baseData.area"  class="animate_text">
            <animate-number from="0" :to="baseData.area " duration="2000"></animate-number>亩
            </div>
          </div>
          <div class="animate_text" style="font-size: 0.245rem;font-weight:900">区域面积</div>
        </div>
      </div>
      <div class="content_item">
        <div style="width:35%;">
          <img
            src="../../../assets/images/newImages/hover_2.svg"
             style="height: 70%;margin:15% 0"
          />
        </div>
        <div style="width: 65%;">
          <div style="font-size: 0.4rem; font-weight: 900">
                        <div v-if="baseData.familyCount" class="animate_text">
            <animate-number from="0" :to="baseData.familyCount " duration="2000"></animate-number>户
            </div>
            <!-- {{ baseData.familyCount }}户 -->
          </div>
          <div class="animate_text" style="font-size: 0.245rem;font-weight:900">在册户数</div>
        </div>
      </div>
    </div>
    <div class="person_hover">
       <div v-if="baseData.population">
         户籍人口
             <strong><animate-number from="0" style="font-size: 0.4rem;"  class="animate_text" :to="baseData.population" duration="2000"></animate-number></strong>人
            </div>
      <!-- <strong>{{ baseData.population }}</strong> 人 -->
    </div>
    <div class="money_hover">
      <div class="money_Item">
        <div class="money_num">
         <div v-if="baseData.villageProperty" class="animate_text blue">
            <animate-number  from="0" :to="baseData.villageProperty " duration="2000"></animate-number>亿
            </div>
          <!-- {{ baseData.villageProperty }}亿 -->
          </div>
        <div class="money_text blue">集体资产</div>
      </div>
      <div class="money_Item1">
        <div class="money_num">
                   <div v-if="baseData.villageFund" class="animate_text yellow">
            <animate-number from="0" :to="baseData.villageFund" duration="2000"  ></animate-number>万元
            </div>
          <!-- {{ baseData.villageFund }}万元 -->
          </div>
        <div class="money_text yellow">可用资金</div>
      </div>
      <div class="money_Item2">
        <div class="money_num">
          <div v-if="baseData.incomeAverage" class="animate_text green">
            <animate-number from="0.0" :to="baseData.incomeAverage" duration="2000" :formatter="formatter"></animate-number>万元
            </div>
          <!-- {{ baseData.incomeAverage }}万元 -->
          </div>
        <div class="money_text green">人均可支配收入</div>
      </div>
      <div class="money_Item3">
        <div class="money_num">
           <div v-if="baseData.houseAreaAverage" class="animate_text gray">
            <animate-number from="0" :to="baseData.houseAreaAverage" duration="2000"></animate-number>平方米
            <!-- </div>{{ baseData.houseAreaAverage }}平方米 -->
            </div>
        </div>
        <div class="money_text gray">人均住房面积</div>
      </div>
    </div>
     <div style="width:100%">
        <img src="../../../assets/images/newImages/title_two.png" style="width:100%">
      </div>
    <div class="cpcArea">
      <div class="cpcItem">
         <div style="width: 40%; float: left; height: 100%">
          <img
            src="../../../assets/images/newImages/cpc_groups.png"
            style="height: 60%;margin:40% 0"
          />
        </div>
        <div style="width: 60%; float: left; padding: 5px 0">
          <div style="width: 100%" class="cpc_text"  v-if="cpcData.branchCount">
            <strong><animate-number from="0"  :to="cpcData.branchCount" duration="2000"  ></animate-number></strong><span class="spanItem">个</span>
          </div>
          <div class="money_text cpc">党支部</div>
        </div>
      </div>
      <div class="cpcItem">
        <div style="width: 40%; float: left; height: 100%">
          <img
            src="../../../assets/images/newImages/cpc_persons.png"
            style="height: 60%;margin:40% 0"
          />
        </div>
        <div style="width: 60%; float: left; padding: 5px 0">
          <div style="width: 100%" class="cpc_text"  v-if="cpcData.memberCount">
            <strong><animate-number from="0"  :to="cpcData.memberCount" duration="2000"  ></animate-number></strong><span class="spanItem">个</span>
          </div>
          <div class="money_text cpc">党员数</div>
        </div>
      </div>
      <div class="cpcItem">
        <div style="width: 40%; float: left; height: 100%">
          <img
            src="../../../assets/images/newImages/cpc_team.png"
            style="height: 60%;margin:40% 0"
          />
        </div>
        <div style="width: 60%; float: left; padding: 5px 0">
          <div style="width: 100%" class="cpc_text"  v-if="cpcData.committeeCount">
            <strong><animate-number from="0"  :to="cpcData.committeeCount" duration="2000"  ></animate-number></strong><span class="spanItem">个</span>
          </div>
          <div class="money_text cpc">支委会</div>
        </div>
      </div>
      <div class="cpcItem">
        <div style="width: 40%; float: left; height: 100%">
          <img
            src="../../../assets/images/newImages/cpc_meeting.png"
            style="height: 60%;margin:40% 0"
          />
        </div>
        <div style="width: 60%; float: left; padding: 5px 0">
          <div style="width: 100%" class="cpc_text"  v-if="cpcData.membershipMeeting">
            <strong><animate-number from="0"  :to="cpcData.membershipMeeting" duration="2000"  ></animate-number></strong><span class="spanItem">个</span>
          </div>
          <div class="money_text cpc">党员大会</div>
        </div>
      </div>
      <div class="cpcItem">
                <div style="width: 40%; float: left; height: 100%">
          <img
            src="../../../assets/images/newImages/cpc_5.png"
            style="height: 60%;margin:40% 0"
          />
        </div>
        <div style="width: 60%; float: left; padding: 5px 0">
          <div style="width: 100%" class="cpc_text"  v-if="cpcData.teamCount">
            <strong><animate-number from="0"  :to="cpcData.teamCount" duration="2000"  ></animate-number></strong><span class="spanItem">个</span>
          </div>
          <div class="money_text cpc">党员小组</div>
        </div>
      </div>
      <div class="cpcItem">
        <div style="width: 40%; float: left; height: 100%">
          <img
            src="../../../assets/images/newImages/cpc_6.png"
            style="height: 60%;margin:40% 0"
          />
        </div>
        <div style="width: 60%; float: left; padding: 5px 0">
          <div style="width: 100%" class="cpc_text"  v-if="cpcData.lessonCount">
            <strong><animate-number from="0"  :to="cpcData.lessonCount" duration="2000"  ></animate-number></strong><span class="spanItem">个</span>
          </div>
          <div class="money_text cpc">党课</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      baseData: {},
      cpcData: {},
      testData:''
    };
  },
  created() {
    this.getCpcData();

  },
  mounted(){
      this.$nextTick(()=>{
      this.getBaseData();
    })
  },
  methods: {
    async getBaseData() {
      let that = this;
      let res = await that.axios.get("data/basicInfo.json");
      that.baseData = res.data.data;
    },
    async getCpcData() {
      let that = this;
      let res = await that.axios.get("data/party.json");
      that.cpcData = res.data.data;
    },
      formatter(num) {
      return num.toFixed(1) //小数点后几位，数字就是几小数点后几位
    },
  },
};
</script>
<style scoped>
.hoverItem {
  position: absolute;
  top: 10vh;
  left: 5%;
  width: 45%;
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
  /* text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(76, 198, 255, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}

.title_cpc{
  width: 100%;
  height: 1vw;
  line-height: 0.8vw;
  background-image: url("../../../assets/images/newImages/title_two.png");
  background-size: 100% 100%;
  background-position: 100% 100%;
}
.content_hover {
  width: 100%;
  height: 3vw;
  padding: 0.2vw;
  display: flex;
}
.content_item {
  display: flex;
  width: 50%;
}
.person_hover {
  clear: both;
  height: 1.5vw;
  font-weight: 300;
  line-height:1.5vw;
  font-size: 0.3rem;
  background-image: url("../../../assets/images/newImages/personBack.png");
  background-size: 95% 100%;
  background-position: 50%;
  text-align: center;
  background-repeat: no-repeat;
  margin-bottom: 10px;
}
.money_hover {
  width: 100%;
  text-align: center;
  height: 6vw;
}
.money_Item {
  width: 50%;
  float: left;
  padding: 5px;
  background-image: url("../../../assets/images/newImages/hoverItem_1.png");
    background-size: 70% 80%;
  background-repeat: no-repeat;
  background-position: 50%;
  height: 2.5vw;
  margin-bottom: 10px;
  border-right: 0.1vw dashed rgba(50, 109, 213, 1);
}
.money_Item1 {
  width: 50%;
  padding: 5px;
  float: left;
  background-image: url("../../../assets/images/newImages/hoverItem_2.png");
  background-size: 70% 80%;
  background-repeat: no-repeat;
  background-position: 50%;
  height: 2.5vw;
  margin-bottom: 10px;
}
.money_Item2 {
  width: 50%;
  padding: 5px;
  float: left;
  background-image: url("../../../assets/images/newImages/hoverItem_3.png");
    background-size: 70% 80%;
  background-repeat: no-repeat;
  background-position: 50%;
  height: 2.5vw;
  border-right: 0.1vw dashed rgba(50, 109, 213, 1);
  margin-bottom: 10px;
}
.money_Item3 {
  width: 50%;
  padding: 5px;
  float: left;
  background-image: url("../../../assets/images/newImages/hoverItem_4.png");
    background-size: 70% 80%;
  background-repeat: no-repeat;
  background-position: 50%;
  height: 2.5vw;
  margin-bottom: 10px;
}
.money_num {
  font-size: 0.3rem;
  font-weight: 900;
}
.money_text {
  font-size: 0.215rem;
  transform: scale(0.8);
}
.cpcArea {
  width: 100%;
  height: 6vw;
  clear: both;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.cpcItem {
  text-align: center;
  width: 30%;
  height: 2.8vw;
  padding: 0.4vw 0.2vw;
  float: left;
  margin: 0.15%;
  background-image: url("../../../assets/images/newImages/cpc_back.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 1vw 0 0 0;
}
.cpc_text {
  font-size: 0.3rem;
  float: left;
}
.cpc_unit {
  font-size: 0.3rem;
  float: left;
  color: #999999;
  transform: scale(0.7);
}
.cpc_text .spanItem {
  display: inline-block;
  transform: scale(0.7);
  color: #999999;
}
.animate_text{
  color: #ffffff;
  text-align: center;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.yellow{
   color: #ffffff;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
background: linear-gradient(180deg, #ffffff 25%, rgba(231, 177, 25, 1) 100%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
}
.blue{
   color: #ffffff;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
}
.green{
   color: #ffffff;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
background: linear-gradient(180deg, #ffffff 25%, rgba(72, 220, 101, 0.502) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
}
.gray{
   color: #ffffff;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
background: linear-gradient(180deg, #ffffff 25%, rgba(142, 108, 204, 0.502) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
}
</style>