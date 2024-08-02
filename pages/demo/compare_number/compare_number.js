// pages/demo/compare_number/compare_number.js
Page({
  data: {
    reuslt: ""
  },
  num1: 0,
  num2: 0,
  num1Input: function (e) {
    this.num1 = Number(e.detail.value)
  },
  num2Input: function (e) {
    this.num2 = Number(e.detail.value)
  },
  bindCompare() {
    let str = "";
    if (this.num1 > this.num2) {
      str = "第一个数大"
    } else if (this.num1 < this.num2) {
      str = "第二个数大"
    } else {
      str = "相等"
    }
    console.log(str);
    this.setData({
      result: str
    })
  }
})