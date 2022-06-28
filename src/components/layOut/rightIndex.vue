<template>
    <div class="leftIndex">
        <RightOne ref="RightOne" @listenToChangebtnright="testrun"></RightOne>
    </div>
</template>
<script>
import RightOne from '../module0011/index.vue'
export default {
    components:{
        RightOne,
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
