Page({
  data: { msg: "123" },
  getData(event) {
    this.setData({
      msg: event.detail,
    })
  },
  getChild() {
    const child = this.selectComponent("#child")
    console.log(child.data.user)
  },
  onLoad() {
    console.log("Page onLoad()")
  },
  onShow() {
    console.log("Page onShow()")
  },
  onHide() {
    console.log("Page onHide()")
  },
  onUnload() {
    console.log("Page onUnload()")
  },
})
