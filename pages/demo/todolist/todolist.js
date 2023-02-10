// pages/demo/todolist/todolist.js
Page({

  data: {
    text: "",
    commentList: []
  },
  handleInput(e) {
    this.setData({
      text: e.detail.value
    })
  },
  handleAdd() {
    if (this.data.text === "") {
      return
    }
    this.data.commentList.push(this.data.text)
    this.setData({
      commentList: this.data.commentList,
      text: ""
    })
  },
  handleDelete(e) {
    let index = e.currentTarget.dataset.index
    this.data.commentList.splice(index, 1)
    this.setData({
      commentList: this.data.commentList
    })
  }
})