const app = getApp()
Page({
  onShow() {
    this.getTabBar().setData({
      active: "contact"
    })
  }
})