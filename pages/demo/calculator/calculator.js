// pages/demo/calculator/calculator.js
const calc = require("./utils/calc.js")
Page({
  data: {
    sub: "",
    num: "0"
  },
  numChangeFlag: false, // 
  execFlag: false, // 是否执行=
  resultFlag: false, // 是否获取结果
  numBtn(e) {
    let num = e.target.dataset.val
    console.log("numBtn: " + num);
    if (this.resultFlag) {
      this.resetBtn()
    }
    if (this.numChangeFlag) {
      this.numChangeFlag = false
      this.execFlag = true // 代表已输入第2个数字
      this.data.num = '0' // 将num设为0，避免数字进行拼接
      calc.changeNum2() // 将target切换到第2个数字
    }
    // 设置输入的数字
    calc.setNum(this.data.num === "0" ? num : this.data.num + num)
    // 在页面中显示输入的数字
    this.setData({
      num: calc.getNum()
    })
  },
  opBtn(e) {
    let op = e.target.dataset.val
    console.log("opBtn: " + op);
    calc.op = op
    this.numChangeFlag = true
    // 判断是否已经输入第2个数字
    if (this.execFlag) {
      this.execFlag = false
      // 已经输入第2个数字，再判断当前是否为计算结果状态
      if (this.resultFlag) {
        // 当前是计算结果状态，需要在计算结果的基础上计算
        this.resultFlag = false
      } else {
        // 连续计算，将计算结果作为第1个数字
        calc.num1 = calc.getResult()
      }
    }
    this.setData({
      sub: calc.num1 + ' ' + calc.op + ' ',
      num: calc.num1
    })
  },
  execBtn(e) {
    console.log("等于");
    if (this.numChangeFlag) {
      this.numChangeFlag = false
      this.execFlag = true
      calc.num2 = this.data.num
    }
    // 如果已经输入第2个数字，执行计算操作
    if (this.execFlag) {
      this.resultFlag = true
      var result = calc.getResult()
      console.log("计算结果： " + result);
      this.setData({
        sub: calc.num1 + ' ' + calc.op + ' ' + calc.num2 + ' = ',
        num: result
      })
      calc.num1 = result
    }
  },
  resetBtn(e) {
    calc.reset()
    this.execFlag = false
    this.numChangeFlag = false
    this.resultFlag = false
    this.setData({
      sub: "",
      num: "0"
    })
  },
  dotBtn(e) {
    if (this.resultFlag) {
      this.resetBtn()
    }
    if (this.numChangeFlag) {
      this.numChangeFlag = false
      calc.setNum("0.")
    } else if (this.data.num.indexOf(".") < 0) {
      calc.setNum(this.data.num + ".")
    }
    this.setData({
      num: calc.getNum()
    })
  },
  delBtn(e) {
    if (this.resultFlag) {
      this.resetBtn()
      return
    }
    let num = this.data.num.substr(0, this.data.num.length - 1)
    calc.setNum(num === "" || num === "-" || num === "-0." ? "0" : num)
    this.setData({
      num: calc.getNum()
    })
  },
  negBtn(e) {
    if (this.data.num === "0" || this.data.num === "0.") {
      return
    }
    if (this.resultFlag) {
      this.resetBtn()
    } else if (this.data.num.indexOf("-") < 0) {
      calc.setNum("-" + this.data.num)
    } else {
      calc.setNum(this.data.num.substr(1))
    }
    this.setData({
      num: calc.getNum()
    })



  }


})