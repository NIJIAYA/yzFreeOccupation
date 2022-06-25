<template>
    <div class="bottomArea">
<!--          <div class="btnArea">-->
<!--              <div  v-for="(item,index) in menuList" :key="index">-->
<!--                  <div class="btnItem" :class="type == item.index ? 'chooseItem' : ''" @click="clickItem(item.index)">{{item.name}}</div>-->
<!--              </div>-->
<!--          </div>-->
    </div>
</template>
<script>
export default {
    data(){
        return{
        type:'0',
        menuList:[
            {name:"乡村总览",url:"",index:'0'},
            {name:"产业",url:"",index:'1'},
            {name:"风貌",url:"",index:'2'},
            {name:"智慧",url:"",index:'3'},
            {name:"邻里",url:"",index:'4'},
            {name:"健康",url:"",index:'5'},
            {name:"文化",url:"",index:'6'},
            {name:"低碳",url:"",index:'7'},
            {name:"交通",url:"",index:'8'},
            {name:"治理",url:"",index:'9'},
        ]
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
    position: fixed;
    bottom: 2vh;
    left: 27vw;
    width: 46VW;
    height: 30vh;
    background-image: url('../../assets/images/yzFreeOccupationImages/yangshicard.png');
    background-size: 100% 100%;
      z-index: 999;
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
