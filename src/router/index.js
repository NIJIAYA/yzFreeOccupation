import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  component: () => import( /* webpackPreload: true */ '../components/index.vue'),
  name: "index",
  meta: {
    isBack: true, //用于判断上一个页面是哪个
    title: "index",
    index: 0
  }
},
{
  path: "/module0011",
  component: () => import( /* webpackPreload: true */ '../components/module0011/index.vue'),
  name: "module0011",
  meta: {
    isBack: true, //用于判断上一个页面是哪个
    title: "module0011",
    index: 1
  }
},
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;