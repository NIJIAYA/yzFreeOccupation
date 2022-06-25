<template>
  <div id="centerDiv" class="mapcontainer">
    <div class="topBack"></div>
    <TopScreen></TopScreen>
    <Map :url="configUrl" @onload="onMapload" />
    <BottomScreen></BottomScreen>
    <!-- <Hover></Hover> -->
    
    <!-- <LeftTwo></LeftTwo> -->
    <LeftIndex></LeftIndex>
    <RightIndex></RightIndex>
    <!-- <RightOne></RightOne> -->
  </div>
</template>

<script>
  const ee = 0.00669342162296594323;
  const a = 6378245.0;
  import LeftIndex from './layOut/LeftIndex.vue'
  import RightIndex from './layOut/rightIndex.vue'
  import Map from '../components/mars3d/Map.vue'
  import TopScreen from './topScreen/index.vue'
  import BottomScreen from './bottomScreen/bottomScreen.vue'
  // import RightOne from './module0011/index.vue'
  import url from '../assets/js/config.js'
  import moment from 'moment'
  export default {
    name: 'Index',
    components: {
      Map,
      TopScreen,
      BottomScreen,
      // RightOne,
      LeftIndex,
      RightIndex
    },
    data() {
      const basePathUrl = window.basePathUrl || ''
      return {
        map: null,
        configUrl: basePathUrl + 'config/config.json',
        graphicLayer: null,
        wallhiclayer: null,
        change: true,
        weather: '', //天气
        times: '',
        connectionList: [],
        show: false,
        active: true, //记录总览跟小区是否选择
      }
    },
    mounted() {
    },
    methods: {
      convertGCJ02ToWGS84(lng, lat) {
        var dlat, dlng, radlat, magic, sqrtmagic, mglat, mglng;
        dlat = this._transformlat(lng - 105.0, lat - 35.0)
        dlng = this._transformlng(lng - 105.0, lat - 35.0)
        radlat = lat / 180.0 * Math.PI
        magic = Math.sin(radlat)
        magic = 1 - ee * magic * magic
        sqrtmagic = Math.sqrt(magic)
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * Math.PI)
        dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * Math.PI)
        mglat = lat + dlat
        mglng = lng + dlng
        return [lng * 2 - mglng, lat * 2 - mglat]
      },
      convertWGS84ToGCJ02(lng, lat) {
        var dlat, dlng, radlat, magic, sqrtmagic, mglat, mglng;
        dlat = this._transformlat(lng - 105.0, lat - 35.0)
        dlng = this._transformlng(lng - 105.0, lat - 35.0)
        radlat = lat / 180.0 * Math.PI
        magic = Math.sin(radlat)
        magic = 1 - ee * magic * magic
        sqrtmagic = Math.sqrt(magic)
        dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * Math.PI)
        dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * Math.PI)
        mglat = lat + dlat
        mglng = lng + dlng
        return [mglng, mglat]
      },
      _transformlng(lng, lat) {
        var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng +
          0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * Math.PI) + 20.0 *
          Math.sin(2.0 * lng * Math.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lng * Math.PI) + 40.0 *
          Math.sin(lng / 3.0 * Math.PI)) * 2.0 / 3.0;
        ret += (150.0 * Math.sin(lng / 12.0 * Math.PI) + 300.0 *
          Math.sin(lng / 30.0 * Math.PI)) * 2.0 / 3.0;
        return ret;
      },

      _transformlat(lng, lat) {
        var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat +
          0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
        ret += (20.0 * Math.sin(6.0 * lng * Math.PI) + 20.0 *
          Math.sin(2.0 * lng * Math.PI)) * 2.0 / 3.0;
        ret += (20.0 * Math.sin(lat * Math.PI) + 40.0 *
          Math.sin(lat / 3.0 * Math.PI)) * 2.0 / 3.0;
        ret += (160.0 * Math.sin(lat / 12.0 * Math.PI) + 320 *
          Math.sin(lat * Math.PI / 30.0)) * 2.0 / 3.0;
        return ret;
      },
      // 地图构造完成回调
      async onMapload(map) {
        const that = this;
        that.map = map;
        // 以下为演示代码
        // 创建entity图层
        that.graphicLayer = new that.mars3d.layer.GraphicLayer()
        that.map.addLayer(that.graphicLayer)
        // 配制成到鼠标右键换视角
        that.map.changeMouseModel(true);
        // 2.在layer上绑定监听事件
        // that.graphicLayer.on(that.mars3d.EventType.click, function (event) {
        //   that.clickFn(event)
        // })
        that.graphicLayer.on(that.mars3d.EventType.mouseOver, function (event) {
          console.log('监听layer，鼠标移入了矢量对象', event)
        })
        that.graphicLayer.on(that.mars3d.EventType.mouseOut, function (event) {
          console.log('监听layer，鼠标移出了矢量对象', event)
        })

        // var tileset = new that.Cesium.Cesium3DTileset({
        //   url: "https://haichuangmap-event.cnool.net/tileset.json",
        //   maximumScreenSpaceError: 1,
        //   maximumMemoryUsage: 8096
        // });
        // that.map.viewer.scene.primitives.add(tileset);
        // 可在图层绑定右键菜单,对所有加到这个图层的矢量数据都生效
        that.graphicLayer.bindContextMenu([{
          text: '删除对象',
          iconCls: 'fa fa-trash-o',
          callback: function (e) {
            const graphic = e.graphic
            if (graphic) {
              that.graphicLayer.removeGraphic(graphic)
            }
          }
        }])
        // 加一些演示数据
        that.drawYinZhouMap();
        // that.addGraphic_e01();
        that.drawLayer();
      },

      // 以下为演示代码
      // addGraphic_e01() {
      //   let that = this;
        // that.Connection.forEach(element => {
        //   // const graphic = new this.mars3d.graphic.LabelEntity({
        //   //   position: [Number(element.mapX), Number(element.mapY)],
        //   //   attr: {
        //   //     'id': element.businessId
        //   //   },
        //   //   style: {
        //   //     text: element.businessName,
        //   //     font_size: 18,
        //   //     font_family: '微软雅黑',
        //   //     color: '#fff',
        //   //     outline: true,
        //   //     outlineColor: '#fff',
        //   //     outlineWidth: 1,
        //   //     background: '#ddd',
        //   //     horizontalOrigin: this.Cesium.HorizontalOrigin.CENTER,
        //   //     verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
        //   //     visibleDepth: false
        //   //   }
        //   // })
        //   // 标记
        //   var markGraphic = new this.mars3d.graphic.BillboardEntity({
        //     name: "贴地图标",
        //     position: [Number(element.mapX), Number(element.mapY)],
        //     attr: {
        //       'id': element.businessId
        //     },
        //     style: {
        //       image: "https://inet.cnool.net/futurecommunity/images/" + element.businessName + ".png?v=1.01",
        //       scale: 1,
        //       horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        //       verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        //       clampToGround: true
        //     }
        //   });
        //   that.graphicLayer.addGraphic(markGraphic);
        //   // this.bindLayerPopup(markGraphic)
        //   //that.graphicLayer.addGraphic(graphic)
        // });

      // },
      async drawLayer(){
        const that = this;
        let res = await this.axios.get('data/poi.json');
        let data = res.data.data
        var markGraphic = new that.mars3d.graphic.BillboardEntity({
            name: "贴地图标",
            position: [Number(data.lng), Number(data.lat)],
            style: {
              image: "https://oss-public.cnool.net/admin/2022-4-29/4a1afc348c414447baeecc69dcf0b8ef-dot.png",
              scale: 0.3,
              horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
              verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
              clampToGround: true
            }
          });
          that.graphicLayer.addGraphic(markGraphic);
          that.bindLayerPopup(data)
      },
      // 添加节点点击事件
      // 在图层绑定Popup弹窗
      bindLayerPopup(data) {
    const that = this;
        that.graphicLayer.bindPopup(
    function (event) {
      const attr = event.graphic.attr
      return "我是layer上绑定的自定义模版Popup<br />" + attr.type
    },
    {
      template: `<div class="marsBlackPanel animation-spaceInDown">
        <div class="border_corner border_corner_left_top"></div>
    <div class="border_corner border_corner_right_top"></div>
    <div class="border_corner border_corner_left_bottom"></div>
    <div class="border_corner border_corner_right_bottom"></div>
                        <div class="marsBlackPanel-text">
                        <div>${data.name}</div>
                        <div><button class="marsBlackPanel_btn">更多</button></div>
                        </div>
                        <div class="marsBlackPanel-book">
                        <div class="book-item">
                        <div  class="book-num">1</div>
                        <div  class="book-text">地铁站</div>
                        </div>
                        <div class="book-item">
                        <div class="book-num">2</div>
                        <div class="book-text">公交站点</div>
                        </div>
                        <div class="book-item">
                        <div  class="book-num">2</div>
                        <div  class="book-text">停车场</div>
                        </div>
                        </div>
                        <div class="marsBlackPanel-content">
                        <div style="color:rgba(76, 198, 255, 1)">占地面积</div>
                        <div>1600亩</div>
                        </div>
                        <div class="marsBlackPanel-content">
                        <div style="color:rgba(76, 198, 255, 1)">产业收益</div>
                        <div>2300万</div>
                        </div>
                        <div class="marsBlackPanel-content">
                        <div style="color:rgba(76, 198, 255, 1)">车位数量</div>
                        <div>1023个</div>
                        </div>
                        <div class="marsBlackPanel-content">
                        <div style="color:rgba(76, 198, 255, 1)">物联设备</div>
                        <div>100个</div>
                        </div>
                        <span class="mars3d-popup-close-button closeButton" >×</span>
                      </div>`,
      horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
      verticalOrigin: Cesium.VerticalOrigin.CENTER
    }
  )
      },
      async drawYinZhouMap() {
        const that = this;
        that.wallhiclayer = new that.mars3d.layer.GraphicLayer()
        // 鄞州区边界宽度
        let res = await that.axios.get('config/yinzhou.json');
         var areaGraphics = new that.mars3d.graphic.PolygonEntity({
          positions: res.data,
          style: {
            height: 1,
            diffHeight: 1,
            materialType: that.mars3d.MaterialType.PolyGradient,
            color: '#46CFFF',
            opacity: .5
            //alphaPower: 1.5
          }
        });
        that.wallhiclayer.addGraphic(areaGraphics);
        // 边界高度
        const graphic = new that.mars3d.graphic.WallEntity({
          positions: res.data,
          style: {
            closure: true,
            diffHeight: 1000,
            material: that.mars3d.MaterialUtil.createMaterialProperty(that.mars3d.MaterialType.LineFlow, {
              image: "https://inet.cnool.net/futurecommunity/images/fence.png",
              // color: data.businessBuildStatusColor,
               color: '#46CFFF',
              speed: 10,
              axisY: true
            })
          }
        });
        that.wallhiclayer.addGraphic(graphic);
        that.map.addLayer(that.wallhiclayer)
        // var borderGraphic = new that.mars3d.graphic.PolylineEntity({
        //   positions: res.data,
        //   style: {
        //     width: 3,
        //     clampToGround: true,
        //     material: that.mars3d.MaterialUtil.createMaterialProperty(that.mars3d.MaterialType.PolylineDash, {
        //       color: that.Cesium.Color.CYAN,
        //       dashLength: 8.0,
        //     }),
        //   },
        // });
        // that.graphicLayer.addGraphic(borderGraphic);
      },
    //  async addGraphic_e02(data) {
    //     const that = this;
    //     // 围墙
    //     // const positions = [];
    //     // data.fencePoints.forEach(element => {
    //     //   positions.push([Number(element.mapX), Number(element.mapY)])
    //     // });
    //     // console.log(positions)
    //     let res = await that.axios.get('config/yinzhou.json');
    //     console.log(res.data)




    //   },
      // clickFn(event) {
      //   const that = this;
      //   that.Connection.forEach(element => {
      //     that.graphicLayer.removeGraphic(that.graphicLayer.getGraphicByAttr('id', element.businessId +
      //       'wall'))
      //     that.graphicLayer.removeGraphic(that.graphicLayer.getGraphicByAttr('id', element.businessId +
      //       'face'))
      //     if (event.sourceTarget) {
      //       if (element.businessId == event.sourceTarget.properties.getValue('id').id) {
      //         let laglng = that.convertGCJ02ToWGS84(Number(element.mapX), Number(element.mapY))
      //         that.map.camera.flyTo({
      //           destination: that.Cesium.Cartesian3.fromDegrees(laglng[0] + 0.0055, laglng[1] - 0.0231,
      //             1586),
      //           orientation: {
      //             heading: that.Cesium.Math.toRadians(0),
      //             pitch: that.Cesium.Math.toRadians(-35.0),
      //             roll: 0.0
      //           }
      //         });
      //         console.log(event)
      //         that.$refs.iframeRight.contentWindow.postMessage(element, "*");
      //       }
      //     } else {
      //       if (element.businessId == event.businessId) {
      //         let laglng = that.convertGCJ02ToWGS84(Number(element.mapX), Number(element.mapY))
      //         that.map.camera.flyTo({
      //           destination: that.Cesium.Cartesian3.fromDegrees(laglng[0] + 0.0055, laglng[1] - 0.0231,
      //             1586),
      //           orientation: {
      //             heading: that.Cesium.Math.toRadians(0),
      //             pitch: that.Cesium.Math.toRadians(-35.0),
      //             roll: 0.0
      //           }
      //         });
      //         that.$refs.iframeRight.contentWindow.postMessage(element, "*");
      //       }
      //     }
      //     if (that.right == 'show animated fadeInRight') {
      //       that.right = 'animated fadeOutRight'
      //       setTimeout(function () {
      //         that.right = 'show animated fadeInRight'
      //       }, 800)
      //     } else {
      //       that.right = 'show animated fadeInRight'
      //     }
      //   });
      // },
    }
  }
</script>

<style>
  @import '~@/assets/css/global.css';
  /* @import '~@/assets/css/topScreen.css'; */
/* .topBack{
  position: relative;
  width: 100%;
  height: 20vh;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.9137) 8.69%, rgba(16, 16, 16, 0.2196) 77.91%, rgba(16, 16, 16, 0) 100%);
} */

  .mapcontainer {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  .marsBlackPanel{
    background-image: url('../assets/images/newImages/modalBack.png');
    /* background: linear-gradient(180deg, rgba(32, 55, 69, 1) 0%, rgba(34, 39, 45, 0.302) 100%); */
    width: 13vw;
    background-size: 100% 100%;
    position: relative;
    border-radius: 10px 0 10px 0;
    top: -200px;
    left:20px;
    padding: 20px;
  }
  .marsBlackPanel-text{
   color: #ffffff;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, rgba(76, 198, 255, 1) 0%, rgba(255, 255, 255, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    width:100%;
    overflow: hidden;
    font-size:0.4rem;
    font-weight: 700;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .marsBlackPanel-text button{
    background: transparent;
    border: 1px solid rgba(123, 160, 255, 1);
    color: #fff;
    padding: 5px 20px;
    font-size: 0.3rem;
    height: 80%;
  }
  .marsBlackPanel-book{
    display: flex;
    justify-content: space-between;
  }
  .book-item{
    padding: 3% 1%;
    margin:1%;
    width: 50%;
    text-align: center;
    background-image: url('../assets/images/newImages/itemback.png');
    background-size: 100% 100%;
    font-size: 0.3rem;
    /* color: linear-gradient(180deg, rgba(76, 198, 255, 1) 0%, rgba(255, 255, 255, 1) 100%); */
  }
  .book-num{
    line-height: 1;
    font-weight: 900;
  color: #ffffff;
  font-size: 0.5rem;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  .book-text{
        font-weight: 900;
   color: #ffffff;
  text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
  background: linear-gradient(180deg, #ffffff 25%, #4CC6FF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  .marsBlackPanel-content{
    width: 96%;
    margin: 0 auto;
    color:#fff;
    display: flex;
    justify-content: space-between;
    font-size:0.3rem;
  }
  .closeButton{
    position: fixed;
    right: -10px;
    top: -180px;
    color:#999999;
    font-size: 0.4rem;
  }
</style>