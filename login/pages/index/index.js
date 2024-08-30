const app = getApp()
Page({
  credit: function () {
    wx.request({
      url: "http://127.0.0.1:3000/credit",
      data: {
        token: app.globalData.token
      },
      success: res => {
        const credit = res.data.credit
        wx.showToast({
          title: credit.toString(),
          icon: "none"
        })
      }
    })
  }
})