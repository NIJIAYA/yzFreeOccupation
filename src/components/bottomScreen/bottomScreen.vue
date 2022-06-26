<template>
    <div class="bottomArea">
      <div style="width:100%;margin-bottom:1vh;line-height:1">
        <div class="bottom_title1_center">
          <div class="bottom_title1_word">
            <span style="letter-spacing: 0.1rem;">作品展示</span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        type:'0',
        }
    },
    methods:{
    clickItem(e){
        console.log(e)
        this.type = e
    }
    }
}
</script>
<style scoped>
.bottomArea{
    /*position: fixed;*/
  padding: 2.5vh 1.4vw 0 1.4vw;
  bottom: 0vh;
    left: 27vw;
    width: 46VW;
    height: 30vh;
    background-image: url('../../assets/images/yzFreeOccupationImages/bottombackground.png');
    background-size: 100% 100%;
  position: absolute;
  z-index: 9;
  color: #ffffff;

}

.bottom_title1_center{
  height: 3.7vh;
  width: 100%;
  background: url("../../assets/images/yzFreeOccupationImages/lef_title1_center.png") no-repeat;
  background-size:100% 100%;
}
.bottom_title1_word{
  left: 5%;
  width: 95%;
  font-size: 0.5rem;
  font-weight: 600;
  position: relative;
  line-height: 3.7vh;
  display: inline-block;
}

.btnArea{
    display: flex;
    justify-content: space-between;
    width: 60%;
    height: 2vw;
    margin: 0 auto;
    margin-bottom: 10px;
    /* background: linear-gradient(92.67deg, rgba(0, 0, 0, 0) 0%, rgba(21, 21, 21, 0.9882) 58.08%, rgba(21, 21, 21, 1) 58.86%, rgba(1, 1, 1, 0) 98.63%, rgba(0, 0, 0, 0) 100%); */
}
.chooseItem{
   border-bottom: 2px solid rgba(76, 198, 255, 1);
   background-image: url('../../assets/images/newImages/bottomItemBack.svg');
   background-size: 100% 100%;
   background-repeat: no-repeat;
}
.btnItem{
  text-align: center;
  height: 100%;
  width: 5vw;
  line-height:2vw;
  font-size: 0.4rem;
  color: #ffffff;
}

</style>
