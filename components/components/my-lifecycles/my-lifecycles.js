Component({
  lifetimes: {
    created() {
      console.log("Component created")
    },
    attached() {
      console.log("Component attached")
    },
    ready() {
      console.log("Component ready")
    },
    moved() {
      console.log("Component moved")
    },
    detached() {
      console.log("Component detached")
    },
  },
  pageLifetimes: {
    show() {
      console.log("Page show()")
    },
    hide() {
      console.log("Page hide()")
    },
  },
})
