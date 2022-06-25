// vue.config.js
const path = require('path');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // 打包分析
const IS_PROD = ['production'].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir);
const webpack = require("webpack");
module.exports = {
  // 打包路径
  publicPath: '/',
  // 输出目录
  outputDir: 'dist',
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: true,
  runtimeCompiler: true, // 运行时版本是否需要编译
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config
      .plugin("ignore")
      .use(
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn$/)
      );
    //config.resolve.symlinks(true); // 修复热更新失效
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    // config.plugin("html").tap(args => {
    //     // 修复 Lazy loading routes Error
    //     args[0].chunksSortMode = "none";
    //     return args; 
    // });
    // 删除预加载
    // config.plugins.delete('preload');
    // config.plugins.delete('prefetch');
    // // 压缩代码
    // config.optimization.minimize(true);
    // 压缩图片
    // 需要 npm i -D image-webpack-loader
    // config.module
    //     .rule("images")
    //     .use("image-webpack-loader")
    //     .loader("image-webpack-loader")
    //     .options({
    //         mozjpeg: { progressive: true, quality: 65 },
    //         optipng: { enabled: false },
    //         pngquant: { quality: [0.65, 0.9], speed: 4 },
    //         gifsicle: { interlaced: false },
    //         webp: { quality: 75 }
    //     });
    // 打包分析, 打包之后自动生成一个名叫report.html文件(可忽视)
    if (IS_PROD) {
      config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
        {
          analyzerMode: "static"
        }
      ]);
    }

    return config;
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.js?$/,
        // include: [
        //     resolve("/node_modules/dom7"),
        //     resolve("/node_modules/weui")
        // ],
        // exclude: /(node_modules)/,
        loader: 'babel-loader'
        // query: {
        //     presets: ['latest']
        // }
      }]
    }
  },

  devServer: {
    //public: '127.0.0.1:8081'
  }
  // css: {
  //     extract: true,
  //     requireModuleExtension: false,// 去掉文件名中的 .module
  //     loaderOptions: {
  //         // css: {
  //         //     // 这里的选项会传递给 css-loader
  //         //     importLoaders: 1
  //         //   },
  //         // // 给 less-loader 传递 Less.js 相关选项
  //         // less: {
  //         //     // `globalVars` 定义全局对象，可加入全局变量
  //         //     globalVars: {
  //         //         primary: '#333'
  //         //     }
  //         // }
  //     },
  //     modules: false
  // }
  // devServer: {
  //     overlay: { // 让浏览器 overlay 同时显示警告和错误
  //         warnings: true,
  //         errors: true
  //     },
  //     host: "localhost",
  //     port: 8080, // 端口号
  //     https: false, // https:{type:Boolean}
  //     open: false, //配置自动启动浏览器
  //     hotOnly: true // 热更新
  //     // proxy: 'http://localhost:8080' // 配置跨域处理,只有一个代理
  //     // proxy: { //配置多个跨域
  //     //     "/api": {
  //     //         target: "",
  //     //         changeOrigin: true,
  //     //         // ws: true,//websocket支持
  //     //         secure: false,
  //     //         pathRewrite: {
  //     //             "^/api": "/"
  //     //         }
  //     //     },
  //     //     "/api2": {
  //     //         target: "",
  //     //         changeOrigin: true,
  //     //         //ws: true,//websocket支持
  //     //         secure: false,
  //     //         pathRewrite: {
  //     //             "^/api2": "/"
  //     //         }
  //     //     }
  //     // }
  // }
}