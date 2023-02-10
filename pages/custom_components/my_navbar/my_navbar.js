Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: ["衣服", "裤子", "鞋子"],
    infoList: ["衣服的详细信息", "裤子的详细信息", "鞋子的详细信息"],
    current: 0
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
  handleChange(e) {
    this.setData({
      current: e.detail.current
    })
  },
  handleEvent(e) {
    this.setData({
      current: e.detail
    })
  }
})