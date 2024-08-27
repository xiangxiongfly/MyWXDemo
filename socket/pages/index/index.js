Page({
  data: {
    content: "",
    list: [],
    lastId: ""
  },
  message: "",
  ws: null,
  onLoad: function () {
    const ws = wx.connectSocket({
      url: 'ws://127.0.0.1:3000',
      success: res => {
        console.log("连接成功：" + res);
      },
      fail: err => {
        console.log("连接失败：" + err);
      }
    })
    ws.onMessage(msg => {
      console.log("接收消息：" + msg.data);
      let data = JSON.parse(msg.data)
      let list = this.data.list
      let lastId = list.length
      list.push({
        id: lastId,
        content: data.content,
        role: "server"
      })
      this.setData({
        list,
        lastId
      })
    })
    ws.onClose(res => {
      console.log("close");
    })
    this.ws = ws
  },
  onUnload: function () {
    this.ws.close()
  },
  input: function (e) {
    this.message = e.detail.value
  },
  send: function (e) {
    if (!this.message) {
      wx.showToast({
        title: "消息不能为空",
        icon: "none",
        duration: 2000
      })
      return
    }
    this.ws.send({
      data: this.message
    })
    const list = this.data.list
    const lastId = list.length
    list.push({
      id: lastId,
      content: this.message,
      role: "me"
    })
    this.setData({
      list,
      lastId,
      content: ""
    })
    this.message = ""
  }
})