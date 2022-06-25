<template>
    <div class="topArea">
        <div class="textArea_top">
          <img style="width:100%;height: 100%;margin-top: 4.6vh;" src="../../assets/images/yzFreeOccupationImages/topButton.png">
        </div>
        <div class="showTags">
            <div class="message">

            </div>
            <div class="wethear">
                <!-- <div style="float:left;"><img src="../../assets/images/newImages/wethear.svg" style="width:50%;margin:10px"></div> -->
               <div style="float:left;"></div>
            </div>
            <div class="dataTime">
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
import url from '../../assets/js/config'
export default {
    data(){
        return {
            nowTime:'',
            dateTime:null,
            weatherWendu:'',
            weatherType:'',
        }
    },
    created(){
        this.dateTime = setInterval(()=>{
             this.run()
         },1000);
         this.getWeather()
    },
    mounted(){
        this.run();
        this.getWeather()
    },
    beforeDestroy(){
        this.dateTime = null;
        clearInterval();
    },
    methods:{
        getWeather(){
            this.axios.post(url.getWeather).then(res =>{
                this.weatherType = res.data.data.text;
                this.weatherWendu = res.data.data.temp;
            })
        },
        run(){
 var time = new Date();//获取系统当前时间
 var year = time.getFullYear();
 var month = time.getMonth()+1;
 var date= time.getDate();//系统时间月份中的日
 var hour = time.getHours();
 var minutes = time.getMinutes();

 if(date<10){
 date = "0"+date;
 }
 if(hour<10){
 hour = "0"+hour;
 }
 if(minutes<10){
 minutes = "0"+minutes;
 }
 //var newDate = year+"年"+month+"月"+date+"日"+week+hour+":"+minutes+":"+seconds;
 this.nowTime =  year + "年" + month + "月" + date + "日  " + hour + ":" + minutes;

 }


    }
}
</script>
<style scoped>
.topArea{
background-image: url('../../assets/images/yzFreeOccupationImages/topSreenHaveWord.png');
height:11.6vh;
width: 100%;
background-size: 100% 100%;
background-position: 0 -.5vw;
background-repeat: no-repeat;
position: fixed;
top: 0;
left: 0;
z-index: 999;
color:#fff;
font-size: 0.3rem;
}
.showTags{
    position: absolute;
    top: 0;
    left: 65%;
    float:right;
    display: flex;
    width: 35%;
    text-align: center;
    line-height: 1.5vw;
}
.message{
    flex: 4;
}
.wethear{
    flex: 2;
}
.dataTime{
   flex: 4;
}
.textArea_top{
  padding: 0 1vw;
    font-weight: 700;
    position: relative;
    text-align: center;
    line-height: 2.5vw;
  font-size: 0.6rem;
   color: #ffffff;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(76, 198, 255, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
