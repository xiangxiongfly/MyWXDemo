// 将角度转换为弧度
const D6 = degreesToRadians(6)
const D30 = degreesToRadians(30)
const D90 = degreesToRadians(90)

/** 角度转弧度 */
function degreesToRadians(degrees) {
  return degrees * Math.PI / 180
}

/**
 *  绘制时钟
 */
function drawClock(canvas) {
  console.log("drawClock");
  const ctx = canvas.getContext("2d")
  let radius = canvas.width / 2 - 30
  return () => {
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // 将坐标原点移动到画布中心
    ctx.translate(canvas.width / 2, canvas.height / 2)
    // 绘制表盘
    drawDial(ctx, radius)
    // 绘制指针
    drawHand(ctx, radius)
  }
}

/**
 * 绘制表盘 
 */
function drawDial(ctx, radius) {
  console.log("drawDial");
  // 绘制外层大圆
  ctx.lineWidth = "2"
  ctx.beginPath()
  ctx.arc(0, 0, radius, 0, 2 * Math.PI, true)
  ctx.stroke()
  // 绘制中心圆
  ctx.lineWidth = "1"
  ctx.beginPath()
  ctx.arc(0, 0, 8, 0, 2 * Math.PI, true)
  ctx.stroke()
  // 绘制大刻度
  ctx.lineWidth = "5"
  for (let i = 0; i < 12; i++) {
    ctx.rotate(D30)
    ctx.beginPath()
    ctx.moveTo(radius,0)
    ctx.lineTo(radius-15,0)
    ctx.stroke()
  }
  // 绘制小刻度
  


}

/**
 *  绘制指针
 */
function drawHand(ctx, radius) {

}

module.exports = drawClock