Page({
  data: {
    slideList: []
  },
  handleAjax() {
    wx.request({
      url: "https://www.wanandroid.com/banner/json",
      success: (res) => {
        this.setData({
          slideList: res.data.data
        })
      },
      fail: () => {
        console.log("请求失败");
      }
    })
  }
})