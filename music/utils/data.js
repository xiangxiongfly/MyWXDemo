// 推荐列表
function getRecommendList() {
  let recommendList = []
  const count = 7
  for (let i = 0; i < count; i++) {
    recommendList.push({
      title: "山水之间" + i,
      url: "/images/cover.jpg"
    })
  }
  return recommendList
}

// 播放列表
function getPlayList() {
  let playList = []
  playList.push({
    id: 1,
    title: "祝你生日快乐",
    singer: "小明",
    src: "http://127.0.0.1:3000/1.mp3",
    coverImgUrl: "/images/cover.jpg"
  })
  playList.push({
    id: 2,
    title: "西游记",
    singer: "小白",
    src: "http://127.0.0.1:3000/2.mp3",
    coverImgUrl: "/images/cover.jpg"
  })
  playList.push({
    id: 3,
    title: "水浒传",
    singer: "小黑",
    src: "http://127.0.0.1:3000/3.mp3",
    coverImgUrl: "/images/cover.jpg"
  })
  return playList
}

module.exports = {
  getRecommendList,
  getPlayList
}