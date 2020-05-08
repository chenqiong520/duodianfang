import Vue from 'vue'
import meta from './metadata.json'

const tool = {}
const metadata = {
  getText (name, value) {
    if (value === 'null') return '请选择'
    const data = metadata[name]
    if (!data) return ''
    let result = ''
    data.forEach((e) => {
      if (e.value === value) result = e.label
    })
    return result
  },
  getValue (name, label) {
    const data = metadata[name]
    if (!data) return ''
    let result = ''
    data.forEach((e) => {
      if (e.label === label) result = e.value
    })
    return result
  },
  getList (name) {
    const data = metadata[name]
    let result = []
    if (!data) return []
    data.forEach((e) => {
      result.push(e.label)
    })
    return result
  }
}
tool['metadata'] = Object.assign(metadata, meta)
// 日期格式化
tool['formatDate'] = (date, format) => {
  if (!date) return
  const paddNum = function (num) {
    num += ''
    return num.replace(/^(\d)$/, '0$1')
  }
  // 指定格式字符
  const cfg = {
    yyyy: date.getFullYear(),
    yy: date.getFullYear().toString().substring(2),
    M: date.getMonth() + 1,
    MM: paddNum(date.getMonth() + 1),
    d: date.getDate(),
    dd: paddNum(date.getDate()),
    hh: paddNum(date.getHours()),
    mm: paddNum(date.getMinutes()),
    ss: paddNum(date.getSeconds())
  }
  format || (format = 'yyyy-MM-dd hh:mm:ss')
  return format.replace(/([a-z])(\1)*/ig, function (m) {
    return cfg[m]
  })
}

Vue.prototype.$tools = tool
export default tool
