module.exports = {
  head: {
    link: [
      /**
       * 阿里iconfont
       * 开发时，可使用阿里提供的地址
       * 上线时，替换为下载好的本地字体
       */
      {
        rel: 'stylesheet',
        href: 'http://at.alicdn.com/t/font_1078836_ybeam8zodrs.css'
      }
    ],
  },

  /**
   * 配置开发环境代理
   */
  proxy: [
    [
      '/wwwapi',
      {
        target: 'http://192.168.8.122', // 测试服务器
        changeOrigin: true, // 是否跨域
        pathRewrite: { // 重写path
          '^/wwwapi': '/manageapi/wwwapi' //将 /wwwapi 代替为 /manageapi/wwwapi
        }
      }
    ]
  ]
}
