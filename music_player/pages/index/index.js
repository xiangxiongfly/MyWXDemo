// pages/demo/music_player/music_player.js

function formatTime(time) {
  let minute = Math.floor(time / 60) % 60
  let second = Math.floor(time) % 60
  return (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second)
}

Page({
  data: {
    item: 0, // 第几页
    tab: 0, // 第几个tab
    state: "running",
    playIndex: 0,
    play: { // 播放信息
      currentTime: "00:00",
      duration: "00:00",
      percent: 0,
      title: "",
      singer: "",
      coverImgUrl: "/images/cover.jpg"
    },
    playList: [{ // 播放列表
      id: 1,
      title: "祝你生日快乐",
      singer: "小明",
      src: "http://127.0.0.1:3000/1.mp3",
      coverImgUrl: "/images/cover.jpg"
    }, {
      id: 2,
      title: "西游记",
      singer: "小白",
      src: "http://127.0.0.1:3000/2.mp3",
      coverImgUrl: "/images/cover.jpg"
    }, {
      id: 3,
      title: "水浒传",
      singer: "小黑",
      src: "http://127.0.0.1:3000/3.mp3",
      coverImgUrl: "/images/cover.jpg"
    }]
  },
  audioBam: null,
  /////////////////////
  onReady() {
    this.audioBam = wx.getBackgroundAudioManager()
    this.setMusic(0)
    // 播放失败
    this.audioBam.onError(() => {
      console.log("播放失败：" + this.audioBam.src);
    })
    // 播放结束，自动跳转下一首
    this.audioBam.onEnded(() => {
      this.next()
    })
    let updateTime = 0
    this.audioBam.onTimeUpdate(() => {
      let currentTime = parseInt(this.audioBam.currentTime)
      if (!this.sliderChangeLock && currentTime != updateTime) {
        updateTime = currentTime
        this.setData({
          'play.duration': formatTime(this.audioBam.duration || 0),
          'play.currentTime': formatTime(currentTime),
          'play.precent': currentTime / this.audioBam.duration * 100
        })
      }
    })
  },
  /////////////////////
  changeItem(e) {
    this.setData({
      tab: e.target.dataset.item
    })
  },
  changeTab(e) {
    this.setData({
      tab: e.detail.current
    })
  },
  // 设置第几首音乐
  setMusic(index) {
    let music = this.data.playList[index]
    this.audioBam.src = music.src
    this.audioBam.title = music.title
    this.setData({
      playIndex: index,
      "play.title": music.title,
      "play.singer": music.singer,
      "play.coverImgUrl": music.coverImgUrl,
      "play.currentTime": "00:00",
      "play.duration": "00:00",
      "play.percent": 0,
      state: "running"
    })
  },
  // 播放
  play() {
    this.audioBam.play()
    this.setData({
      state: "running"
    })
  },
  // 停止
  pause() {
    this.audioBam.pause()
    this.setData({
      state: "paused"
    })
  },
  // 下一首
  next() {
    let index = this.data.playIndex >= this.data.playList.length - 1 ? 0 : this.data.playIndex + 1
    this.setMusic(index)
  },
  sliderChangeLock: false,
  // 拖拽中
  sliderChanging(e) {
    let second = e.detail.value * this.audioBam.duration / 100
    this.sliderChangeLock = true
    this.setData({
      'play.currentTime': formatTime(second)
    })
  },
  // 拖拽结束
  sliderChange(e) {
    let second = e.detail.value * this.audioBam.duration / 100
    this.audioBam.seek(second)
    setTimeout(() => {
      this.sliderChangeLock = false
    }, 1000)
  },
  change(e) {
    this.setMusic(e.currentTarget.dataset.index)
  },
})