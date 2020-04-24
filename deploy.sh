#!/bin/sh

# 官网移动端自动部署脚本 简化版

# 1. 拉取指定分支的代码
git clone git@git.gupaoedu.com:yuan/official-web-moblie.git
cd official-web-moblie
git checkout -b release origin/release

# 2. 安装相关依赖
cnpm i

# 生产环境
if [ $1 = 'production' ]; then 
    # 3. 执行构建相关命令
    NODE_ENV=production npm run generate

    # 4. 打包静态文件并发送到cdn服务器
    cd .nuxt/dist/client
    zip -r official-web-moblie-cdn.zip ./*
    scp official-web-moblie-cdn.zip root@123.16.23.98:/home/official-web-moblie/
    unzip -o official-web-moblie.zip
else # 测试环境
    # 3. 执行构建相关命令
    NODE_ENV=pre-production npm run generate 
fi

# 5. 打包构建好的目录并发送zip包到部署服务器
cd dist
zip -r official-web-moblie.zip ./*
scp official-web-moblie.zip root@123.16.23.98:/home/www/

# 6. 在部署服务器上解压zip包
unzip -o -d /home/www/ official-web-moblie.zip