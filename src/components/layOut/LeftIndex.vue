<template>
    <div class="leftIndex">
        <LeftOne></LeftOne>
        <leftTwo></leftTwo>
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
  height: 100%;
  width: 30%;
  z-index: 9;
    background-image: url('../../assets/images/newImages/leftIndex1.png');
    background-size: 100% 100%;
  color: #ffffff;
  /* background: #ffffff; */
}
</style>