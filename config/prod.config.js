module.exports = {

  head: {
    script: [{
      src: '//tajs.qq.com/stats?sId=65943401',
      charset: "UTF-8",
      body: true
    }, {
      // <!-- 官网移动端 -->
      innerHTML: `var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?e1c38407b8eb0578e8f79991a2f74318";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();`,
      type: 'text/javascript',
      charset: 'utf-8',
      body: true
    }],
    __dangerouslyDisableSanitizers: ['script'],
  },

  build: {
    // cdn 文件设置
    // publicPath: 'https://cdn.gupaoedu.com/official-web-mobile',
  }
}
