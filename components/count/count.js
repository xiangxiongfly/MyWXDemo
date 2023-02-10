Component({
  /**
   * 组件的属性列表
   */
  properties: {
    countNumber: {
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
   * 组件的生命周期
   */
  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached: function () {
      this.intervalId = setInterval(() => {
        if (this.data.countNumber === 0) {
          clearInterval(this.intervalId)
          this.triggerEvent("Event")
          return
        }
        this.setData({
          countNumber: --this.data.countNumber
        })
      }, 1000)
    },
    // 在组件实例被从页面节点树移除时执行
    detached: function () {
      clearInterval(this.intervalId)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})