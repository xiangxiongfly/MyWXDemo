// pages/food_list/food_list.js
Page({
  data: {
    shopList: [],
  },
  listData: {
    page: 1, // 第几页
    pageSize = 10, // 每页几条数据
    total: 0 //数据总数
  },
  onLoad: function () {
    this.getShopList()
  },
  getShopList() {
    wx.showLoading({
      title: "数据加载中"
    })
    wx.request({
      url: "http://127.0.0.1:3000/data",
      method: "GET",
      data: {
        page: this.listData.page,
        pageSize: this.listData.pageSize
      },
      success: function (res) {
        console.log("请求成功：" + res);
        this.setData({
          shopList: [...this.data.shopList, ...res.data]
        })
        this.listData.total = res.header["X-Total-Count"] - 0
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  }
})