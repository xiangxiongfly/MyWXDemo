// 将角度转换为弧度
const D6 = degreesToRadians(6)
const D30 = degreesToRadians(30)
const D90 = degreesToRadians(90)

/** 角度转弧度 */
function degreesToRadians(degrees) {
  return degrees * Math.PI / 180
}

/**
 * 绘制表盘 
 */
function drawDial(ctx, radius) {
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
    ctx.moveTo(radius, 0)
    ctx.lineTo(radius - 15, 0)
    ctx.stroke()
  }
  // 绘制小刻度
  ctx.lineWidth = "1"
  for (let i = 0; i < 60; i++) {
    ctx.rotate(D6)
    ctx.beginPath()
    ctx.moveTo(radius, 0)
    ctx.lineTo(radius - 10, 0)
    ctx.stroke()
  }
  // 绘制数字
  ctx.font = "22px sans-serif"
  ctx.textBaseline = "middle" // 文字垂直居中
  let r = radius - 30 // 文字距离中心半径
  for (let i = 1; i <= 12; i++) {
    let x = r * Math.cos(D30 * i - D90)
    let y = r * Math.sin(D30 * i - D90)
    if (i > 10) {
      ctx.fillText(i, x - 12, y) // 绘制11、12
    } else {
      ctx.fillText(i, x - 6, y) // 绘制1~10
    }
  }
}

/** 获取时分秒 */
function getTime() {
  let t = new Date()
  let h = t.getHours()
  let m = t.getMinutes()
  let s = t.getSeconds()
  h = h > 12 ? h - 12 : h // 转为12进制
  return {
    h,
    m,
    s
  }
}

/**
 *  绘制指针
 */
function drawPointer(ctx, radius) {
  let {
    h,
    m,
    s
  } = getTime()
  ctx.rotate(-D90) // 开始时间指向12点
  // 绘制时针
  ctx.save()
  ctx.rotate(D30 * (h + m / 60 + s / 3600))
  ctx.lineWidth = "6"
  ctx.beginPath()
  ctx.moveTo(-20, 0)
  ctx.lineTo(radius / 2.6, 0)
  ctx.stroke()
  ctx.restore()
  // 绘制分针
  ctx.save()
  ctx.rotate(D6 * (m + s / 60))
  ctx.lineWidth = "4"
  ctx.beginPath()
  ctx.moveTo(-20, 0)
  ctx.lineTo(radius / 1.8, 0)
  ctx.stroke()
  ctx.restore()
  // 绘制秒针
  ctx.save()
  ctx.rotate(D6 * s)
  ctx.lineWidth = "2"
  ctx.strokeStyle = "red"
  ctx.beginPath()
  ctx.moveTo(-20, 0)
  ctx.lineTo(radius / 1.6, 0)
  ctx.stroke()
  ctx.restore()
}

function drawClock(canvas) {
  const ctx = canvas.getContext("2d")
  let radius = canvas.width / 2 - 30
  return () => {
    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // 设置坐标轴原点为画布中心点
    ctx.translate(canvas.width / 2, canvas.height / 2)
    // 绘制表盘
    drawDial(ctx, radius)
    // 绘制指针
    drawPointer(ctx, radius)
    // 恢复画布
    ctx.rotate(D90)
    ctx.translate(-canvas.width / 2, -canvas.height / 2)
    ctx.restore()
  }
}

module.exports = drawClock