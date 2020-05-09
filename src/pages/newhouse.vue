<template>
  <div class="main">
    <div class="searchWarp">
      <el-card class="box-card">
        <my-select  @selectConditions="selectConditions"></my-select>
      </el-card>
    </div>
    <div class="contWarp">
      <div class="contWarp-fl">
        <el-tabs type="border-card" v-model="tabName" @tab-click="handleClickTab">
          <el-tab-pane label="全部楼盘" name="all">
            <div class="itemHeader">
              <span class="allmx">共有<span>{{pagination.total}}</span>个符合要求的楼盘</span>
              <span class="allpx" >
                <span @click="handhleCaret(1, 'lpid')" :class="[myCaret==1?'mypint':'']">默认排序</span>
                <span @click="handhleCaret(2, 'junj')" :class="[myCaret==2?'mypint':'']">价格<i class="el-icon-d-caret"></i></span>
                <span @click="handhleCaret(3, 'kpsj')" :class="[myCaret==3?'mypint':'']">开盘时间<i class="el-icon-d-caret"></i></span>
              </span>
            </div>
            <my-warp :warpList="allList"></my-warp>
          </el-tab-pane>
          <el-tab-pane label="最新楼盘" name="hot">
            <div class="itemHeader">
              <span class="allmx">共有<span>{{pagination.total}}</span>个符合要求的楼盘</span>
              <span class="allpx" >
                <span @click="handhleCaret(1)" :class="[myCaret==1?'mypint':'']">默认排序</span>
                <span @click="handhleCaret(2)" :class="[myCaret==2?'mypint':'']">价格<i class="el-icon-d-caret"></i></span>
                <span @click="handhleCaret(3)" :class="[myCaret==3?'mypint':'']">开盘时间<i class="el-icon-d-caret"></i></span>
              </span>
            </div>
            <my-warp :warpList="allList"></my-warp>
          </el-tab-pane>
          <pagination :pagination="pagination" :sizeChange="sizeChange" :pageChange="pageChange"></pagination>
        </el-tabs>
      </div>
      <div class="contWarp-fr">
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
  import mySelect from "@/components/select.vue";
  import myWarp from "@/components/newwarp.vue";
  import newImg from "@/components/newimg.vue";
  import pagination from "@/components/pagination.vue";
  export default {
    components:{
      mySelect,
      myWarp,
      newImg,
      pagination
    },
    props: {
      ctid: {
        type: String,
        default: '2018'
      }
    },
    data(){
      return {
        myCaret:1,
        allList:[],
        imgList:[],
        conditions: {
          ctid:"",
          newbq:null,// 新房标签
          ctqybm:null, //城市区
          lmqybm:null, //街道
          djminvaue:null, //单价最小值
          djmaxvaue:null, // 单价最大值
          zjminvalue:null,//总价最小值
          zjmaxvalue:null,//总价最大值
          mjminvalue:null,//面积最小值
          mjmaxvalue:null,//面积最大值
          hx:null,//户型
          xszt:null,//销售状态
          wylx:null,//物业类型
          zxzk:null,//装修状态
          kpsj:null//开盘时间
        },
        pagination: {
          total: 10,
          pageNo: 1,
          pageSize: 5,
          order: 'lpid'
        },
        tabName: 'all'
      }
    },
    mounted(){
      this.conditions.ctid = this.ctid
      this.getDataList()
      this.getHotList()
    },
    methods:{
      handleClickTab (tab) {
        let newbq = null
        if(tab.name=== 'hot') {
          newbq = 1
        } else {
          newbq = null
        }
        this.conditions.newbq = newbq
        this.pagination.pageNo = 1
        this.getDataList()
      },
      //排序方式
      handhleCaret(i, order){
        this.myCaret = i
        this.pagination.order = order
        this.pagination.pageNo = 1
        this.getDataList()
      },
      sizeChange (size) {
        this.pagination.pageSize = size
         this.getDataList()
      },
      pageChange (page) {
        this.pagination.pageNo = page
         this.getDataList()
      },
      selectConditions(conditions) {
        this.conditions.ctqybm = conditions.ctqybm
        this.conditions.zjminvalue = conditions.zjminvalue
        this.conditions.zjmaxvalue= conditions.zjmaxvalue
        this.conditions.djminvaue= conditions.djminvaue
        this.conditions.djmaxvalue= conditions.djmaxvalue
        this.conditions.mjminvalue=conditions.mjminvalue//面积最小值
        this.conditions.mjmaxvalue=conditions.mjmaxvalue//面积最大值
        this.conditions.hx =conditions.hx
        this.conditions.xszt= conditions.xszt//销售状态
        this.conditions.wylx= conditions.wylx //物业类型
        this.conditions.kpsj= conditions.kpsj //开盘时间
        this.conditions.zxzk= conditions.zxzk //装修状态
        this.pagination.pageNo = 1
        this.getDataList()

      },
      getDataList() {
        let params = this.api.getParam('lp1', this.conditions, {paging: true,pageNow:this.pagination.pageNo,pageSize:this.pagination.pageSize, order:this.pagination.order,sort:"desc"})
        this.api.postData(this, params).then((res) => {
          if (res.code === 0) {
            this.allList = res.data.rows
            this.pagination.total = res.data.total
          } else {

          }
        }).catch((code) => {

        })
      },
      getHotList() {
        let conditions = {ctid:this.ctid,newbq:1,ctqybm:null,lmqybm:null,djminvaue:null,djmaxvaue:null,
          zjminvalue:null,zjmaxvalue:null,mjminvalue:null,mjmaxvalue:null,hx:null,xszt:null,wylx:null,zxzk:null,kpsj:null}
        let params = this.api.getParam('lp1', conditions, {paging: true,pageNow:1,pageSize:5, order:'lpid',sort:"desc"})
        this.api.postData(this, params).then((res) => {
          if (res.code === 0) {
            this.imgList= res.data.rows
          } else {

          }
        }).catch((code) => {

        })
      }
    }
  }
</script>
<style scoped>
  .searchWarp{
    margin-top: 20px;
    width: 100%;
  }

  .itemDiv{
    width: 100%;
    border-bottom: 1px dashed #DCDFE6;
    text-align: left;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 5px;
    padding: 3px;
  }
  .itemTitle{
    text-align: center;
  }
  .selectPoint{
    cursor: pointer;
  }
  .mypint{
    color: rgb(255, 208, 75);
  }

  .item-list{
    padding: 0px 8px;
    cursor: pointer;
  }
  .item-list:first-child{
    padding-left: 0px;
  }






  .contWarp{
    margin-top: 10px;
    width: 100%;
    /* height: 1000px; */
    /* border: 1px solid #ddd; */
  }
  .contWarp-fl{
    float: left;
    width: 870px;
    /* height: 1000px; */
    /* border: 1px solid #ddd; */
  }
  .contWarp-fr{
    float: right;
    width: 293px;
    /* height: 1000px; */
    border: 1px solid #ddd;
  }

  .itemHeader{
    width: 100%;
    height: 30px;
    font-size: 14px;
    border-bottom: 1px solid #ddd;
  }
  .allmx{
    float: left;

  }
  .allmx>span{
    color: red;
  }
  .allpx{
    float: right;
  }
  .allpx>span{
    margin-left: 30px;
    cursor: pointer;
  }
  .allpx>span:hover{
    color: rgb(255, 208, 75);
  }



  .mypint{
    color: rgb(255, 208, 75);
  }

  .rightTitle{
    float: left;
    font-size: 22px;
    line-height: 40px;
    font-weight: 600;
    text-align: left;

  }
  .toptitle{
    padding: 0px 24px;
    width: calc(100% - 48px);
    height: 40px;
  }
  .more{
    float: right;
    text-align: right;
    font-size: 14px;
    line-height: 40px;
    color: #999;
    cursor: pointer;
  }
</style>
