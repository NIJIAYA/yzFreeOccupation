<template>
    <div class="leftIndex">
<!--        <LeftOne></LeftOne>-->
<!--        <leftTwo></leftTwo>-->
    </div>
</template>
<script>
import LeftOne from './left_one/hoverIndex.vue'
import leftTwo from './left_one/left_2.vue'
export default {
    components:{
        LeftOne,
        leftTwo
    },
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.leftIndex{
  position: absolute;
  top: 0vh;
  left: 1vw;
  height: 100%;
  width: 25vw;
  z-index: 9;
    background-image: url('../../assets/images/yzFreeOccupationImages/yashirightcard.png');
    background-size: 100% 100%;
  color: #ffffff;
  /* background: #ffffff; */
}
</style>
