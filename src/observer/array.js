// 重写数组7个方法 push shift unshift pop reverse sort splice
const oldArrayMethods = Array.prototype

// value.__proto__ = arrayMethods
// arrayMethods.__proto__ = oldArrayMethods

export const arrayMethods = Object.create(oldArrayMethods)

const methods = ['push', 'pop', 'unshift', 'shift', 'reverse', 'sort', 'splice']

methods.forEach(method => {
  arrayMethods[method] = function (...args) {
    const result =  oldArrayMethods[method].apply(this, args)

    let inserted
    let observed = this.__ob__
    switch (method) {
      case 'push':
      case 'unshift': 
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
      default:
        break
    }
    // 观测数组新增属性
    if (inserted) observed.observerArray(inserted)
    
    return result
  }
})