const behavior = Behavior({
  properties: {
    label: {
      type: String,
      value: "hell world",
    },
  },
  data: {
    name: "张三",
    age: 28,
  },
  methods: {
    updateName() {
      this.setData({
        name: "李四",
      })
    },
  },
})

export default behavior
