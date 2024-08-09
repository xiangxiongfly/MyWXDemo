let sec = 0
let timer = null
let pause = false // 是否停止播放
let callback = null

function formatTime(value) {
  let h = parseInt(value / 60 / 60 % 24)
  h = h < 10 ? "0" + h : h
  let m = parseInt(value / 60 % 60)
  m = m < 10 ? "0" + m : m
  let s = parseInt(value % 60)
  s = s < 10 ? "0" + s : s
  return h + ":" + m + ":" + s
}

function createTimer() {
  return setInterval(() => {
    if (!pause) {
      sec++
    }
    callback && callback(formatTime(sec))
  }, 1000)
}

module.exports = {
  onTimeUpdate(cb) {
    callback = cb
  },
  start() {
    if (pause) {
      pause = false
    }
    if (!timer) {
      timer = createTimer()
    }
  },
  pause() {
    pause = true
  },
  reset() {
    sec = 0
    pause = false
    clearInterval(timer)
    timer = null
  }
}