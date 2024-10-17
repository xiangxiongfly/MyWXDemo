Component({
  data: {
    num: 1,
    count: 10,
    arr: [1, 2, 3],
    user: { name: "小明", age: 18 },
  },
  observers: {
    // 监听数据
    num: function (newNumber) {
      console.log("监听num " + newNumber)
    },
    // 监听多个数据
    "num,count": function (newNum, newCount) {
      console.log(`监听多个数据 ${newNum}  ${newCount}`)
    },
    // 监听数组
    "arr[0]": function (newVal) {
      console.log(`监听数组 ${newVal}`)
    },
    // 监听对象
    "user.age": function (newAge) {
      console.log(`监听对象属性 ${newAge}`)
    },
    // 监听所有属性变化，使用通配符
    "user.**": function (obj) {
      console.log(`监听所有属性变化 ${obj.name} ${obj.age}`)
    },
  },
  methods: {
    updateData() {
      this.setData({
        num: this.data.num + 1,
        count: this.data.count + 1,
        "arr[0]": this.data.arr[0] + 1,
        "user.age": this.data.user.age + 1,
        "user.name": this.data.user.name + this.data.num,
      })
    },
  },
})
