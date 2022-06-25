import axios from "axios";
import router from "../../router/index";

axios.defaults.timeout = 20000;
axios.defaults.retry = 0;
axios.defaults.retryDelay = 1000;
axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

//接口post转formURLencode
axios.defaults.transformRequest = [
  (data, config) => {
    if (data) {
      let fields = Object.keys(data);
      fields.forEach((item) => {
        if (data[item] === undefined || data[item] === null) {
          delete data[item];
        }
      });
    }
    if (!config["Content-Type"]) {
      let ret = "";
      for (let it in data) {
        ret +=
          encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
      }
      return ret;
    } else {
      switch (config["Content-Type"].toLowerCase()) {
        case "application/json;charset=utf-8": { //默认Content-Type为json
          return JSON.stringify(data);
        }
        case "multipart/form-data;charset=utf-8": { //图片上传Content-Type为form-data
          return data;
        }
        default: {
          let ret = "";
          for (let it in data) {
            ret +=
              encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
          }
          return ret;
        }
      }
    }
  }
];
axios.interceptors.request.use(
  (config) => {
    //请求发送参数添加
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (data) => {
    //error信息判断
    switch (data.data.errorCode) {
      case 0:
        break;
      case -99:
      case -100:
        router.replace({
          name: "login"
        });
        break;
      default:
        break;
    }
    return data;
  },
  (error) => {
    if (
      error.response &&
      (error.response.status == 502 ||
        error.response.status == 504 ||
        error.response.status == 404 ||
        error.response.status == 500)
    ) {
      error = "服务器被吃了⊙﹏⊙∥";
    } else if (error.response && error.response.status == 403) {
      error = "权限不足,请联系管理员!";
    } else if (error.message.includes("timeout")) {
      error = "请求超时";
    } else {
      error = "未知错误!";
    }
    message.error(error);
    return Promise.reject(error);
  }
);

export default axios;