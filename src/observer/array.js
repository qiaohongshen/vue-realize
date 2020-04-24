// 重写数组7个方法 push shift unshift pop reverse sort splice
const oldArrayMethods = Array.prototype

// value.__proto__ = arrayMethods
// arrayMethods.__proto__ = oldArrayMethods

export const arrayMethods = Object.create(oldArrayMethods)

const methods = ['push', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'splice']

methods.forEach(method => {
  arrayMethods[method] = function (...args) {
    return oldArrayMethods[method].apply(this, args)
  } 
})