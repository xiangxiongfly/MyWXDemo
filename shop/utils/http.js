const config = require("./config.js")

function fail(title, callback) {
  wx.hideLoading()
  wx.showModal({
    title: title,
    confirmText: "重试",
    success: res => {
      if (res.confirm) {
        callback()
      }
    }
  })
}

function request(url, data, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.baseUrl + url,
      method: method,
      data: data,
      success: res => {
        console.log(res);
        if (res.statusCode != 200) {
          fail("服务器异常", reject)
          return
        }
        if (res.data.code === 0) {
          fail(res.data.msg, reject)
          return
        }
        resolve(res.data)
      },
      fail: () => {
        fail("加载数据失败", reject)
      }
    })
  })
}

function get(url, data) {
  return request(url, data, "GET")
}

function post(url, data) {
  return request(url, data, "POST")
}

module.exports = {
  get,
  post
}