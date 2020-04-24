# official-web-moblie

> My awe-inspiring Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

## 手动部署

```bash
# 部署到测试服务器
# 1. 在dev分支下执行命令
$ cnpm i
$ NODE_ENV=pre-production npm run generate

# 2. 将dist下的文件拷贝到测试服务器地址


# 部署到生产服务器
# 1. 执行编译命令
$ NODE_ENV=production npm run generate

# 2. 将dist下的文件拷贝到生产服务器地址

# 3. 将.nuxt/dist/client下的文件拷贝到CDN服务器的officail-web-moblie目录下

# page/index.vue  --首页
# page/newhouse/index.vue  --新房
# page/oldhouse/index.vue  --二手房
# page/storehouse/index.vue  --商铺写字楼
# page/newshouse/index.vue  --百房新闻
# page/videohouse/index.vue  --百房视频
# page/watchhouse/index.vue  --看房报名

```