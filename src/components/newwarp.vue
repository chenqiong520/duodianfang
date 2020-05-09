<template>
  <section>
    <div class="itemWarp" v-for="(i,k) in warpList" :key="k">
      <el-row :gutter="24">
        <el-col :span="6">
          <img :src="i.cxfmtpurl" alt="item" width="100%">
        </el-col>
        <el-col :span="18">
          <p class="itemName">{{i.lpname}}</p>
          <div class="address">
            <span class="itemAddress">
              {{i.sldz}}
            </span>
            <span class="itemAddressPrice">
              均价<span>{{i.junj}}</span>元/㎡
            </span>
          </div>
          <div class="address">
            <span class="itemAddress">
              户型：{{i.hx}}室  | 建筑面积：{{i.zdmj}}
            </span>
          </div>
          <div class="address">
            <span class="itempaint forsale">{{i.xsztvalue}}</span>
            <span class="itempaint wuyetp">{{i.wylxvalue}}</span>
            <span class="itempaint emp">{{i.jzlxvalue}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>
<script>
  export default {
      name:'mywarp',
      props: {
        warpList:{
          type: Array,
          default: () => {
            return []
          }
        }
      }
  }
</script>
<style scoped>
.itemWarp{
  padding: 20px 0px 15px;
  border-bottom: 1px dashed #ddd;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
}
.itemName{
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.address{
  width: 100%;
  height: 30px;
  margin-top: 8px;
  color:#999;
  /* text-align: left; */

}
.itemAddress{
  /* float: left; */
  line-height: 40px;
}
.itemAddressPrice{
  float: right;
}
.itemAddressPrice>span{
  padding: 0 2px;
    font-size: 28px;
    color: #fd4d39;
    font-weight: 600;
    font-family: Tahoma,Arial,"Helvetica Neue",Helvetica,sans-serif;
}
.address>.itempaint{
  display: inline-block;
  color: #fff;
  padding: 2px 5px;
  margin-right: 10px;
  margin-top: 13px;
  /* border: 1px solid #ddd; */
}
.forsale{
  background: #ff9366;
}
.wuyetp{
  background: #67cddb;
}
.emp{
  color: #999!important;
  background: #eee;
}
</style>
