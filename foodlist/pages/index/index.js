Page({
  data: {
    shopList: []
  },
  listData: {
    page: 1, // 第几页 
    pageSize: 10, // 页面几条数据
    total: 0 // 总数
  },
  isLoading: false,
  onLoad: function () {
    this.getShopList()
  },
  onReachBottom: function () {
    if (this.listData.page * this.listData.pageSize >= this.listData.total) {
      wx.showToast({
        title: '数据加载完毕',
        icon: "none"
      })
      return
    }
    if (this.isLoading) {
      return
    }
    this.listData.page++
    this.getShopList()
  },
  onPullDownRefresh: function () {
    this.setData({
      shopList: []
    })
    this.listData.page = 1,
      this.listData, total = 0
    this.getShopList(() => {
      wx.stopPullDownRefresh()
    })
  },
  getShopList(callback) {
    this.isLoading = true
    wx.showLoading({
      title: '数据加载中',
    })
    wx.request({
      url: "http://127.0.0.1:3000/data",
      method: "GET",
      data: {
        page: this.listData.page,
        pageSize: this.listData.pageSize
      },
      success: res => {
        this.setData({
          shopList: [...this.data.shopList, ...res.data]
        })
        this.listData.total = res.header["X-Total-Count"] - 0
      },
      complete: () => {
        this.isLoading = false
        wx.hideLoading()
        callback && callback()
      }
    })
  }
})