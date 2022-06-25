//接口hash
import url from "../js/config";
import wx from 'weixin-js-sdk'
import axios from 'axios'
export default {
    // RecordLog: function (logtype,CustomerManagerId,ProductId) {
    //         axios.post(url.RecordLog,{logtype:logtype,CustomerManagerId:CustomerManagerId,ProductId:ProductId})
    //         .then(function(res){
    //             if (res.data && res.data.Success) {
    //             } else {
    //             }
    //         })
    // },
    requireConfig: function () {
        var data = {
            origUrl: encodeURI(window.location.href)
            }
            axios.post(url.ConfigInfo_share, data)
            .then(function(res) {
                if (res.data && res.data.Success) {
                    console.log(res.data.Data)
                    wx.config({
                        debug: false,
                        appId: res.data.Data.Appid,
                        timestamp: res.data.Data.Timestamp,
                        nonceStr: res.data.Data.Nonce,
                        signature: res.data.Data.Sign,
                        jsApiList: [
                            'checkJsApi',
                            'onMenuShareTimeline',
                            'onMenuShareAppMessage'
                        ]
                    });
                } else {
                    console.log(data)
                }
            })
    },
    requireShare: function (title, desc, cur_href, img_url) {
        let u = navigator.userAgent
        let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1
        //let isIOS = !!u.match(/\(i[^;]+;(U;)?CPU.+Mac OS X/)
        if (isAndroid) {
            var data = {
                origUrl: encodeURI(window.location.href)
                }
                axios.post(url.ConfigInfo_share, data)
                .then(function(res) {
                    if (res.data && res.data.Success) {
                        wx.config({
                            debug: false,
                            appId: res.data.Data.Appid,
                            timestamp: res.data.Data.Timestamp,
                            nonceStr: res.data.Data.Nonce,
                            signature: res.data.Data.Sign,
                            jsApiList: [
                                'checkJsApi',
                                'onMenuShareTimeline',
                                'onMenuShareAppMessage'
                            ]
                        });
                    } else {
                    }
                })
        }
        wx.ready(function () {
            wx.onMenuShareTimeline({
                title: title,
                desc: desc,
                link: 'https://' + encodeURI(window.location.host) + cur_href,
                imgUrl: img_url,
                success: function () {
                }
            });
            wx.onMenuShareAppMessage({
                title: title,
                desc: desc,
                link: 'https://' + encodeURI(window.location.host) + cur_href,
                imgUrl: img_url,
                success: function () {
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        })
    }
}