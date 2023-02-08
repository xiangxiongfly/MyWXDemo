// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "小明",
    age: 18,
    address: "北京市",
    score: 85,
    studentList: [{
        name: "Jake",
        age: 17,
        address: "beijing",
        score: 50
      },
      {
        name: "Tom",
        age: 18,
        address: "shanghai",
        score: 60
      },
      {
        name: "Jane",
        age: 19,
        address: "guangzhou",
        score: 70
      },
      {
        name: "Vame",
        age: 20,
        address: "guangzhou",
        score: 80
      }
    ]
  },
  onClick(event) {
    const {
      msg1,
      msg2
    } = event.currentTarget.dataset
    console.log(msg1, msg2)
  },
  onClick2(e) {
    let name = e.currentTarget.dataset["name"]
    let value = e.currentTarget.dataset.value
    console.log(name, value);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("index onLoad");
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    console.log("index onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("index onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("index onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("index onUnload");
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