import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
  path: "/",
  component: () => import( /* webpackPreload: true */ '../components/index.vue'),
  name: "index",
  meta: {
    isBack: true, //用于判断上一个页面是哪个
    title: "自雇共鄞大数据平台",
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

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
