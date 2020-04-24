module.exports = {
  mode: 'universal',
  server: {
    port: 3000, // default: 3000
    host: 'localhost', // default: localhost
  },

  /*
   ** 多页面的head
   */
  head: {
    title: '多点房',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: '"'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
  },
  router: {
    // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    middleware: ['redirect']
  },
  /*
   ** 加载条颜色
   */
  loading: {
    color: 'rgba(253, 85, 58, 1)'
  },

  /*
   ** 全局css
   */
  css: [
    // '@/assets/css/reset.css',
     'swiper/dist/css/swiper.css',
    'element-ui/lib/theme-chalk/index.css',
  ],

  /*
   ** 第三方插件
   */
  plugins: [{
    src: '~/plugins/element-ui.js',
    ssr: false
  }, {
    src: '~/plugins/filters.js',
    ssr: false
  }, {
    src: '~/plugins/cipboard.js',
    ssr: false
  },
  { src: '~/plugins/swiper.js', 
    ssr: false
 }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    retry: {
      retries: 3
    },
    //开发模式下开启debug
    debug: process.env.NODE_ENV == "production" ? false : true,
    //设置不同环境的请求地址
    browserBaseURL: process.env.NODE_ENV === "production" ?
      '/' : (process.env.NODE_ENV === "pre-production" && "http://192.168.8.122/manageapi"),
    proxy: true
  },

  /**
   * 打包配置
   */
  build: {
    extend(config, ctx) {
      // 编译时进行eslint检查
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }

      // 图片压缩
      config.module.rules.push({
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
            mozjpeg: {
              progressive: true,
              quality: 65
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: '65-90',
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            // the webp option will enable WEBP
            // webp: {
            //   quality: 75
            // }
          }
        }]
      })
    },

    postcss: {
    },

    vendor: [
      'axios'
    ]
  },

  generate: {
    subFolders: true
  }
}
