<template>
  <div>
    <!-- 页面头部展示 -->
    <header class="indexheader">
      <div class="headerinner">
        <el-row :gutter="24" style="height: 60px;">
          <el-col :span="3"  class="myheaderTitle">
            <img src="@/assets/logoheader.png" alt="" width="100%" height="48px" style="margin-top: 7px;">
          </el-col>
          <el-col :span="2"  class="myheaderTitle" >
           
            <el-dropdown trigger="click" @command="handlearea" style="margin-left:15px;margin-top:20px;cursor: pointer;text-align: center;">
              <span class="el-dropdown-link" style="color:#fff;text-align: center;" >
                {{selectArea}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(i,k) in areaList" :key="k" :command="i">{{i.label}}</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="19">
            <el-menu
              @select="handleSelect" 
              :default-active="$route.path"  
              background-color="#8fc320"
              text-color="#fff"
              active-text-color="#ffd04b" 
              mode="horizontal"
            >
              <el-menu-item v-for="(z,j) in heanderlist" :key="j" :index="z.link">{{z.name}}</el-menu-item>
              <el-menu-item index="/register" style="margin-left: 100px;">注册</el-menu-item>
              <el-menu-item index="/map">登录</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      heanderlist: [
        { name: '首页', link: '/index' },
        { name: '新房', link: '/newhouse' },
        { name: '二手房', link: '/oldhouse' },
        { name: '商铺写字楼', link: '/storehouse' },
        { name: '百房新闻', link: '/newshouse' },
        { name: '百房视频', link: '/videohouse' },
        { name: '看房报名', link: '/watchhouse' },
        { name: '问答', link: '/reply' }
      ],
      // activeIndex:'/',
      areaList: [
        { label: '北京', vale: 'beijing' },
        { label: '上海', vale: 'shanghai' },
        { label: '深圳', vale: 'shenzhen' },
        { label: '广州', vale: 'guangzhou' },
        { label: '长沙', vale: 'changsha' },
        { label: '武汉', vale: 'wuhan' },
        { label: '南京', vale: 'nanjing' }
      ],
      selectArea: '北京',

      selectIndex: '/index'
    }
  },
  // mounted(){
  //   this.activeIndex = this.$route.path
  //   console.log(this.$route.path)
  // },
  methods: {
    handleSelect(key, keyPath) {
      if (this.selectIndex !== key) {
        this.$router.push(key)
      }
      this.selectIndex = key
    },
    handlearea(key) {
      this.selectArea = key.label
      // console.log(key)
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.indexheader {
  width: 100vw;
  height: 60px;
  background-color: #8fc320;
}
.headerinner {
  width: 1180px;
  height: 60px;
  margin: 0 auto;
}
.myheaderTitle {
  display: inline-block;
  height: 100%;
  /* width: 100px; */
  text-align: justify;
  vertical-align: top;
}
.myheaderTitle:after {
  display: inline-block;
  width: 100%;
  content: '';
  height: 0;
}
.el-dropdown-menu {
  top: 35px !important;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
