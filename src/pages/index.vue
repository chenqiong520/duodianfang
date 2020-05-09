<template>
  <div class="index">
    <div class="clearfix">
      <div class="content-fl">
        <div class="warp">
          <el-tabs type="border-card" tab-position="left" class="firstMun">
            <el-tab-pane label="买房" >
              <query-condition :ctqy="syValue.ctqy" :dj="syValue.dj" :zj="syValue.zj"></query-condition>
            </el-tab-pane>
            <el-tab-pane label="写字楼商铺">
              <div class="inputContent">
                <el-input placeholder="请输入内容" style="width:508px" size="small"></el-input>
                <el-button slot="append" icon="el-icon-search" size="small" style="background:#ff911b;color: #fff;">租房</el-button>

              </div>
              <div class="searchDetail">
                <div class="detailFl">
                  <div class="listContenttitle">
                    <span style="float: left;color: #ff612a;">新房</span>
                    <span style="float: right;"><a href="#" style="text-decoration: none;color: #2c81cd;"><i class="el-icon-location"></i>地图导航</a></span>
                  </div>
                  <div class="listContent">
                    <span v-for="item in syValue.ctqy"><a href="#">{{item.ctqyname}}</a></span>
                    <div class="priceContent">
                      <span v-for="item in syValue.dj"><a href="#">{{item.dj}}</a></span>
                    </div>
                  </div>
                </div>
                <div class="detailFr">
                  <div class="listContenttitle contenttitle">
                    <span style="float: left;color: #ff612a;">二手房</span>
                    <span style="float: right;"><a href="#" style="text-decoration: none;color: #2c81cd;"><i class="el-icon-location"></i>地图导航</a></span>
                  </div>
                  <div class="listContent borderLeft">
                    <span v-for="item in syValue.ctqy"><a href="#">{{item.ctqyname}}</a></span>
                    <div class="priceContent">
                      <span v-for="item in syValue.dj"><a href="#">{{item.dj}}</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>

        <div class="warp">
          <el-row :gutter="24">
            <el-col :span="15" >
              <div class="tipTitle">百房头条</div>
              <el-carousel trigger="click" height="320px" :interval="2000">
                <el-carousel-item v-for="item in syValue.lbt" :key="item.lbtid">
                 <img :src="item.imageurl ||defaultImg" @error="defImg" style="object-fit: fill; width: 100%;height: 100%"/>
                </el-carousel-item>
              </el-carousel>
            </el-col>
            <el-col :span="9" >
              <div class="tipTitle">百房资讯</div>
              <div class="newsContent">
                <div v-for="(i,k) in syValue.bfnews" :key="k" style="margin-bottom: 10px">
                  <p class="itemTitle link">{{i.title}}</p>
                  <p class="itemList">好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行1好消息！深圳今日启用绿码通道</p>
                </div>

              </div>
            </el-col>
          </el-row>
        </div>
        <div class="warp">
          <div class="tipTitle">百房热盘</div>
          <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item, index) in syValue.rmlp" :key="index">
              <div class=" hot-house-item">
                <img class="hot-house-img" :src="item.cxfmtpurl || defaultImg" @error="defImg">
                <div class="h-name link"> {{item.lpname}} </div>
                <div class="h-desc"> 均价{{item.junj}}元/m </div>
               <!-- <div class="h_info">
                  <span class="info_text">春暖花开礼献长沙</span>
                  <span class="sign_num">56已报名</span>
                </div>-->
              </div>
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- 左右箭头 -->
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>

        <div class="warp">
          <el-row>
            <el-col :span="24">
              <div class="tipTitle">百房导购</div>
              <div class="flex-layout">
                <div class="big-guide" v-if="syValue.dglp && syValue.dglp.length > 0">
                  <img :src="syValue.dglp[0].cxfmtpurl || defaultImg" @error="defImg"/>
                  <p class="link">{{syValue.dglp[0].lpname}}</p>
                </div>

                <div class="flex-layout right-layout">
                  <template v-for="(item,index) in syValue.dglp">
                    <div v-if="index > 0" class="bf-image-div" >
                      <img :src="item.cxfmtpurl || defaultImg" @error="defImg">

                      <div class="bf-house-desc link">{{item.lpname}}</div>
                    </div>
                  </template>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="warp">
          <el-row>
            <el-col :span="24">
              <div class="tipTitle">百房说（视频）</div>
              <div class="flex-layout box-border-wrapper">
                <template v-for="(item, index ) in syValue.vidolp ">
                  <div v-if="index < 4" class="bf-video" >
                    <img src="@/assets/item.jpg">
                    <p class="bf-house-desc link">{{item.lpname}}</p>
                  </div>
                </template>

              </div>
            </el-col>
          </el-row>
        </div>
        <!--热门二手房推荐-->
        <div class="warp">
          <el-row>
            <el-col :span="24">
              <div class="tipTitle">热门二手房推荐</div>
              <div class="second-hand-room">
                <div class="flex-layout shr-guide">
                  <div class="shr-guide-item">
                    <div class="title-name">超人气小区</div>
                    <div class="flex-layout" v-if="syValue.crqxqlist && syValue.crqxqlist.length > 0">
                      <div class="shr-img-wrapper"><img :src="syValue.crqxqlist[0].cxfmtpurl || defaultImg" @error="defImg"/></div>
                      <div>
                        <div class="house-info link" v-for="item in syValue.crqxqlist">
                          <div class="house-name">{{item.ctqyname}}-{{item.xqname}}</div>
                          <div class="house-price">{{item.fwdj}}元/m³</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="shr-guide-item">
                    <div class="title-name">最舒服小区</div>
                    <div class="flex-layout" v-if="syValue.ssxqlist && syValue.ssxqlist.length > 0">
                      <div class="shr-img-wrapper"><img :src="syValue.ssxqlist[0].cxfmtpurl || defaultImg" @error="defImg"/></div>
                      <div>
                        <div class="house-info link" v-for="item in syValue.ssxqlist">
                          <div class="house-name">{{item.ctqyname}}-{{item.xqname}}</div>
                          <div class="house-price">{{item.fwdj}}元/m³</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="flex-layout">
                  <div class="shr-text-wrapper">
                    <div class="title-name">交通便利</div>
                    <div class="house-info link" v-for="item in syValue.jtxqlist">
                      <div class="house-name">{{item.ctqyname}}-{{item.xqname}}</div>
                      <div class="house-price">{{item.fwdj}}元/m³</div>
                    </div>
                  </div>

                  <div class="shr-text-wrapper">
                    <div class="title-name">商业繁华</div>
                    <div class="house-info link" v-for="item in syValue.syffxqlist">
                      <div class="house-name">{{item.ctqyname}}-{{item.xqname}}</div>
                      <div class="house-price">{{item.fwdj}}元/m³</div>
                    </div>
                  </div>

                  <div class="shr-text-wrapper">
                    <div class="title-name">高端小区</div>
                    <div class="house-info link" v-for="item in syValue.gtxqlist">
                      <div class="house-name">{{item.ctqyname}}-{{item.xqname}}</div>
                      <div class="house-price">{{item.fwdj}}元/m³</div>
                    </div>
                  </div>

                  <div class="shr-text-wrapper">
                    <div class="title-name ">大型小区</div>
                    <div class="house-info link" v-for="item in syValue.dxxqlist">
                      <div class="house-name">{{item.ctqyname}}-{{item.xqname}}</div>
                      <div class="house-price">{{item.fwdj}}元/m³</div>
                    </div>
                  </div>

                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--热门商铺写字楼-->
        <div class="warp">
          <el-row>
            <el-col :span="24">
              <div class="tipTitle">热门商铺写字楼</div>
              <div class="flex-layout box-border-wrapper">

                <div class="bf-video" v-for="item in syValue.xzlbeans">
                  <img :src="item.cxfmtpurl"  @error="defImg">
                  <p class="bf-house-desc ellipsis link">{{item.szlp}}</p>
                  <p class="">面议</p>
                  <p class="tip-text">{{item.type | fmtType}}</p>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="content-fr">
        <div class="warp">
          <el-tabs type="border-card">
            <el-tab-pane label="深圳">
              <div v-for="(i,k) in newsList" :key="k">
                <p class="itemTitle">{{i.itemtitle}}</p>
                <p class="itemList" v-for="(z,j) in i.list" :key="j" ><a :href="z.url" target="_blank">{{z.name}}1</a></p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="东莞">
              <div v-for="(i,k) in newsList" :key="k">
                <p class="itemTitle">{{i.itemtitle}}</p>
                <p class="itemList" v-for="(z,j) in i.list" :key="j" ><a :href="z.url" target="_blank">{{z.name}}2</a></p>
              </div>
            </el-tab-pane>
            <el-tab-pane label="惠州">
              <div v-for="(i,k) in newsList" :key="k">
                <p class="itemTitle">{{i.itemtitle}}</p>
                <p class="itemList" v-for="(z,j) in i.list" :key="j" ><a :href="z.url" target="_blank">{{z.name}}3</a></p>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="warp">
          <div class="tipTitle">百房看房</div>
          <div class="bfkf">
            <template v-if="syValue.newlpBmdata && syValue.newlpBmdata.rows" v-for="(item, index ) in syValue.newlpBmdata.rows">
              <div v-if="index < 10" class="flex-layout bfkf-item" >
                <div class="bfkf-h-name link">{{item .lpname}}</div>
                <div class="bfkf-h-b">立即报名</div>
              </div>
            </template>

            <div class="more">更多楼盘立即报名<i data-v-4bf2c95d="" class="el-icon-d-arrow-right"></i></div>
          </div>
        </div>
        <div class="warp">
          <div class="tipTitle">新房动态</div>
          <div class="list-wrapper">
            <div class="list-item link" v-for="item in syValue.lpdtnews"><a>{{item.title}}</a></div>
          </div>
        </div>
        <div class="warp">
          <div class="tipTitle">房产问答</div>
          <div class="list-wrapper">
            <div class="list-item link"><a>永实蔷薇国际预推小户型毛坯住宅</a></div>
            <div  class="list-item link"><a>永实蔷薇国际预推小户型毛坯住宅</a></div>
            <div  class="list-item link"><a>永实蔷薇国际预推小户型毛坯住宅</a></div>
            <div  class="list-item link"><a>永实蔷薇国际预推小户型毛坯住宅</a></div>
            <div  class="list-item link"><a>永实蔷薇国际预推小户型毛坯住宅</a></div>
          <div class="more">更多问答<i data-v-4bf2c95d="" class="el-icon-d-arrow-right"></i></div>
          </div>
        </div>
      </div>
    </div>

    <footer-navigation></footer-navigation>
  </div>
</template>
<script>
  import FooterNavigation from '@/components/index/FooterNavigation'
  import QueryCondition from '@/components/index/QueryCondition.vue'

  export default {
  name: 'index',
  components: {
    FooterNavigation, QueryCondition
  },
    filters: {
      fmtType (type) {
        if (type.toString() === '1'){
          return '写字楼'
        } else {
          return '商铺'
        }
      }
    },

  data() {
    return {
      newsList:[
        {itemtitle:'政策加持 刚需上车400万以内的新房在这里',list:[
          {name:'好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',url:'www.baidu.com'},
          {name:'好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',url:'www.baidu.com'},
          {name:'好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',url:'www.baidu.com'},
          {name:'好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',url:'www.baidu.com'}
        ]},
        {itemtitle:'政策加持 刚需上车400万以内的新房在这里',list:[
          {name:'好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',url:'www.baidu.com'},
          {name:'好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',url:'www.baidu.com'},
          {name:'好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',url:'www.baidu.com'},
        ]}
      ],
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,
        },
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2, // 多少为一组
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      syValue: {
        bfnews: [],
        ctqy: [],
        dj: [],
        dglp: [],
        newlpBmdata: {
          rows: []
        }
      },
      defaultImg:  require('@/assets/item.jpg')
    }
  },
    props: {
      ctid: {
        type: String,
        default: '2018'
      }
    },
  mounted () {
    this.initData()
  },
  watch: {
  ctid() {
    // this.initData()
  }
  },
  methods: {
    defImg(event){
      let img = event.srcElement;
      img.src = this.defaultImg;
      img.onerror = null; //防止闪图
    },
    initData () {
      let params = this.api.getParam('sydata3', {ctid: this.ctid}, {paging:true,pageNow:"1",order:"lpid",sort:"desc"})
      this.api.postData(this, params).then((data) => {
        if (data.code === 0) {
          this.syValue =JSON.parse(data.data.syvalue)
          console.log(this.syValue)
        } else {

        }
      }).catch((code) => {

      })
    }
  }
}
</script>
<style  lang="scss">
  @import '../style/theme';
.content-fl{
  float: left;
  width: 870px;
  /* background-color: greenyellow; */
  display: block;
  margin-top: 10px;
  overflow: hidden;
}
.content-fr{
  float: right;
  width: 293px;
  display: block;
  margin-top: 10px;
  overflow: hidden;
}
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .clearfix {
    *zoom: 1;
  }
.warp{
  width: 100%;
  min-height: 240px;
  margin-bottom: 40px;
}
.inputContent{
  margin: 0 auto;
  width: 600px;
  height: 46px;
  line-height: 44px;
  background-color: #ececec;
  border-radius: 4px;
}
/* .searchDetail{

} */
.detailFl,.detailFr{
  float: left;
  width: 338px;
  height: 220px;
  /* background-color: red; */
}
.listContenttitle{
  width: calc(100% - 20px);
  height: 40px;
  padding: 0px 20px 0px 0px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 700;
}
.contenttitle{
  width: calc(100% - 40px);
  padding: 0px 20px;
}
.listContent{
  width: 100%;
  height: 180px;
  text-align: left;

}
.listContent>span,.priceContent>span{
  font-size: 14px;
  margin: 0px 10px 0px 0px;
  line-height: 40px;
}
.listContent>span>a,.priceContent>span>a{
  text-decoration: none;
  color: #909399;

}
.listContent>span>a:hover,.priceContent>span>a:hover{
  color: #ff911b;
  text-decoration:underline
}

.borderLeft{
  padding-left: 10px;
  border-left: 1px solid #ececec;
}

.itemTitle{
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
}
.itemList{
  text-align: left;
  font-size: 14px;
  color: #909399;
  line-height: 30px;

}
.itemList>a{
  text-decoration: none;
  color: #909399;
}


.content-fl>.warp>.firstMun>.el-tabs__header>.el-tabs__nav-wrap.is-scrollable{
  padding:0px 0px!important;
}
.content-fl>.warp>.firstMun .el-tabs__item{
  padding: 0px 40px!important;
  height: 150px!important;
  line-height: 150px!important;
  text-align: center;
}
.tipTitle{
  font-size: 22px;
  line-height: 40px;
  font-weight: 600;
  text-align: left;
}

.newsContent{

  height: 320px;

}



.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }


// 热盘
   .hot-house-item {
     border: 1px solid $border-color-base;
     padding: 20px;
.hot-house-img {
  width: 100%;
  height: 220px;
}
.h-name {
  font-size: 16px;
  color: #333;
  margin: 10px 0;
}
.h-desc {
  font-size: 14px;
  color: #999;
  margin-bottom: 10px;
}
.h_info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info_text {
  color: $main-color;
  font-size: 24px;

}
.sign_num {
  float: right;
  font-size: 14px;
  color: #999;
}
}
   .swiper-container{
     .swiper-button-prev {
       background-image: url('../../static/index/left.png');
       width: 48px;
       height: 48px;
       background-size: cover;
     }
     .swiper-button-next {
       width: 48px;
       height: 48px;
       background-image: url('../../static/index/right.png');
       background-size: cover;
     }
   }
.flex-layout {
  display: flex;
&.right-layout {
   flex-wrap: wrap;
.bf-image-div {
  width: 200px;
  margin-left: 20px;
  margin-bottom: 15px;
>img {
   width: 100%;
   height: 150px;
 }
}
}
.bf-house-desc {
  font-size: $font-size-14;
  color: $font-color-title;
  margin-top: 4px;
  margin-bottom: 4px;
}
.tip-text {
  color: $font-color-text;
  margin-top: 5px;
}
}
.big-guide {
  width: 50%;
>img {
   width: 410px;
   height: 365px;
 }
>p{
   font-size: $font-size-20;
   color: $font-color-title;
   line-height: 54px;
 }

}
.bf-video {
  width: 180px;
  margin-right: 30px;
>img {
   width: 100%;
 }
&:last-child {
   margin-right: 0;
 }
}
/*二手房*/
.second-hand-room {
  border: 1px solid $border-color-base;
  border-radius: 4px;
  padding: 20px;
.title-name {
  font-size: 18px;
  color: #467e00;
  margin-bottom: 15px;
}
.house-info {
  padding: 10px 0;
  line-height: 23px;
  font-size: $font-size-14;
  color: $font-color-title;
}
.shr-guide {
  border-bottom: 1px dashed #e6e6e6;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.shr-guide-item {
  width: 50%;

.shr-img-wrapper {
  width: 180px;
  height: 135px;
  margin-right: 33px;
>img {
   width: 100%;
   height: 100%;
 }
}

}
.shr-text-wrapper {
  width: 25%;
> .title-name {
    margin-bottom: 5px;
  }
}
}
.box-border-wrapper {
  padding: 20px;
  border: 1px solid $border-color-base;
}
.footer-city {
  margin-top: 30px;
  margin-bottom: 50px;
}
  .bfkf {
    border: 1px solid $border-color-base;
    padding: 15px;
  }
  .bfkf-item {
    line-height: 35px;
    justify-content: space-between;
    .bfkf-h-name {
      font-size: $font-size-14;
      color: $font-color-title;
    }
    .bfkf-h-b {
      font-size: $font-size-14;
      cursor: pointer;
      color: #ff6600;
    }

  }
  .more {
    text-align: right;
    margin-top: 10px;
    color: #409EFF;
    cursor: pointer;
  }
  .list-wrapper {
    font-size: $font-size-14;
    color: $font-color-title;
    padding: 15px;
    border: 1px solid $border-color-base;
    border-radius: 4px;
    .list-item {
      line-height: 35px;
      margin-bottom: 5px;
      a{
        cursor: pointer;
        &:hover {
          color: #ff911b;

        }
      }
    }
  }
  .link{
    cursor: pointer;
    &:hover {
      color: #ff911b;
      text-decoration: underline;
    }
  }
  .index img {
    cursor: pointer;
  }
</style>
