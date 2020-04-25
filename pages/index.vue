<template>
  <div class="index">
    <div class="content-fl">
      <div class="warp">
        <el-tabs type="border-card" tab-position="left" class="firstMun">
          <el-tab-pane label="买房">
            <div class="inputContent">
              <el-input placeholder="请输入内容" style="width:360px" size="small" />
              <el-button slot="append" icon="el-icon-search" size="small" style="background:#ff911b;color: #fff;">新房搜索</el-button>
              <el-button slot="append" icon="el-icon-search" size="small" style="background:#ff612a;color: #fff;">二手房搜索</el-button>
            </div>
            <div class="searchDetail">
              <div class="detailFl">
                <div class="listContenttitle">
                  <span style="float: left;color: #ff612a;">新房</span>
                  <span style="float: right;"><a href="#" style="text-decoration: none;color: #2c81cd;"><i class="el-icon-location" />地图导航</a></span>
                </div>
                <div class="listContent">
                  <span><a href="#">南山区</a></span>
                  <span><a href="#">宝安区</a></span>
                  <span><a href="#">平湖区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <div class="priceContent">
                    <span><a href="#">50-100万</a></span>
                    <span><a href="#">100-150万</a></span>
                    <span><a href="#">150以上</a></span>
                  </div>
                </div>
              </div>
              <div class="detailFr">
                <div class="listContenttitle contenttitle">
                  <span style="float: left;color: #ff612a;">二手房</span>
                  <span style="float: right;"><a href="#" style="text-decoration: none;color: #2c81cd;"><i class="el-icon-location" />地图导航</a></span>
                </div>
                <div class="listContent borderLeft">
                  <span><a href="#">南山区</a></span>
                  <span><a href="#">宝安区</a></span>
                  <span><a href="#">平湖区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <div class="priceContent">
                    <span><a href="#">50-100万</a></span>
                    <span><a href="#">100-150万</a></span>
                    <span><a href="#">150以上</a></span>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="卖房">
            <div class="inputContent">
              <el-input placeholder="请输入内容" style="width:360px" size="small" />
              <el-button slot="append" icon="el-icon-search" size="small" style="background:#ff911b;color: #fff;">新房搜索</el-button>
              <el-button slot="append" icon="el-icon-search" size="small" style="background:#ff612a;color: #fff;">二手房搜索</el-button>
            </div>
            <div class="searchDetail">
              <div class="detailFl">
                <div class="listContenttitle">
                  <span style="float: left;color: #ff612a;">新房</span>
                  <span style="float: right;"><a href="#" style="text-decoration: none;color: #2c81cd;"><i class="el-icon-location" />地图导航</a></span>
                </div>
                <div class="listContent">
                  <span><a href="#">南山区</a></span>
                  <span><a href="#">宝安区</a></span>
                  <span><a href="#">平湖区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <div class="priceContent">
                    <span><a href="#">50-100万</a></span>
                    <span><a href="#">100-150万</a></span>
                    <span><a href="#">150以上</a></span>
                  </div>
                </div>
              </div>
              <div class="detailFr">
                <div class="listContenttitle contenttitle">
                  <span style="float: left;color: #ff612a;">二手房</span>
                  <span style="float: right;"><a href="#" style="text-decoration: none;color: #2c81cd;"><i class="el-icon-location" />地图导航</a></span>
                </div>
                <div class="listContent borderLeft">
                  <span><a href="#">南山区</a></span>
                  <span><a href="#">宝安区</a></span>
                  <span><a href="#">平湖区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <div class="priceContent">
                    <span><a href="#">50-100万</a></span>
                    <span><a href="#">100-150万</a></span>
                    <span><a href="#">150以上</a></span>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="租房">
            <div class="inputContent">
              <el-input placeholder="请输入内容" style="width:508px" size="small" />
              <el-button slot="append" icon="el-icon-search" size="small" style="background:#ff911b;color: #fff;">租房</el-button>
            </div>
            <div class="searchDetail">
              <div class="detailFl">
                <div class="listContenttitle">
                  <span style="float: left;color: #ff612a;">新房</span>
                  <span style="float: right;"><a href="#" style="text-decoration: none;color: #2c81cd;"><i class="el-icon-location" />地图导航</a></span>
                </div>
                <div class="listContent">
                  <span><a href="#">南山区</a></span>
                  <span><a href="#">宝安区</a></span>
                  <span><a href="#">平湖区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <div class="priceContent">
                    <span><a href="#">50-100万</a></span>
                    <span><a href="#">100-150万</a></span>
                    <span><a href="#">150以上</a></span>
                  </div>
                </div>
              </div>
              <div class="detailFr">
                <div class="listContenttitle contenttitle">
                  <span style="float: left;color: #ff612a;">二手房</span>
                  <span style="float: right;"><a href="#" style="text-decoration: none;color: #2c81cd;"><i class="el-icon-location" />地图导航</a></span>
                </div>
                <div class="listContent borderLeft">
                  <span><a href="#">南山区</a></span>
                  <span><a href="#">宝安区</a></span>
                  <span><a href="#">平湖区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <span><a href="#">沙田区</a></span>
                  <div class="priceContent">
                    <span><a href="#">50-100万</a></span>
                    <span><a href="#">100-150万</a></span>
                    <span><a href="#">150以上</a></span>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
      
      <div class="warp">
        <el-row :gutter="24">
          <el-col :span="16">
            <div class="tipTitle">百房头条</div>
            <el-carousel :interval="2000" trigger="click" height="320px">
              <el-carousel-item v-for="item in 4" :key="item">
                <img src="@/assets/item.jpg">
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="8">
            <div class="tipTitle">
              百房资讯 
            </div>
            <div class="newsContent">
              <div v-for="(i,k) in newsList" :key="k">
                <p class="itemTitle">{{ i.itemtitle }}</p>
                <p v-for="(z,j) in i.list" :key="j" class="itemList"><a :href="z.url" target="_blank">{{ z.name }}</a></p>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="warp">
        <el-row :gutter="24">
          <el-col :span="16">
            <div class="tipTitle">百房热盘</div>
            <div v-swiper:mySwiper="swiperOption" class="swiper" height="360px">
              <div class="swiper-wrapper">
                <div v-for="item in 4" :key="item" class="swiper-slide">
                  <div class=" hot-house-item">
                    <img class="hot-house-img" src="@/assets/item.jpg">
                    <div class="h-name"> 恒大文化旅游城 </div>
                    <div class="h-desc"> 均价45346元/m 户型80-150平 </div>
                    <div class="h_info">
                      <span class="info_text">春暖花开礼献长沙</span>
                      <span class="sign_num">56已报名</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="tipTitle">特色楼盘</div>
            <div>
              <img src="@/assets/item.jpg">
              <div>戛纳湾在售不限产品</div>
            </div>
            <div>
              <img src="@/assets/item.jpg">
              <div>戛纳湾在售不限产品</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="warp">
        <el-row :gutter="24">
          <el-col :span="16">
            <div class="tipTitle">百房导购</div>
            <div class="flex-layout">
              <div class="">
                <img src="@/assets/item.jpg">
              </div>
              <div class="flex-layout right-layout">
                <div class="">
                  <img src="@/assets/item.jpg">
                </div>
                <div class="">
                  <img src="@/assets/item.jpg">
                </div>
                <div class="">
                  <img src="@/assets/item.jpg">
                </div>
                <div class="">
                  <img src="@/assets/item.jpg">
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="tipTitle">新房动态</div>
            <div>春暖花开礼献长沙</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="content-fr">
      <div class="warp">
        <el-tabs type="border-card">
          <el-tab-pane label="深圳">
            <div v-for="(i,k) in newsList" :key="k">
              <p class="itemTitle">{{ i.itemtitle }}</p>
              <p v-for="(z,j) in i.list" :key="j" class="itemList"><a :href="z.url" target="_blank">{{ z.name }}1</a></p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="东莞">
            <div v-for="(i,k) in newsList" :key="k">
              <p class="itemTitle">{{ i.itemtitle }}</p>
              <p v-for="(z,j) in i.list" :key="j" class="itemList"><a :href="z.url" target="_blank">{{ z.name }}2</a></p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="惠州">
            <div v-for="(i,k) in newsList" :key="k">
              <p class="itemTitle">{{ i.itemtitle }}</p>
              <p v-for="(z,j) in i.list" :key="j" class="itemList"><a :href="z.url" target="_blank">{{ z.name }}3</a></p>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
// import myjson from '@/assets/json/43100.json'
export default {
  name: 'Index',
  layout: 'home',
  data() {
    return {
      newsList: [
        {
          itemtitle: '政策加持 刚需上车400万以内的新房在这里',
          list: [
            {
              name: '好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',
              url: 'www.baidu.com'
            },
            {
              name: '好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',
              url: 'www.baidu.com'
            },
            {
              name: '好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',
              url: 'www.baidu.com'
            },
            {
              name: '好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',
              url: 'www.baidu.com'
            }
          ]
        },
        {
          itemtitle: '政策加持 刚需上车400万以内的新房在这里',
          list: [
            {
              name: '好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',
              url: 'www.baidu.com'
            },
            {
              name: '好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',
              url: 'www.baidu.com'
            },
            {
              name: '好消息！深圳今日启用绿码通道，满足这些条件车辆可免检通行',
              url: 'www.baidu.com'
            }
          ]
        }
      ],
      swiperOption: {
        autoplay: true,
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 2, // 多少为一组
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scope >
@import '@/style/theme.scss';
.content-fl {
  float: left;
  width: 870px;
  display: block;
  margin-top: 10px;
  overflow: hidden;
}
.content-fr {
  float: right;
  width: 293px;
  background-color: greenyellow;
  display: block;
  margin-top: 10px;
  overflow: hidden;
}
.warp {
  width: 100%;
  min-height: 240px;
  margin-bottom: 10px;
}
.inputContent {
  margin: 0 auto;
  width: 600px;
  height: 46px;
  line-height: 44px;
  background-color: #ececec;
  border-radius: 4px;
}
.detailFl,
.detailFr {
  float: left;
  width: 338px;
  height: 220px;
}
.listContenttitle {
  width: calc(100% - 20px);
  height: 40px;
  padding: 0px 20px 0px 0px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 700;
}
.contenttitle {
  width: calc(100% - 40px);
  padding: 0px 20px;
}
.listContent {
  width: 100%;
  height: 180px;
  text-align: left;
}
.listContent > span,
.priceContent > span {
  font-size: 14px;
  margin: 0px 10px 0px 0px;
  line-height: 40px;
}
.listContent > span > a,
.priceContent > span > a {
  text-decoration: none;
  color: #909399;
}
.listContent > span > a:hover,
.priceContent > span > a:hover {
  color: #ff911b;
  text-decoration: underline;
}

.borderLeft {
  padding-left: 10px;
  border-left: 1px solid #ececec;
}
.itemTitle {
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
}
.itemList {
  text-align: left;
  font-size: 14px;
}
.itemList > a {
  text-decoration: none;
  color: #909399;
}

.content-fl
  > .warp
  > .firstMun
  > .el-tabs__header
  > .el-tabs__nav-wrap.is-scrollable {
  padding: 0px 0px !important;
}
.content-fl > .warp > .firstMun .el-tabs__item {
  padding: 0px 60px !important;
  height: 100px !important;
  line-height: 80px !important;
}
.tipTitle {
  font-size: 22px;
  line-height: 40px;
  font-weight: 600;
  text-align: left;
}

.newsContent {
  height: 320px;
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
    font-size: 14px;
    color: #333;
    margin: 10px 0;
  }
  .h-desc {
    font-size: 12px;
    color: #999;
    margin-bottom: 10px;
  }
  .info_text {
    color: $main-color;
  }
  .sign_num {
    float: right;
    font-size: 12px;
  }
}
.flex-layout {
  display: flex;
  &.right-layout {
    flex-wrap: wrap;
  }
}
</style>
