// app.js
const http = require("./utils/http")
App({
  onLaunch() {
    wx.showLoading({
      title: "登录中",
      mask: true
    })
    http.get("/user/checkLogin")
      .then(data => {
        if (data.isLogin) {
          // 已登录
          this.loginSuccess()
          console.log("通过保存的cookie登录成功");
        } else {
          // 未登录
          console.log("未登录");
          this.login({
            success: () => {
              this.loginSuccess()
            },
            fail: () => {
              this.onLaunch()
            }
          })
        }
      }, () => {
        this.onLaunch()
      })
  },
  login: function (options) {
    wx.login({
      success: res => {
        console.log("res.code: " + res.code);
        http.get("/user/login", {
            js_code: res.code
          })
          .then(data => {
            console.log("/user/login===");
            console.log( data);
            if (data && data.isLogin) {
              options.success()
            } else {
              wx.hideLoading()
              wx.showModal({
                title: '登录失败（请使用真实的AppID，请检查服务器配置）',
                confirmText: "重试",
                complete: (res) => {
                  if (res.confirm) {
                    options.fail()
                  }
                },
              })
            }
          }, () => {
            console.log(" options.fail()");
            options.fail()
          })
      }
    })
  },
  isLoginSuccss: false, // 是否登录成功
  loginSuccessCallback: null, // 登录成功回调
  loginSuccess: function () {
    wx.hideLoading()
    this.isLoginSuccss = true
    this.loginSuccessCallback && this.loginSuccessCallback()
  }
})