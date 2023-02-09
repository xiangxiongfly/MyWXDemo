// pages/elements/elements.js
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

  toButton() {
    wx.navigateTo({
      url: '/pages/elements/button/button',
    })
  },
  toImage() {
    wx.navigateTo({
      url: '/pages/elements/image/image',
    })
  },
  toIcon() {
    wx.navigateTo({
      url: '/pages/elements/icon/icon',
    })
  },
  toScrollView() {
    wx.navigateTo({
      url: '/pages/elements/scrollview/scrollview',
    })
  },
  toSwiper() {
    wx.navigateTo({
      url: '/pages/elements/swiper/swiper',
    })
  },
  toCheckbox() {
    wx.navigateTo({
      url: '/pages/elements/checkbox/checkbox',
    })
  },
  toAudio() {
    wx.navigateTo({
      url: '/pages/elements/audio/audio',
    })
  },
  toVideo() {
    wx.navigateTo({
      url: '/pages/elements/video/video',
    })
  }
})