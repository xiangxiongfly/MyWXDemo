// pages/elements/checkbox/checkbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [{
        id: 1,
        name: "苹果",
        number: 2,
        price: 20,
        isChecked: false
      },
      {
        id: 2,
        name: "梨子",
        number: 3,
        price: 30,
        isChecked: false
      },
      {
        id: 3,
        name: "草莓",
        number: 4,
        price: 40,
        isChecked: false
      },
      {
        id: 4,
        name: "西瓜",
        number: 5,
        price: 50,
        isChecked: false
      },
      {
        id: 5,
        name: "橘子",
        number: 6,
        price: 60,
        isChecked: false
      }
    ]
  },
  onClick(e) {
    let index = e.currentTarget.dataset.index
    this.data.dataList[index].isChecked = !this.data.dataList[index].isChecked
    this.setData({
      dataList: [...this.data.dataList]
    })
  }
})