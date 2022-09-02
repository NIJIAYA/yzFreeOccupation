import "@babel/polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import axios from "./assets/axios/axios";
import animate from "animate.css";
import "./components/toast/toast.css";
import Toast from "./components/toast/toast";
import VueAnimateNumber from 'vue-animate-number';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueAnimateNumber)
Vue.use(ElementUI);

import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

//按需引入示例
// import 'element-ui/lib/theme-chalk/index.css'
// import ElementUI from './element/index'

// import Vconsole from "vconsole";
// const vConsole = new Vconsole();
// export default vConsole;

Vue.use(Toast);
Vue.use(animate);

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
