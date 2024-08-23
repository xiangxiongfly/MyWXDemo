const QQMapWx = require("../../libs/qqmap-wx-jssdk")
const key = "FPGBZ-3GQKH-QY5DF-WRH4V-ZFFJH-ZMB3E"
const qqmapsdk = new QQMapWx({
  key: key
})

Page({
  data: {
    scale: 18, //缩放
    longitude: 0, // 地图中心经度
    latitude: 0, // 地图中心维度
    markers: [] // 标记点
  },
  mapCtx: null,
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap', this)
  },
  onLoad: function () {
    wx.getLocation({
      type: "gcj02",
      success: res => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
  },
  getFood: function (longitude, latitude) {
    qqmapsdk.search({
      keyword: "餐厅",
      location: {
        longitude: longitude,
        latitude: latitude
      },
      success: res => {
        let markers = []
        for (let i in res.data) {
          markers.push({
            iconPath: "/images/food.png",
            id: markers.length,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            width: 30,
            height: 30
          })
        }
        markers.push({
            iconPath: "/images/center.png",
            id: res.data.length,
            latitude: latitude,
            longitude: longitude,
            width: 15,
            height: 40
          }),
          this.setData({
            markers
          })
      },
      fail: (e) => {}
    })
  },
  regionChange: function (e) {
    if (e.type === "end") {
      this.mapCtx.getCenterLocation({
        success: res => {
          this.getFood(res.longitude, res.latitude)
        }
      })
    }
  },
  bannerTap: function () {
    wx.navigateTo({
      url: '/pages/coupon/coupon',
    })
  },
  controlTap: function (e) {
    this.mapCtx.moveToLocation()
  }
})