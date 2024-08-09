const timer = require("../../utils/timer")

let rec = wx.getRecorderManager()
let audioCtx = wx.createInnerAudioContext()
let tempFilePath = null
let onStopCallback = null
rec.onStop(res => {
  tempFilePath = res.tempFilePath
  let duration = res.duration
  let size = res.fileSize
  console.log("录音停止：" + tempFilePath + " " + duration + " " + size)
  onStopCallback && onStopCallback(tempFilePath)
})

Page({
  data: {
    time: "00:00:00", // 录音时长
    state: 0 // 录音状态，0 停止，1 开始，2 暂停
  },
  rec: function () {
    switch (this.data.state) {
      case 0:
        // 停止->开始
        rec.start()
        timer.onTimeUpdate(time => {
          this.setData({
            time
          })
        })
        timer.start()
        this.setData({
          time: "00:00:00",
          state: 1
        })
        break
      case 1:
        // 开始->暂停
        rec.pause()
        timer.pause()
        this.setData({
          state: 2
        })
        break
      case 2:
        // 暂停->开始
        rec.resume()
        timer.start()
        this.setData({
          state: 1
        })
        break
    }
  },
  // 停止录音
  stop: function () {
    console.log("停止录音");
    rec.stop()
    timer.reset()
    this.setData({
      state: 0
    })
  },
  // 播放录音
  play: function () {
    if (this.data.state > 0) {
      // 录音未完成
      onStopCallback = tempFilePath => {
        onStopCallback = null
        audioCtx.src = tempFilePath
        audioCtx.play()
        this.setData({
          time: "播放录音"
        })
      }
      this.stop()
    } else if (tempFilePath) {
      // 录音已完成
      audioCtx.src = tempFilePath
      audioCtx.play()
      this.setData({
        time: "正在播放录音"
      })
    } else {
      // 无录音
      this.setData({
        time: "暂无录音"
      })
    }
  }
})