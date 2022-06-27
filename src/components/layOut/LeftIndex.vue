<template>
    <div class="leftIndex">
      <LeftOne></LeftOne>
<!--        <LeftOne></LeftOne>-->
<!--        <leftTwo></leftTwo>-->
    </div>
</template>
<script>
import LeftOne from "../yzFreeOccupation_Left/LeftOne";
export default {
    components:{
        LeftOne,
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.leftIndex{
  padding: 3vh 1.4vw;
  position: absolute;
  top: 0vh;
  left: 1vw;
  height: 100%;
  width: 25.8vw;
  z-index: 9;
    background-image: url('../../assets/images/yzFreeOccupationImages/leftbackground.png');
    background-size: 100% 100%;
  color: #ffffff;
  /* background: #ffffff; */
}
</style>
