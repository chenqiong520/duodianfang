<template>
  <div class="contWarp">
    <div class="contWarp-fl">
      <div class="videoContent">
        <ul>
          <li v-for="(i,k) in contentList" :key="k">
            <img :src="i.url" alt="" srcset="" width="100%" height="120px">
            <p class="indus">
              {{i.name}}
              
            </p>
            <span class="putName">报名</span>
          </li>
        </ul>
      </div>
      <pagination :pagination="pagination" @sizeChange="sizeChange" @pageChange="pageChange"></pagination>
      <!-- <new-content :newcontentList="contentList"></new-content> -->
    </div>
    <div class="contWarp-fr">
      <div class="paihang">
        <div class="toptitle">
          <div class="rightTitle">
            热门楼盘
          </div>
          <div class="more">更多<i class="el-icon-d-arrow-right"></i></div>
        </div>
        
        <new-img wordOrimg='1' :newimgList="imgList"></new-img>
      </div>
     
    </div>
  </div>
</template>
<script>
import newContent from '@/components/newcontent.vue'
import newImg from '@/components/newimg.vue'
import pagination from '@/components/pagination.vue'
export default {
  layout: 'home',
  components: {
    newContent,
    newImg,
    pagination
  },
  data() {
    return {
      contentList: [
        {
          url: require('@/assets/item.jpg'),
          name:
            '恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套，悦享缤纷文旅配套，悦享缤纷文旅配套'
        },
        {
          url: require('@/assets/item.jpg'),
          name: '恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套'
        },
        {
          url: require('@/assets/item.jpg'),
          name: '恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套'
        },
        {
          url: require('@/assets/item.jpg'),
          name: '恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套'
        },
        {
          url: require('@/assets/item.jpg'),
          name: '恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套'
        },
        {
          url: require('@/assets/item.jpg'),
          name: '恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套'
        },
        {
          url: require('@/assets/item.jpg'),
          name: '恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套'
        },
        {
          url: require('@/assets/item.jpg'),
          name: '恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套'
        }
      ],
      imgList: [
        { url: require('@/assets/item.jpg'), word: '碧桂园印象1' },
        { url: require('@/assets/item.jpg'), word: '碧桂园印象2' },
        { url: require('@/assets/item.jpg'), word: '碧桂园印象3' },
        { url: require('@/assets/item.jpg'), word: '碧桂园印象4' }
      ],
      pagination: {
        totalItem: 20,
        totalPage: 20,
        curPage: 1,
        perPage: 1,
        textWord: '个有关深圳新房楼盘'
      }
    }
  },
  methods: {
    sizeChange(size) {
      this.search.perPage = size
      this.getData()
    },
    pageChange(page) {
      this.search.page = page
      this.getData()
    }
  }
}
</script>
<style scoped>
.contWarp {
  margin-top: 10px;
  width: 100%;
}
.contWarp-fl {
  float: left;
  width: 870px;
}
.searchDiv {
  width: calc(100% - 160px);
  padding: 5px 80px;
  height: 46px;
  text-align: left;
  line-height: 46px;
}
.inputBg {
  position: absolute;
  width: 410px;
  height: 46px;
  border-radius: 4px;
  background: #ececec;
}
.videoContent,
.videoContent > ul {
  width: 100%;
  float: left;
  display: block;
  clear: both;
}
.videoContent > ul > li {
  position: relative;
  width: 200px;
  height: 190px;
  /* background: red; */
  margin: 8px;
  list-style: none;
  float: left;
  /* display: block; */
}
.indus {
  font-size: 14px;
  line-height: 20px;
  height: 40px;
  text-align: left;

  /* overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.putName {
  position: absolute;
  color: #fff;
  /* width: 30px; */
  padding: 0px 10px;
  height: 20px;
  display: block;
  background-color: #ff552e;
  bottom: 0px;
  right: 0px;
  line-height: 20px;
  cursor: pointer;
  border: 1px solid #fff;
}
.putName:hover {
  border: 1px solid #999;
}
.contWarp-fr {
  float: right;
  width: 293px;
  /* border: 1px solid #ddd; */
}
.paihang {
  border: 1px solid #ddd;
}
.rightTitle {
  float: left;
  font-size: 22px;
  line-height: 40px;
  font-weight: 600;
  text-align: left;
}
.toptitle {
  padding: 0px 15px;
  width: calc(100% - 30px);
  height: 40px;
}
.more {
  float: right;
  text-align: right;
  font-size: 14px;
  line-height: 40px;
  color: #999;
  cursor: pointer;
}
</style>
