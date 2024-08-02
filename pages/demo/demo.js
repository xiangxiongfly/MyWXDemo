// pages/demo/demo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("  globalData.info", app.globalData.info);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  clickTodolist() {
    wx.navigateTo({
      url: '/pages/demo/todolist/todolist',
    })
  },
  clickHightlight() {
    wx.navigateTo({
      url: '/pages/demo/hightlight/hightlight',
    })
  },
  toNavbar() {
    wx.navigateTo({
      url: '/pages/custom_components/my_navbar/my_navbar',
    })
  },
  toCount() {
    wx.navigateTo({
      url: '/pages/custom_components/my_count/my_count',
    })
  },
  toPersonInfo() {
    wx.navigateTo({
      url: '/pages/demo/person_info/person_info',
    })
  },
  toLocalLive() {
    wx.navigateTo({
      url: '/pages/demo/local_live/local_live',
    })
  },
  toCompareNumber() {
    wx.navigateTo({
      url: '/pages/demo/compare_number/compare_number',
    })
  },
  toCalculator() {
    wx.navigateTo({
      url: '/pages/demo/calculator/calculator',
    })
  }
})