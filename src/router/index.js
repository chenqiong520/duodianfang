import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'//首页导航
import newhouse from '@/pages/newhouse'//新房
import oldhouse from '@/pages/oldhouse'//二手房
import storehouse from '@/pages/storehouse'//商铺写字楼
import newshouse from '@/pages/newshouse'//百房新闻
import videohouse from '@/pages/videohouse'//百房视频
import watchhouse from '@/pages/watchhouse'//看房报名
import reply from '@/pages/reply'//问答
import register from '@/pages/register'//注册
import login from '@/pages/login'//登录


import map from '@/pages/map/map'//地图
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {//首页导航
      path: '/',
      redirect: '/index'
    },
    {//首页导航
      path: '/index',
      name: 'index',
      component: index
    },
    {//新房
      path: '/newhouse',
      name: 'newhouse',
      component: newhouse
    },
    {//二手房
      path: '/oldhouse',
      name: 'oldhouse',
      component: oldhouse
    },
    {//商铺写字楼
      path: '/storehouse',
      name: 'storehouse',
      component: storehouse
    },
    {//百房新闻
      path: '/newshouse',
      name: 'newshouse',
      component: newshouse
    },
    {//百房视频
      path: '/videohouse',
      name: 'videohouse',
      component: videohouse
    },
    {//看房报名
      path: '/watchhouse',
      name: 'watchhouse',
      component: watchhouse
    },
    {//问答
      path: '/reply',
      name: 'reply',
      component: reply
    },
    {//注册
      path: '/register',
      name: 'register',
      component: register
    },
     {//登录
      path: '/login',
      name: 'login',
      component: login
    },
    {//地图
     path: '/map',
     name: 'map',
     component: map
   }
  ]
})
