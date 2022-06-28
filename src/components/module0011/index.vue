<template>
  <div class="right_one">
    <!-- 总共506px*930px -->
    <div class="block_wrap1">
      <div class="block">
        <div class="title">
          <div class="titleIcon">
            <img
              style="height:100%"
              src="../../assets/images/titleIcon.png"
            />
          </div>
          <span>政府赋能</span>
        </div>
        <div class="tabGroup">
          <div
            :class="tabfocus1==1?'tab1':'tab2'"
            style="margin-right:0.729vw"
            @click="tabfocus1=1"
          >
            <span style="font-size:0.833vw"
                  :style="tabfocus1==1?'color:#ffffff':'color:#ffffff99'">政策传递：</span>
            <span style="font-size:0.729vw;font-weight:600"
                  :style="tabfocus1==1?'color:#3cc5ef':'color:#3cc5ef99'"><strong><animate-number from="0"  :to="300" duration="2000"  ></animate-number></strong></span>
          </div>
          <div
            :class="tabfocus1==2?'tab1':'tab2'"
            style="margin-right:0.729vw"
            @click="tabfocus1=2"
          >
            <span style="font-size:0.833vw"
                  :style="tabfocus1==2?'color:#ffffff':'color:#ffffff99'">我有需求：</span>
            <span style="font-size:0.729vw;font-weight:600"
                  :style="tabfocus1==2?'color:#3cc5ef':'color:#3cc5ef99'"><strong><animate-number from="0"  :to="300" duration="2000"  ></animate-number></strong></span>
          </div>
          <div
            :class="tabfocus1==3?'tab1':'tab2'"
            @click="tabfocus1=3">
            <span style="font-size:0.833vw"
                  :style="tabfocus1==3?'color:#ffffff':'color:#ffffff99'">我有资源：</span>
            <span style="font-size:0.729vw;font-weight:600"
                  :style="tabfocus1==3?'color:#3cc5ef':'color:#3cc5ef99'"><strong><animate-number from="0"  :to="300" duration="2000"  ></animate-number></strong></span>
          </div>
        </div>
        <div class="list">
          <div class="listItem">
            <span class="leftItem">
              <div class="leftImg">
                <img
                  style="width:100%"
                  src="../../assets/images/right01_listleftIcon.png"
                />
              </div>
              <span>需要策划一场500人以上的现场活动</span>
            </span>
            <div class="rightItem">
              <span>2022-06-12</span>
              <div class="rightImg">
                <img
                  style="width:100%"
                  src="../../assets/images/right01_listRightIcon.png"
                />
              </div>
            </div>
          </div>
          <div class="listItem">
            <span class="leftItem">
              <div class="leftImg">
                <img
                  style="width:100%"
                  src="../../assets/images/right01_listleftIcon.png"
                />
              </div>
              <span>需要会金银彩秀技艺传承人</span>
            </span>
            <div class="rightItem">
              <span>2022-06-12</span>
              <div class="rightImg">
                <img
                  style="width:100%"
                  src="../../assets/images/right01_listRightIcon.png"
                />
              </div>
            </div>
          </div>
          <div class="listItem">
            <span class="leftItem">
              <div class="leftImg">
                <img
                  style="width:100%"
                  src="../../assets/images/right01_listleftIcon.png"
                />
              </div>
              <span>我想要找个三观一致、志趣相投的女朋友</span>
            </span>
            <div class="rightItem">
              <span>2022-06-12</span>
              <div class="rightImg">
                <img
                  style="width:100%"
                  src="../../assets/images/right01_listRightIcon.png"
                />
              </div>
            </div>
          </div>
          <div class="listItem">
            <span class="leftItem">
              <div class="leftImg">
                <img
                  style="width:100%"
                  src="../../assets/images/right01_listleftIcon.png"
                />
              </div>
              <span>需要策划一场500人以上的现场活动</span>
            </span>
            <div class="rightItem">
              <span>2022-06-12</span>
              <div class="rightImg">
                <img
                  style="width:100%"
                  src="../../assets/images/right01_listRightIcon.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block_wrap2">
      <div class="block">
        <div class="title">
          <div class="titleIcon">
            <img
              style="height:100%"
              src="../../assets/images/titleIcon.png"
            />
          </div>
          <span>宣传活动</span>
        </div>
        <div class="tabGroup">
          <div
            :class="tabfocus2==1?'tab1':'tab2'"
            @click="tabfocus2=1"
            style="margin-right:0.4166vw"
          >
            <span style="font-size:0.833vw"
                  :style="tabfocus2==1?'color:#ffffff':'color:#ffffff99'">政策传递：</span>
            <span style="font-size:0.729vw;font-weight:600"
                  :style="tabfocus2==1?'color:#3cc5ef':'color:#3cc5ef99'"><strong><animate-number from="0"  :to="300" duration="2000"  ></animate-number></strong></span>
          </div>
          <div
            :class="tabfocus2==2?'tab1':'tab2'"
            @click="tabfocus2=2">
            <span style="font-size:0.833vw"
                  :style="tabfocus2==2?'color:#ffffff':'color:#ffffff99'">活动：</span>
            <span style="font-size:0.729vw;font-weight:600"
                  :style="tabfocus2==2?'color:#3cc5ef':'color:#3cc5ef99'"><strong><animate-number from="0"  :to="300" duration="2000"  ></animate-number></strong></span>
          </div>
          <!-- <div class="tab2">
            <span style="font-size:0.833vw">我有资源：</span>
            <span style="font-size:0.729vw">300</span>
          </div> -->
        </div>
        <div class="detail">
          <div class="wrap2Title" @click="showimg('1')">少年职业和传承体验活动“自由一夏”</div>
          <div class="wrap2Img" @click="showimg('2')">
            <img
              style="width:100%"
              src="../../assets/images/simpleImg.png"
            />
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
  data () {
    return {
      tabfocus1: 1,
      tabfocus2: 1,
    };
  },
  mounted () {
  },
  methods: {
    showimg(value){
      this.$emit("listenToChangebtnright",value);
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
  width: 26.35vw;
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
@import '~@/assets/css/module0011.css';
</style>
