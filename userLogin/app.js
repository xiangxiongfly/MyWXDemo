App({
  onLaunch: function () {
    this.wxLogin()
  },
  // 微信登录
  wxLogin: function () {
    wx.login({
      success: res => {
        let code = res.code
        console.log("login code: " + code);
        this.login(code)
      }
    })
  },
  // 登录
  login: function (code) {
    wx.request({
      url: 'http://127.0.0.1:3000/login',
      method: "post",
      data: {
        code: code
      },
      success: res => {
        let token = res.data.token
        console.log("token: " + token);
        // 全局缓存           
        this.globalData.token = token
        // 数据缓存
        wx.setStorage({
          key: "token",
          data: token
        })
      }
    })
  },
  checkLogin: function () {},
  globalData: {
    token: null
  }
})