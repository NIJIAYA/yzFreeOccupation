<template>
    <div class="leftIndex">
        <RightOne ref="RightOne" @listenToChangebtnright="testrun"></RightOne>
<!--        <RightTwo></RightTwo>-->
    </div>
</template>
<script>
import RightOne from '../module0011/index.vue'
import RightTwo from './right_one/rightOne.vue'
// import leftTwo from './left_one/left_2.vue'
export default {
    components:{
        RightOne,
        RightTwo
    },
    data(){
        return{

        }
    },
  methods:{
    testrun(value){
      this.$emit("listenToChangebtnright",value);
    }
  }
}
</script>
<style scoped>
.leftIndex{
  position: absolute;
  top: 0;
  right: 2vw;
  height: 100%;
  width: 25vw;
  /*background-image: url('../../assets/images/yzFreeOccupationImages/yashileftcard.png');*/
  background-size: 100% 100%;
  color: #ffffff;
  /* background: #ffffff; */
}
</style>
