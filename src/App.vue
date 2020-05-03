<template>
  <div id="app">
    <!-- 页面头部展示 -->
    <header class="indexheader">
      <div class="headerinner">
        <el-row :gutter="24" style="height: 60px;">
          <el-col :span="3"  class="myheaderTitle">
            <img src="./assets/logoheader.png" alt="" width="100%" height="48px" style="margin-top: 7px;">
          </el-col>

          <el-col :span="2"  class="myheaderTitle" >

            <el-popover trigger="hover"   v-model="visible">
              <div class="area-wrapper">
                <div v-for="item in areaList" class="flex-layout area-item">
                  <div class="area-name">{{item.qybm}}</div>
                  <div class="flex-layout city-wrapper" >
                    <div v-for="city in item.ctbean" class="city-item" @click="selectCity(city)">{{city.ctname}}</div>
                  </div>
                </div>
              </div>
              <div slot="reference"  class="select-city" >{{selectArea}} <i class="el-icon-arrow-down"></i></div>
            </el-popover>
          </el-col>

          <el-col :span="19" >
            <el-menu :default-active="$route.path"
            background-color="#8fc320"
            text-color="#fff"
            active-text-color="#ffd04b" mode="horizontal" @select="handleSelect">
              <el-menu-item v-for="(z,j) in heanderlist" :key="j" :index="z.link">{{z.name}}</el-menu-item>
              <el-menu-item index="/register" style="margin-left: 100px;">注册</el-menu-item>
              <el-menu-item index="/map">登录</el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    </header>
    <!-- 页面内容区域展示 -->
    <div class="contentdown">
      <router-view :ctid="ctid" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      heanderlist:[
        {name:'首页',link:'/index'},
        {name:'新房',link:'/newhouse'},
        {name:'二手房',link:'/oldhouse'},
        {name:'商铺写字楼',link:'/storehouse'},
        {name:'百房新闻',link:'/newshouse'},
        {name:'百房视频',link:'/videohouse'},
        {name:'看房报名',link:'/watchhouse'},
        {name:'问答',link:'/reply'}

      ],
      // activeIndex:'/',
      areaList:[],
      selectArea:'长沙',
      ctid: '2018',
      visible: false,
      selectIndex:'/index'
    }
  },
   mounted(){
    this.getCity()
   },
  methods:{
    getCity () {
      let params = this.api.getParam('qy17', {}, {paging:true,pageNow:"1",order:"lpid",sort:"desc"})
      this.api.postData(this, params).then((res) => {
        if (res.code === 0) {
          this.areaList = res.data
        } else {

        }
      }).catch((code) => {

      })
    },
    handleSelect(key, keyPath) {
      if(this.selectIndex!=key){
        this.$router.push(key)
      }
      this.selectIndex = key
    },
    selectCity(city){
      this.selectArea = city.ctname
      this.ctid = city.ctid.toString()
      this.visible = false
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;

  }
  .indexheader{
    width: 100vw;
    height: 60px;
    background-color: #8fc320;
  }
  .headerinner{
    width: 1180px;
    height: 60px;
    margin: 0 auto;
  }
  .myheaderTitle{
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
  .contentdown{
    width: 1180px;

    margin: 0px auto;
  }
  .select-city {
    line-height: 60px;
    cursor: pointer;
    color:#fff;
    cursor: pointer;
    text-align: center;
  }
  .el-popper[x-placement^=bottom] {
    margin-top:0;
  }
.area-wrapper {
  width: 350px;
  font-size: 12px;
}
.area-wrapper .area-item {
  border-bottom: 1px solid #e8e8e8;
  padding: 15px;
}
  .area-wrapper .area-item:last-child {
    border-bottom: none;
  }
.area-wrapper .area-item .area-name {
  color: #333;
  width: 80px;
}
  .area-wrapper .city-wrapper {
    flex-wrap: wrap;

}
  .area-wrapper .city-wrapper .city-item {
    margin-right: 15px;
    cursor: pointer;
    color: #1a519f;
  }
  .area-wrapper .city-wrapper .city-item:hover {
    color: #ff911b;
    text-decoration: underline;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
