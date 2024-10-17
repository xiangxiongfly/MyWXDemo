Component({
  properties: {
    propName: {
      type: String,
      value: "",
    },
    propAge: {
      type: Number,
      value: 0,
    },
  },
  data: {
    user: { name: "未命名", age: 0 },
  },
  observers: {
    propName: function (newName) {
      this.setData({
        "user.name": newName,
      })
    },
    propAge: function (newAge) {
      this.setData({
        "user.age": newAge,
      })
    },
  },
  methods: {
    sendData() {
      this.triggerEvent("myevent", "hello world " + Date.now())
    },
  },
})
