Component({
  options: {
    styleIsolation: "shared",
  },
  properties: {
    // 标题
    // 可简写为 label: String
    label: {
      type: String,
      value: "",
    },
    // 文字显示位置
    position: {
      type: String,
      value: "right",
    },
  },
  data: {
    isChecked: false,
  },
  methods: {
    updateChecked() {
      this.setData({
        isChecked: !this.data.isChecked,
      })
      console.log(this.data.isChecked)
    },
  },
})
