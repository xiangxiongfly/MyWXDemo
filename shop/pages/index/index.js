const http = require("../../utils/http.js")
const app = getApp()
Page({
  onLoad: function () {
    let callback = () => {
      this.showLoading()
      http.get("/food/index")
        .then(data => {
          this.hideLoading()
          console.log("请求成功：" + data);
        }, () => {
          console.log("请求失败");
          callback()
        })
    }
    if (app.isLoginSuccss) {
      callback()
    } else {
      app.loginSuccessCallback = callback
    }
  },
  start: function () {

  },
  showLoading() {
    wx.showLoading({
      title: '努力加载中',
      mask: true
    })
  },
  hideLoading() {
    wx.hideLoading()
  }
})