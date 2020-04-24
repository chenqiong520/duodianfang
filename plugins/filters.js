import Vue from 'vue'

/**
 * 文本超出长度添加省略号
 * @param {Number} max 最多显示的字符串
 */
function addEllipsis(value, max) {
  if (!value) return ''
  if (value.length <= max) return value
  return value.slice(0, max) + '...'
}

const filters = {
  addEllipsis
}

// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})