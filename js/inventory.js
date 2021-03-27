export default class Inventory {

  constructor(maxSize = 5) {
    this.maxSize = maxSize
    this.items = []
  } 

  add(item) {
    if (this.items.length === this.maxSize) return
    if (this.items.some(i => i._rid === item._rid)) return

    this.items.push(item)
    return true
  }

  remove(item) {
    const index = this.items.findIndex(i => i._rid === item._rid)
    if (index === -1) return
    this.items.splice(index, 1)
  }

  has(itemType, cb) {
    return this.items.some(item => {
      return item.constructor === itemType && (cb ? cb(item) : true)
    })
  }

}