Page({
  data: {
    imgUrl: "/images/guest.png",
    tempFilePath: null
  },
  uploadFileUrl: null,
  changeImg: function () {
    wx.chooseMedia({
      count: 1,
      mediaType: ["image"],
      sourceType: ["album", "camera"],
      success: res => {
        let tempFilePath = res.tempFiles[0].tempFilePath
        this.setData({
          tempFilePath: tempFilePath,
          imgUrl: tempFilePath
        })
      }
    })
  },
  upload: function () {
    if (!this.data.tempFilePath) {
      wx.showToast({
        title: '请先更改头像',
        icon: "none",
        duration: 2000
      })
      return
    }
    wx.uploadFile({
      filePath: this.data.tempFilePath,
      name: 'image',
      url: 'http://127.0.0.1:3000/upload',
      success: res => {
        this.uploadFileUrl = JSON.parse(res.data).file
        console.log("上传成功：" + this.uploadFileUrl);
      }
    })
  },
  download: function () {
    if (!this.uploadFileUrl) {
      wx.showToast({
        title: '请先上传头像后，再做下载操作',
        icon: "none",
        duration: 2000
      })
      return
    }
    wx.showLoading({
      title: '正在下载....',
    })
    wx.downloadFile({
      url: this.uploadFileUrl,
      success: res => {
        console.log("下载完成");
        wx.previewImage({
          urls: [res.tempFilePath],
        })
      },
      complete: res => {
        wx.hideLoading()
      }
    })

  }

})