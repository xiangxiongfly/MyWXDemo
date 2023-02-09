// pages/elements/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioData: {
      src: "../../../audios/audio1.mp3",
      name: "我曾把完整的镜子打碎-柏松",
      author: "许嵩",
      poster: "../../../images/T002R300x300M000003rsKF44GyaSk.webp"
    },
    currentTime: 0,
    totalTime: 0,
    audioAction: {
      method: "pause"
    }
  },
  onUpdate(e) {
    this.setData({
      currentTime: parseInt(e.detail.currentTime),
      totalTime: parseInt(e.detail.duration)
    })
  },
  onPlay(e) {
    console.log("播放");
  },
  onPause(e) {
    console.log("暂停");
  },
  onEnd(e) {
    console.log("结束");
  },
  clickPlayAudio() {
    console.log("点击播放");
    this.setData({
      audioAction: {
        method: "play"
      }
    })
  },
  clickPauseAudio() {
    console.log("点击暂停");
    this.setData({
      audioAction: {
        method: "pause"
      }
    })
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

  }
})