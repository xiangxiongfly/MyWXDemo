// pages/elements/scrollview/scrollview.js
Page({
  data: {
    isRefresh: false
  },
  //滚动监听
  onScroll(e) {
    // console.log(e);
    // console.log(`
    // scroll-view宽高：${e.detail.scrollWidth}/${e.detail.scrollHeight}，
    // 滚动距离：${e.detail.scrollTop}
    // `);
  },
  //滑动到顶部
  scrollToUpper(e) {
    console.log("滑动到顶部");
  },
  //滑动到底部
  scrollToLower(e) {
    console.log("滑动到底部");
  },
  //下拉刷新
  onRefresh() {
    console.log("下拉刷新了");
    setTimeout(() => {
      this.setData({
        isRefresh: false
      })
    }, 5000)
  }


})