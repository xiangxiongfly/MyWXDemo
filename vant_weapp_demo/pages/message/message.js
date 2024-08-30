// pages/message/message.js
const app = getApp()
Page({
  onShow() {
    this.getTabBar().setData({
      active: "message"
    })
  }
})