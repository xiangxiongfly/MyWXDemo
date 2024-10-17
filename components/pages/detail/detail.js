Component({
  properties: {
    name: String,
    age: Number,
  },
  data: {
    name: "",
    age: 0,
  },
  methods: {
    onLoad(options) {
      console.log("data " + this.data)
      console.log("options " + this.options)
      console.log(this.data.name)
      console.log(this.data.age)
      console.log(this.properties.name)
      console.log(this.properties.age)
    },
    updateData() {
      this.setData({
        age: this.data.age + 1,
      })
    },
  },
})
