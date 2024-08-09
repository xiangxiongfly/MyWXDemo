const drawClock = require("../../utils/drawClock")

Page({
  data: {

  },
  onReady: function () {
    wx.createSelectorQuery()
      .select("#myCanvas")
      .fields({
        node: true,
        size: true
      })
      .exec(res => {
        console.log("exec===========");
        const canvas = res[0].node
        canvas.width = res[0].width
        canvas.height = res[0].height
        const draw = drawClock(canvas)
        draw()
      })
  }
})