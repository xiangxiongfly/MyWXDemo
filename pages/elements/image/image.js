Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "../../../images/cat.jpg",
    imageList: [{
        mode: "scaleToFill",
        desciption: "缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素	"
      },
      {
        mode: "aspectFit",
        desciption: "缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。	"
      },
      {
        mode: "aspectFill",
        desciption: "缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。	"
      },
      {
        mode: "widthFix",
        desciption: "缩放模式，宽度不变，高度自动变化，保持原图宽高比不变	"
      },
      {
        mode: "heightFix",
        desciption: "缩放模式，高度不变，宽度自动变化，保持原图宽高比不变	"
      }
    ]
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