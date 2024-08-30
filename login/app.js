// app.js
App({
  onLaunch() {
    this.checkLogin(res => {
      console.log("is_login: " + res.is_login);
      if (!res.is_login) {
        this.login()
      }
    })
  },
  // 登录
  login: function () {
    wx.login({
      success: res => {
        console.log("login code: " + res.code);
        wx.request({
          url: 'http://127.0.0.1:3000/login',
          method: "POST",
          data: {
            code: res.code
          },
          success: res => {
            const token = res.data.token
            console.log("token: " + token);
            this.saveToken(token)
          }
        })
      }
    })
  },
  // 检查登录
  checkLogin: function (callback) {
    const token = this.getToken()
    if (token) {
      wx.request({
        url: 'http://127.0.0.1:3000/checklogin',
        data: {
          token: token
        },
        success: res => {
          callback({
            is_login: res.data.is_login
          })
        }
      })
    } else {
      callback({
        is_login: false
      })
    }
  },
  saveToken: function (token) {
    this.globalData.token = token
    wx.setStorage({
      key: 'token',
      data: token
    })
  },
  getToken: function () {
    if (this.globalData.token) {
      return this.globalData.token
    }
    let token = wx.getStorageSync('token')
    if (token) {
      this.globalData.token = token
      return token
    }
    return null
  },
  // 全局数据
  globalData: {
    token: null // 存储token
  }
})