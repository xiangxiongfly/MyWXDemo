Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titleList: {
      type: Array,
      value: []
    },
    currentIndex: {
      type: Number,
      value: 0
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(e) {
      let index = e.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      //触发父组件的事件
      this.triggerEvent("ParentEvent", index)
    }
  },

})