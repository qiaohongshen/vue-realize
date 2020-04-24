export function isObject (data) {
  return typeof data === 'object' && data !== null
} 

export function defineObserved (data, key, value) {
  Object.defineProperty(data, key, {
    enumerable: false,
    configurable: false,
    value
  })
}