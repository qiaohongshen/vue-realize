import { arrayMethods } from './array'
import { isObject } from '../util/index'

class Obserber {
  constructor (value) {
    // 如果层级太多 需要递归去解析对象中的属性 依次增加get/set

    if (Array.isArray(value)) {
      // 排除对数组索引的监测（1.性能问题 2.很少对索引进行操作 ） 重写数组方法
      value.__proto__ = arrayMethods
      this.observerArray(value)
    } else {
      // 进行对象的监测
      this.walk(value)
    }
  }

  obserberArray (value) {
    for (let index = 0; index < array.length; index++) {
      observe(value[index])
    }
  }

  walk (data) {
    let keys = Object.keys(data)

    keys.forEach(key => {
      defineReactive(data, key, data[key])
    })

    // for (let index = 0; index < keys.length; index++) {
    //   defineReactive(data, keys[index], data[key])
    // }
  }
}

function defineReactive (data, key, value) {
  observe(value) // 递归实现深度监测
  Object.defineProperty(data, key, {
    get () {
      return value
    },
    set (newValue) {
      if (value === newValue) return
      console.log('changed')
      observe(newValue)
      value = newValue
    }
  })
}


export function observe (data) {
  if (!isObject(data)) return
  // 观测数据
  return new Obserber(data)
}