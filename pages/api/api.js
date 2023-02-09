// pages/api/api.js
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
    console.log("下拉刷新了");
    setTimeout(() => {
      wx.stopPullDownRefresh()
    }, 2000)
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
  clickSwitchTab() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  clickNavigateTo() {
    wx.navigateTo({
      url: '/pages/first_page/first_page?name=Tom&age=18&address=beijing',
    })
  },
  showToast() {
    wx.showToast({
      title: 'hello world',
      icon: 'success'
    })
  },
  showModal() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showLoading() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showActionSheet() {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  }

})