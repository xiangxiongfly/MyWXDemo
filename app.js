// app.js
App({
  // 生命周期回调——监听小程序初始化。
  onLaunch(options) {
    console.log("App onLaunch");
  },
  // 生命周期回调——监听小程序初始化。
  onShow(options) {
    console.log("App onShow");
  },
  // 生命周期回调——监听小程序切后台。
  onHide() {
    console.log("App onHide");
  },
  // 错误监听函数。
  onError(msg) {
    console.log("App onError");
  },
  globalData: {
    info: "这是全局数据",
    imagePath:"/images"
  }
})